import * as http from 'http';
import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { join } from 'path';

const PORT = parseInt(process.env.PORT || '8765', 10);
const ROOT = join(__dirname, '..');
const LIBS_ONLY = process.env.LIBS_ONLY === 'true';

// --- Types ---

type TaskState = 'pending' | 'ready' | 'running' | 'done' | 'failed';
type Phase = 'analyze' | 'libs' | 'apps' | 'deploy' | 'complete';

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

let currentPhase: Phase = 'libs';
const tasks: Record<string, Task> = {};
const timeline: TimelineEntry[] = [];
const globalStart = Date.now();

// Create lib tasks
for (const name of libs) {
  tasks[name] = { name, type: 'lib', state: 'pending' };
}

if (!LIBS_ONLY) {
  // Create app tasks (will be activated after all libs are done)
  for (const name of apps) {
    tasks[name] = { name, type: 'app', state: 'pending' };
  }

  // Create deploy tasks (will be activated after apps are done)
  for (const name of apps) {
    const deployName = `deploy:${name}`;
    tasks[deployName] = { name: deployName, type: 'deploy', state: 'pending' };
  }
}

function promoteReadyTasks() {
  if (currentPhase === 'libs') {
    // Promote libs whose lib-dependencies are all done
    for (const task of Object.values(tasks)) {
      if (task.type !== 'lib' || task.state !== 'pending') continue;
      const taskDeps = deps[task.name] || [];
      const allDone = taskDeps.every((d) => tasks[d]?.state === 'done');
      if (allDone) {
        task.state = 'ready';
      }
    }

    // Check if all libs are done → move to apps phase (or complete in LIBS_ONLY)
    const allLibsDone = libs.every(
      (l) => tasks[l].state === 'done' || tasks[l].state === 'failed'
    );
    if (allLibsDone) {
      if (LIBS_ONLY) {
        console.log(`\n=== LIBS PHASE COMPLETE (${libs.length} libs built) ===`);
        currentPhase = 'complete';
      } else {
        console.log(`\n=== PHASE: APPS (all ${libs.length} libs built) ===`);
        currentPhase = 'apps';
        for (const app of apps) {
          tasks[app].state = 'ready';
        }
      }
    }
  } else if (currentPhase === 'apps') {
    // Check if all apps are done → move to deploy phase
    const allAppsDone = apps.every(
      (a) => tasks[a].state === 'done' || tasks[a].state === 'failed'
    );
    if (allAppsDone) {
      console.log(`\n=== PHASE: DEPLOY (all ${apps.length} apps built) ===`);
      currentPhase = 'deploy';
      // Activate deploy tasks only for successfully built apps
      for (const app of apps) {
        const deployName = `deploy:${app}`;
        if (tasks[app].state === 'done') {
          tasks[deployName].state = 'ready';
        } else {
          tasks[deployName].state = 'failed';
        }
      }
    }
  } else if (currentPhase === 'deploy') {
    const allDeploysDone = apps.every((a) => {
      const t = tasks[`deploy:${a}`];
      return t.state === 'done' || t.state === 'failed';
    });
    if (allDeploysDone) {
      console.log(`\n=== ALL PHASES COMPLETE ===`);
      currentPhase = 'complete';
    }
  }
}

// Initial promotion
promoteReadyTasks();

function getNextTask(agentId: string): {
  task: string | null;
  type: string | null;
  phase: Phase;
  done: boolean;
} {
  for (const task of Object.values(tasks)) {
    if (task.state === 'ready') {
      task.state = 'running';
      task.agentId = agentId;
      task.startTime = Date.now();
      console.log(`[${elapsed()}] [${currentPhase}] ${agentId} → ${task.name}`);
      return { task: task.name, type: task.type, phase: currentPhase, done: false };
    }
  }

  return { task: null, type: null, phase: currentPhase, done: currentPhase === 'complete' };
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
    `[${elapsed()}] [${currentPhase}] ${task.name} ${success ? 'DONE' : 'FAILED'} (${task.agentId}, ${duration}s)`
  );

  promoteReadyTasks();
}

function getStatus() {
  const counts = { pending: 0, ready: 0, running: 0, done: 0, failed: 0 };
  for (const task of Object.values(tasks)) {
    counts[task.state]++;
  }
  return { ...counts, total: Object.keys(tasks).length, phase: currentPhase };
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
  console.log(`\n=== PHASE: LIBS ===`);
  console.log(`Coordinator listening on http://localhost:${PORT}`);
  console.log(`Tasks: ${libs.length} libs + ${apps.length} apps + ${apps.length} deploys = ${Object.keys(tasks).length} total`);
  const status = getStatus();
  console.log(`Ready: ${status.ready}, Pending: ${status.pending}`);
});
