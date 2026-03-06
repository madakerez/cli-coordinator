import * as http from 'http';
import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { join } from 'path';

const PORT = parseInt(process.env.PORT || '8765', 10);
const ROOT = join(__dirname, '..');
// No more LIBS_ONLY — coordinator always handles full pipeline

// --- Types ---

type TaskState = 'pending' | 'ready' | 'running' | 'done' | 'failed';
// No strict phases — tasks promote individually based on their deps

interface Task {
  name: string;
  type: 'lib' | 'app' | 'deploy';
  state: TaskState;
  agentId?: string;
  startTime?: number;
  endTime?: number;
}

interface TimelineEntry {
  name: string;
  type: 'lib' | 'app' | 'deploy';
  agentId: string;
  start: number;
  end: number;
  success: boolean;
}

// --- Load NX graph ---

console.log('=== PHASE: ANALYZE ===');
console.log('Loading NX dependency graph...');
execSync('npx nx graph --file=graph.json', {
  cwd: ROOT,
  stdio: 'inherit',
  env: { ...process.env, NX_IGNORE_UNSUPPORTED_TS_SETUP: 'true' },
});

const graphData = JSON.parse(readFileSync(join(ROOT, 'graph.json'), 'utf-8'));
const graph = graphData.graph;

// Classify projects: libs vs apps
const libs: string[] = [];
const apps: string[] = [];

for (const [name, node] of Object.entries(graph.nodes) as [string, any][]) {
  const targets = node.data?.targets || {};
  if (!targets.build) continue;
  const projectType = node.data?.projectType;
  if (projectType === 'application') {
    apps.push(name);
  } else {
    libs.push(name);
  }
}

// Build dependency map (only buildable deps between libs)
const deps: Record<string, string[]> = {};
const libSet = new Set(libs);
for (const lib of libs) {
  deps[lib] = (graph.dependencies[lib] || [])
    .map((d: any) => d.target)
    .filter((t: string) => libSet.has(t));
}

// For each app, find which libs it depends on (direct + transitive)
const appDeps: Record<string, string[]> = {};
for (const app of apps) {
  const visited = new Set<string>();
  const queue = (graph.dependencies[app] || [])
    .map((d: any) => d.target)
    .filter((t: string) => libSet.has(t));

  while (queue.length > 0) {
    const dep = queue.shift()!;
    if (visited.has(dep)) continue;
    visited.add(dep);
    for (const transitive of deps[dep] || []) {
      if (!visited.has(transitive)) queue.push(transitive);
    }
  }
  appDeps[app] = [...visited];
}

// --- Analysis output ---

console.log(`\n=== BUILD PLAN ===`);
console.log(`Libraries: ${libs.length}`);
console.log(`Applications: ${apps.length}`);
for (const app of apps) {
  console.log(`  ${app} depends on ${appDeps[app].length} libs: ${appDeps[app].slice(0, 5).join(', ')}${appDeps[app].length > 5 ? '...' : ''}`);
}

// --- Task management ---

const tasks: Record<string, Task> = {};
const timeline: TimelineEntry[] = [];
const globalStart = Date.now();
const appBuildStarted = new Set<string>();

// Create all tasks upfront
for (const name of libs) {
  tasks[name] = { name, type: 'lib', state: 'pending' };
}
for (const name of apps) {
  tasks[name] = { name, type: 'app', state: 'pending' };
}
for (const name of apps) {
  tasks[`deploy:${name}`] = { name: `deploy:${name}`, type: 'deploy', state: 'pending' };
}

function logAppProgress() {
  for (const app of apps) {
    if (tasks[app].state !== 'pending') continue;
    const myDeps = appDeps[app] || [];
    const doneCount = myDeps.filter((d) => tasks[d]?.state === 'done').length;
    const remaining = myDeps.length - doneCount;
    if (remaining > 0) {
      const missing = myDeps
        .filter((d) => tasks[d]?.state !== 'done')
        .slice(0, 5);
      const extra = myDeps.filter((d) => tasks[d]?.state !== 'done').length - missing.length;
      console.log(
        `[${elapsed()}]   ${app}: waiting for ${remaining}/${myDeps.length} libs [${missing.join(', ')}${extra > 0 ? `, +${extra} more` : ''}]`
      );
    }
  }
}

