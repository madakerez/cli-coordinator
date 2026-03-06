import * as http from 'http';
import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { join } from 'path';

const PORT = parseInt(process.env.PORT || '8765', 10);
const ROOT = join(__dirname, '..');

// --- Types ---

type TaskState = 'pending' | 'ready' | 'running' | 'done' | 'failed';

interface Task {
  name: string;
  state: TaskState;
  agentId?: string;
  startTime?: number;
  endTime?: number;
  artifactPath?: string;
}

interface TimelineEntry {
  name: string;
  agentId: string;
  start: number;
  end: number;
  success: boolean;
}

// --- Load NX graph ---

console.log('Loading NX dependency graph...');
execSync('npx nx graph --file=graph.json', {
  cwd: ROOT,
  stdio: 'inherit',
  env: { ...process.env, NX_IGNORE_UNSUPPORTED_TS_SETUP: 'true' },
});

const graphData = JSON.parse(readFileSync(join(ROOT, 'graph.json'), 'utf-8'));
const graph = graphData.graph;

// We only care about buildable projects (libs with build target)
const buildableProjects = new Set<string>();
for (const [name, node] of Object.entries(graph.nodes) as [string, any][]) {
  const targets = node.data?.targets || {};
  if (targets.build) {
    buildableProjects.add(name);
  }
}

console.log(`Found ${buildableProjects.size} buildable projects`);

// Build dependency map (only buildable deps)
const deps: Record<string, string[]> = {};
for (const project of buildableProjects) {
  const projectDeps = (graph.dependencies[project] || [])
    .map((d: any) => d.target)
    .filter((t: string) => buildableProjects.has(t));
  deps[project] = projectDeps;
}

// --- Task management ---

const tasks: Record<string, Task> = {};
const timeline: TimelineEntry[] = [];
const globalStart = Date.now();

for (const name of buildableProjects) {
  tasks[name] = { name, state: 'pending' };
}

function promoteReadyTasks() {
  for (const task of Object.values(tasks)) {
    if (task.state !== 'pending') continue;
    const taskDeps = deps[task.name] || [];
    const allDone = taskDeps.every((d) => tasks[d]?.state === 'done');
    if (allDone) {
      task.state = 'ready';
    }
  }
}

// Initial promotion
promoteReadyTasks();

function getNextTask(agentId: string): { task: string | null; done: boolean } {
  // Find a ready task
  for (const task of Object.values(tasks)) {
    if (task.state === 'ready') {
      task.state = 'running';
      task.agentId = agentId;
      task.startTime = Date.now();
      console.log(`[${elapsed()}] ${agentId} → ${task.name}`);
      return { task: task.name, done: false };
    }
  }

  // Check if all done
  const allDone = Object.values(tasks).every(
    (t) => t.state === 'done' || t.state === 'failed'
  );
  return { task: null, done: allDone };
}

function markTaskDone(
  taskName: string,
  success: boolean,
  artifactPath?: string
) {
  const task = tasks[taskName];
  if (!task) return;

  task.state = success ? 'done' : 'failed';
  task.endTime = Date.now();
  task.artifactPath = artifactPath;

  timeline.push({
    name: task.name,
    agentId: task.agentId!,
    start: task.startTime! - globalStart,
    end: task.endTime - globalStart,
    success,
  });

  console.log(
    `[${elapsed()}] ${task.name} ${success ? 'DONE' : 'FAILED'} (${task.agentId}, ${((task.endTime - task.startTime!) / 1000).toFixed(1)}s)`
  );

  // Promote newly ready tasks
  promoteReadyTasks();
}

function getStatus() {
  const counts = { pending: 0, ready: 0, running: 0, done: 0, failed: 0 };
  for (const task of Object.values(tasks)) {
    counts[task.state]++;
  }
  return { ...counts, total: Object.keys(tasks).length };
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

  const tickLine = header + '|' + ' '.repeat(spacing - 1);
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
      (entry.success ? '█' : '✗').repeat(barLen) +
      ' '.repeat(Math.max(0, chartWidth - endCol));

    lines.push(`${name}  ${bar}`);
  }

  lines.push('');
  lines.push('█ = building    ✗ = failed');
  lines.push('');

  return lines.join('\n');
}

// --- HTTP Server ---

const server = http.createServer((req, res) => {
  const url = new URL(req.url || '/', `http://localhost:${PORT}`);

  // CORS for ngrok
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'GET' && url.pathname === '/health') {
    res.end(JSON.stringify({ status: 'ok' }));
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
        markTaskDone(data.task, data.success, data.artifactPath);
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

  if (req.method === 'GET' && url.pathname.startsWith('/artifact/')) {
    const name = url.pathname.replace('/artifact/', '');
    const task = tasks[name];
    if (task && task.artifactPath) {
      res.end(JSON.stringify({ artifactPath: task.artifactPath }));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: 'Not found' }));
    }
    return;
  }

  res.statusCode = 404;
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, () => {
  console.log(`Coordinator listening on http://localhost:${PORT}`);
  console.log(`Tasks: ${Object.keys(tasks).length} total`);
  const status = getStatus();
  console.log(`Ready: ${status.ready}, Pending: ${status.pending}`);
});
