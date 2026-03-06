import * as http from 'http';
import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { join } from 'path';

const PORT = parseInt(process.env.PORT || '8765', 10);
const ROOT = join(__dirname, '..');
// Coordinator manages lib builds only.
// App build + deploy jobs poll /app-status to know when their libs are ready.

// --- Types ---

type TaskState = 'pending' | 'ready' | 'running' | 'done' | 'failed';

interface Task {
  name: string;
  state: TaskState;
  agentId?: string;
  startTime?: number;
  endTime?: number;
}

interface TimelineEntry {
  name: string;
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
const appReadyLogged = new Set<string>();

// Create lib tasks only — apps are built by separate GHA jobs
for (const name of libs) {
  tasks[name] = { name, state: 'pending' };
}

function logAppProgress() {
  for (const app of apps) {
    if (appReadyLogged.has(app)) continue;
    const myDeps = appDeps[app] || [];
    const doneCount = myDeps.filter((d) => tasks[d]?.state === 'done').length;
    const remaining = myDeps.length - doneCount;
    if (remaining === 0) {
      const doneLibs = libs.filter((l) => tasks[l].state === 'done').length;
      appReadyLogged.add(app);
      console.log(`[${elapsed()}] >>> APP READY: ${app} — all ${myDeps.length} lib deps built (${doneLibs}/${libs.length} libs total)`);
    } else {
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
  for (const lib of libs) {
    if (tasks[lib].state !== 'pending') continue;
    const libDeps = deps[lib] || [];
    if (libDeps.every((d) => tasks[d]?.state === 'done')) {
      tasks[lib].state = 'ready';
    }
  }
}

function allLibsDone(): boolean {
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
    if (appReadyLogged.has(app)) continue; // app's libs already done
    const myDeps = appDeps[app] || [];
    if (!myDeps.includes(libName)) continue;
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
    (t) => t.state === 'ready'
  );
  if (readyLibs.length > 0) {
    readyLibs.sort((a, b) => scoreLib(a.name) - scoreLib(b.name));
    const picked = readyLibs[0];
    const score = scoreLib(picked.name);
    picked.state = 'running';
    picked.agentId = agentId;
    picked.startTime = Date.now();
    const closest = apps.find((app) => {
      if (appReadyLogged.has(app)) return false;
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

  return { task: null, type: null, done: allLibsDone() };
}

function markTaskDone(taskName: string, success: boolean) {
  const task = tasks[taskName];
  if (!task) return;

  task.state = success ? 'done' : 'failed';
  task.endTime = Date.now();

  timeline.push({
    name: task.name,
    agentId: task.agentId!,
    start: task.startTime! - globalStart,
    end: task.endTime - globalStart,
    success,
  });

  const duration = ((task.endTime - task.startTime!) / 1000).toFixed(1);
  console.log(
    `[${elapsed()}] 📦 [LIB] ${task.name} ${success ? '✅ DONE' : '❌ FAILED'} (${task.agentId}, ${duration}s)`
  );

  logAppProgress();
  promoteReadyTasks();

  if (allLibsDone()) {
    const doneCount = Object.values(tasks).filter((t) => t.state === 'done').length;
    const failedCount = Object.values(tasks).filter((t) => t.state === 'failed').length;
    console.log(`\n${'='.repeat(60)}`);
    console.log(`=== ALL LIBS BUILT === (${doneCount} done, ${failedCount} failed, ${((Date.now() - globalStart) / 1000).toFixed(1)}s)`);
    console.log(`${'='.repeat(60)}`);
  }
}

function getStatus() {
  const counts = { pending: 0, ready: 0, running: 0, done: 0, failed: 0 };
  for (const task of Object.values(tasks)) {
    counts[task.state]++;
  }

  const appStatus = apps.map((app) => {
    const myDeps = appDeps[app] || [];
    const doneCount = myDeps.filter((d) => tasks[d]?.state === 'done').length;
    return {
      name: app,
      libsReady: doneCount,
      libsNeeded: myDeps.length,
      ready: doneCount === myDeps.length,
    };
  });

  return {
    ...counts,
    total: libs.length,
    allLibsDone: allLibsDone(),
    appStatus,
  };
}

// Endpoint for per-app polling: is this app's libs ready?
function getAppStatus(appName: string) {
  const myDeps = appDeps[appName];
  if (!myDeps) return null;
  const doneCount = myDeps.filter((d) => tasks[d]?.state === 'done').length;
  const failedCount = myDeps.filter((d) => tasks[d]?.state === 'failed').length;
  const ready = doneCount === myDeps.length;
  const missing = myDeps.filter((d) => tasks[d]?.state !== 'done').map((d) => ({
    name: d,
    state: tasks[d]?.state || 'unknown',
  }));
  return {
    app: appName,
    ready,
    libsReady: doneCount,
    libsNeeded: myDeps.length,
    libsFailed: failedCount,
    missing: ready ? [] : missing,
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

  for (const entry of sorted) {
    const startCol = Math.floor(entry.start / msPerChar);
    const endCol = Math.min(chartWidth, Math.floor(entry.end / msPerChar));
    const barLen = Math.max(1, endCol - startCol);
    const name = entry.name.padEnd(maxNameLen);
    const bar =
      ' '.repeat(startCol) +
      (entry.success ? '█' : '✗').repeat(barLen);
    lines.push(`${name}  ${bar}`);
  }

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

  if (req.method === 'GET' && url.pathname === '/app-status') {
    const appName = url.searchParams.get('app');
    if (!appName) {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: 'Missing ?app= parameter' }));
      return;
    }
    const status = getAppStatus(appName);
    if (!status) {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: `Unknown app: ${appName}` }));
      return;
    }
    res.end(JSON.stringify(status));
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
  console.log(`\nLibs to build: ${libs.length} (agents handle these)`);
  console.log(`Apps: ${apps.length} (separate GHA jobs poll /app-status)\n`);
  console.log(`App lib requirements:`);
  for (const app of apps) {
    console.log(`  ${app}: ${appDeps[app].length} libs`);
  }
  const status = getStatus();
  console.log(`\nReady: ${status.ready} | Pending: ${status.pending}`);
  console.log(`${'='.repeat(60)}\n`);
});