function promoteReadyTasks() {
  // 1. Promote libs whose lib-dependencies are all done
  for (const lib of libs) {
    if (tasks[lib].state !== 'pending') continue;
    const libDeps = deps[lib] || [];
    if (libDeps.every((d) => tasks[d]?.state === 'done')) {
      tasks[lib].state = 'ready';
    }
  }

  // 2. Promote each app individually when ALL of its lib deps are done
  for (const app of apps) {
    if (tasks[app].state !== 'pending') continue;
    const myDeps = appDeps[app] || [];
    if (myDeps.every((d) => tasks[d]?.state === 'done')) {
      tasks[app].state = 'ready';
      if (!appBuildStarted.has(app)) {
        appBuildStarted.add(app);
        const doneLibs = libs.filter((l) => tasks[l].state === 'done').length;
        console.log(`[${elapsed()}] >>> APP READY: ${app} — all ${myDeps.length} lib deps built (${doneLibs}/${libs.length} libs total) => starting build`);
      }
    }
  }

  // 3. Promote deploy when its app is done
  for (const app of apps) {
    const deployName = `deploy:${app}`;
    if (tasks[deployName].state !== 'pending') continue;
    if (tasks[app].state === 'done') {
      tasks[deployName].state = 'ready';
      console.log(`[${elapsed()}] >>> DEPLOY READY: ${app} — app build complete => starting deploy`);
    } else if (tasks[app].state === 'failed') {
      tasks[deployName].state = 'failed';
      console.log(`[${elapsed()}] >>> DEPLOY SKIPPED: ${app} — app build failed`);
    }
  }
}

function isComplete(): boolean {
  return Object.values(tasks).every(
    (t) => t.state === 'done' || t.state === 'failed'
  );
}

// Initial promotion
promoteReadyTasks();

// Score a ready lib: lower = higher priority (builds it sooner to unblock an app).
// For each app that needs this lib and isn't done yet, calculate how many deps
// that app still needs (excluding this lib). The score is the minimum across all apps.
// Libs that bring an app closest to starting get built first.
function scoreLib(libName: string): number {
  let minRemaining = Infinity;
  for (const app of apps) {
    if (tasks[app].state !== 'pending') continue;
    const myDeps = appDeps[app] || [];
    if (!myDeps.includes(libName)) continue;
    // Count how many deps this app still needs (not done, not this lib)
    const remaining = myDeps.filter(
      (d) => d !== libName && tasks[d]?.state !== 'done'
    ).length;
    minRemaining = Math.min(minRemaining, remaining);
  }
  return minRemaining;
}

function getNextTask(agentId: string): {
  task: string | null;
  type: string | null;
  done: boolean;
} {
  // 1. Ready libs — pick the one that unblocks an app build fastest
  const readyLibs = Object.values(tasks).filter(
    (t) => t.type === 'lib' && t.state === 'ready'
  );
  if (readyLibs.length > 0) {
    readyLibs.sort((a, b) => scoreLib(a.name) - scoreLib(b.name));
    const picked = readyLibs[0];
    const score = scoreLib(picked.name);
    picked.state = 'running';
    picked.agentId = agentId;
    picked.startTime = Date.now();
    const closest = apps.find((app) => {
      if (tasks[app].state !== 'pending') return false;
      const myDeps = appDeps[app] || [];
      if (!myDeps.includes(picked.name)) return false;
      const remaining = myDeps.filter((d) => d !== picked.name && tasks[d]?.state !== 'done').length;
      return remaining === score;
    });
    const reason = score === Infinity
      ? '(no pending app needs it)'
      : `(unblocks ${closest}: ${score} libs remaining after this)`;
    console.log(`[${elapsed()}] 📦 [LIB] ${agentId} → ${picked.name} ${reason}`);
    return { task: picked.name, type: 'lib', done: false };
  }

  // 2. Ready apps, then deploys
  for (const priority of ['app', 'deploy'] as const) {
    for (const task of Object.values(tasks)) {
      if (task.type === priority && task.state === 'ready') {
        task.state = 'running';
        task.agentId = agentId;
        task.startTime = Date.now();
        const icon = task.type === 'app' ? '🏗️' : '🚀';
        console.log(`[${elapsed()}] ${icon} [${task.type.toUpperCase()}] ${agentId} → ${task.name}`);
        return { task: task.name, type: task.type, done: false };
      }
    }
  }

  return { task: null, type: null, done: isComplete() };
}

