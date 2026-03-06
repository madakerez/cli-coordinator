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
        console.log(`[${elapsed()}] >>> ${app} READY (all ${myDeps.length} lib deps built, ${doneLibs}/${libs.length} libs total)`);
      }
    }
  }

  // 3. Promote deploy when its app is done
  for (const app of apps) {
    const deployName = `deploy:${app}`;
    if (tasks[deployName].state !== 'pending') continue;
    if (tasks[app].state === 'done') {
      tasks[deployName].state = 'ready';
    } else if (tasks[app].state === 'failed') {
      tasks[deployName].state = 'failed';
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

function getNextTask(agentId: string): {
  task: string | null;
  type: string | null;
  done: boolean;
} {
  // Prioritize: libs first, then apps, then deploys
  for (const priority of ['lib', 'app', 'deploy'] as const) {
    for (const task of Object.values(tasks)) {
      if (task.type === priority && task.state === 'ready') {
        task.state = 'running';
        task.agentId = agentId;
        task.startTime = Date.now();
        console.log(`[${elapsed()}] [${task.type}] ${agentId} → ${task.name}`);
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
  console.log(
    `[${elapsed()}] [${task.type}] ${task.name} ${success ? 'DONE' : 'FAILED'} (${task.agentId}, ${duration}s)`
  );

  promoteReadyTasks();

  if (isComplete()) {
    console.log(`\n=== ALL TASKS COMPLETE ===`);
  }
}

function getStatus() {
  const counts = { pending: 0, ready: 0, running: 0, done: 0, failed: 0 };
  const byType = { libs: { done: 0, total: libs.length }, apps: { done: 0, total: apps.length }, deploys: { done: 0, total: apps.length } };
  for (const task of Object.values(tasks)) {
    counts[task.state]++;
    if (task.state === 'done') {
      if (task.type === 'lib') byType.libs.done++;
      else if (task.type === 'app') byType.apps.done++;
      else if (task.type === 'deploy') byType.deploys.done++;
    }
  }
  return { ...counts, total: Object.keys(tasks).length, complete: isComplete(), ...byType };
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
  console.log(`\nCoordinator listening on http://localhost:${PORT}`);
  console.log(`Tasks: ${libs.length} libs + ${apps.length} apps + ${apps.length} deploys = ${Object.keys(tasks).length} total`);
  console.log(`Apps start building as soon as their lib deps are ready:`);
  for (const app of apps) {
    console.log(`  ${app}: needs ${appDeps[app].length} libs`);
  }
  const status = getStatus();
  console.log(`Ready: ${status.ready}, Pending: ${status.pending}`);
});