function markTaskDone(taskName: string, success: boolean) {
  const task = tasks[taskName];
  if (!task) return;

  task.state = success ? 'done' : 'failed';
  task.endTime = Date.now();

  timeline.push({
    name: task.name,
    type: task.type,
    agentId: task.agentId!,
    start: task.startTime! - globalStart,
    end: task.endTime - globalStart,
    success,
  });

  const duration = ((task.endTime - task.startTime!) / 1000).toFixed(1);
  const icon = task.type === 'lib' ? '📦' : task.type === 'app' ? '🏗️' : '🚀';
  console.log(
    `[${elapsed()}] ${icon} [${task.type.toUpperCase()}] ${task.name} ${success ? '✅ DONE' : '❌ FAILED'} (${task.agentId}, ${duration}s)`
  );

  // After a lib completes, show progress toward app readiness
  if (task.type === 'lib') {
    logAppProgress();
  }

  promoteReadyTasks();

  if (isComplete()) {
    const doneCount = Object.values(tasks).filter((t) => t.state === 'done').length;
    const failedCount = Object.values(tasks).filter((t) => t.state === 'failed').length;
    console.log(`\n${'='.repeat(60)}`);
    console.log(`=== ALL TASKS COMPLETE === (${doneCount} done, ${failedCount} failed, ${((Date.now() - globalStart) / 1000).toFixed(1)}s)`);
    console.log(`${'='.repeat(60)}`);
  }
}

function getStatus() {
  const counts = { pending: 0, ready: 0, running: 0, done: 0, failed: 0 };
  const byType = {
    libs: { done: 0, failed: 0, running: 0, total: libs.length },
    apps: { done: 0, failed: 0, running: 0, total: apps.length },
    deploys: { done: 0, failed: 0, running: 0, total: apps.length },
  };
  for (const task of Object.values(tasks)) {
    counts[task.state]++;
    const bucket = task.type === 'lib' ? byType.libs : task.type === 'app' ? byType.apps : byType.deploys;
    if (task.state === 'done') bucket.done++;
    else if (task.state === 'failed') bucket.failed++;
    else if (task.state === 'running') bucket.running++;
  }

  // Per-app readiness info
  const appStatus = apps.map((app) => {
    const myDeps = appDeps[app] || [];
    const doneCount = myDeps.filter((d) => tasks[d]?.state === 'done').length;
    return {
      name: app,
      state: tasks[app].state,
      libsReady: doneCount,
      libsNeeded: myDeps.length,
      deployState: tasks[`deploy:${app}`].state,
    };
  });

  return {
    ...counts,
    total: Object.keys(tasks).length,
    complete: isComplete(),
    libs: byType.libs,
    apps: byType.apps,
    deploys: byType.deploys,
    appStatus,
  };
}

function getAnalysis() {
  return {
    libs: libs.map((l) => ({
      name: l,
      deps: deps[l] || [],
    })),
    apps: apps.map((a) => ({
      name: a,
      libDeps: appDeps[a],
    })),
    totalLibs: libs.length,
    totalApps: apps.length,
    totalTasks: libs.length + apps.length + apps.length, // libs + apps + deploys
  };
}

function elapsed(): string {
  return `${((Date.now() - globalStart) / 1000).toFixed(1)}s`;
}

// --- ASCII Gantt chart ---

function renderTimeline(): string {
  if (timeline.length === 0) return 'No tasks completed yet.\n';

  const sorted = [...timeline].sort((a, b) => a.start - b.start);
  const maxEnd = Math.max(...sorted.map((t) => t.end));
  const maxNameLen = Math.max(...sorted.map((t) => t.name.length));
  const chartWidth = 60;
  const msPerChar = maxEnd / chartWidth;

  const lines: string[] = [];
  lines.push(
    `\nTimeline (${timeline.length} tasks, ${(maxEnd / 1000).toFixed(1)}s total):\n`
  );

  // Header
  const header = ' '.repeat(maxNameLen + 2);
  const timeMarks: string[] = [];
  for (let i = 0; i <= 4; i++) {
    const t = ((maxEnd / 1000) * (i / 4)).toFixed(0);
    timeMarks.push(`t=${t}s`);
  }
  const spacing = Math.floor(chartWidth / 4);
  let headerLine = header;
  for (let i = 0; i <= 4; i++) {
    const mark = timeMarks[i];
    headerLine += mark + ' '.repeat(Math.max(1, spacing - mark.length));
  }
  lines.push(headerLine);

  lines.push(
    header +
      Array(5)
        .fill(null)
        .map((_, i) => '|' + (i < 4 ? ' '.repeat(spacing - 1) : ''))
        .join('')
  );

  // Group by phase
  const libEntries = sorted.filter((e) => e.type === 'lib');
  const appEntries = sorted.filter((e) => e.type === 'app');
  const deployEntries = sorted.filter((e) => e.type === 'deploy');

  function renderEntries(entries: TimelineEntry[], label: string) {
    if (entries.length === 0) return;
    lines.push(`${' '.repeat(maxNameLen + 2)}--- ${label} ---`);
    for (const entry of entries) {
      const startCol = Math.floor(entry.start / msPerChar);
      const endCol = Math.min(chartWidth, Math.floor(entry.end / msPerChar));
      const barLen = Math.max(1, endCol - startCol);
      const name = entry.name.padEnd(maxNameLen);
      const bar =
        ' '.repeat(startCol) +
        (entry.success ? '█' : '✗').repeat(barLen);
      lines.push(`${name}  ${bar}`);
    }
  }

  renderEntries(libEntries, 'LIBS');
  renderEntries(appEntries, 'APPS');
  renderEntries(deployEntries, 'DEPLOY');

  lines.push('');
  lines.push('█ = building/deploying    ✗ = failed');
  lines.push('');

  return lines.join('\n');
}

// --- HTTP Server ---

const server = http.createServer((req, res) => {
  const url = new URL(req.url || '/', `http://localhost:${PORT}`);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'GET' && url.pathname === '/health') {
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }

  if (req.method === 'GET' && url.pathname === '/analyze') {
    res.end(JSON.stringify(getAnalysis(), null, 2));
    return;
  }

  if (req.method === 'GET' && url.pathname === '/next-task') {
    const agentId = url.searchParams.get('agentId') || 'unknown';
    const result = getNextTask(agentId);
    res.end(JSON.stringify(result));
    return;
  }

  if (req.method === 'POST' && url.pathname === '/task-done') {
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        markTaskDone(data.task, data.success);
        res.end(JSON.stringify({ ok: true }));
      } catch (e) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
    return;
  }

  if (req.method === 'GET' && url.pathname === '/status') {
    res.end(JSON.stringify(getStatus()));
    return;
  }

  if (req.method === 'GET' && url.pathname === '/timeline') {
    res.setHeader('Content-Type', 'text/plain');
    res.end(renderTimeline());
    return;
  }

  res.statusCode = 404;
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, () => {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Coordinator listening on http://localhost:${PORT}`);
  console.log(`${'='.repeat(60)}`);
  console.log(`\nPipeline: ${libs.length} libs → ${apps.length} apps → ${apps.length} deploys = ${Object.keys(tasks).length} tasks total`);
  console.log(`\nApps start building as soon as their lib deps are ready:`);
  for (const app of apps) {
    console.log(`  ${app}: needs ${appDeps[app].length} libs`);
  }
  const status = getStatus();
  console.log(`\nReady to build: ${status.ready} libs | Pending: ${status.pending}`);
  console.log(`${'='.repeat(60)}\n`);
});
