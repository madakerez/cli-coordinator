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
}

interface TimelineEntry {
  name: string;
  agentId: string;
  start: number;
  end: number;
  success: boolean;
}

// --- Helpers ---

function elapsed(): string {
  const s = (Date.now() - globalStart) / 1000;
  const min = Math.floor(s / 60);
  const sec = s % 60;
  return min > 0 ? `${min}m${sec.toFixed(0)}s` : `${sec.toFixed(1)}s`;
}

function fmtDuration(ms: number): string {
  const s = ms / 1000;
  return s >= 60 ? `${Math.floor(s / 60)}m${(s % 60).toFixed(0)}s` : `${s.toFixed(1)}s`;
}

function progressBar(done: number, total: number, width = 20): string {
  const filled = Math.round((done / total) * width);
  return '█'.repeat(filled) + '░'.repeat(width - filled);
}

// --- Load NX graph ---

console.log('');
console.log('┌─────────────────────────────────────────────┐');
console.log('│  🧠  COORDINATOR — Distributed Build System  │');
console.log('└─────────────────────────────────────────────┘');
console.log('');
console.log('📊 Analyzing NX dependency graph...');

const analyzeStart = Date.now();
execSync('npx nx graph --file=graph.json', {
  cwd: ROOT,
  stdio: 'inherit',
  env: { ...process.env, NX_IGNORE_UNSUPPORTED_TS_SETUP: 'true' },
});
console.log(`   Done in ${fmtDuration(Date.now() - analyzeStart)}`);

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

// --- Build plan output ---

console.log('');
console.log('📋 Build Plan');
console.log('─'.repeat(50));
console.log(`   📦 ${libs.length} libraries to build (distributed across agents)`);
console.log(`   🚀 ${apps.length} applications (built on separate runners)`);
console.log('');
const sortedApps = [...apps].sort((a, b) => appDeps[a].length - appDeps[b].length);
for (const app of sortedApps) {
  const count = appDeps[app].length;
  console.log(`   ${app.padEnd(20)} ${count} libs ${count <= 5 ? '⚡ fast' : count >= 20 ? '🐢 heavy' : ''}`);
}
console.log('');

// --- Task management ---

const tasks: Record<string, Task> = {};
const timeline: TimelineEntry[] = [];
const globalStart = Date.now();
const appReadyTimes: Record<string, number> = {};
const appReadyLogged = new Set<string>();
const agentStats: Record<string, { built: number; totalTime: number }> = {};

for (const name of libs) {
  tasks[name] = { name, state: 'pending' };
}

function logAppProgress() {
  for (const app of sortedApps) {
    if (appReadyLogged.has(app)) continue;
    const myDeps = appDeps[app] || [];
    const doneCount = myDeps.filter((d) => tasks[d]?.state === 'done').length;
    const remaining = myDeps.length - doneCount;
    if (remaining === 0) {
      appReadyLogged.add(app);
      appReadyTimes[app] = Date.now() - globalStart;
      const doneLibs = libs.filter((l) => tasks[l].state === 'done').length;
      console.log(`[${elapsed()}] 🟢 ${app} READY — all ${myDeps.length} libs cached (${doneLibs}/${libs.length} total)`);
    } else {
      const bar = progressBar(doneCount, myDeps.length, 15);
      const running = myDeps.filter((d) => tasks[d]?.state === 'running');
      const runningInfo = running.length > 0 ? ` 🔨 building: ${running.slice(0, 3).join(', ')}${running.length > 3 ? '...' : ''}` : '';
      console.log(`[${elapsed()}]    ${app} ${bar} ${doneCount}/${myDeps.length}${runningInfo}`);
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

function scoreLib(libName: string): number {
  let minRemaining = Infinity;
  for (const app of apps) {
    if (appReadyLogged.has(app)) continue;
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
  const readyLibs = Object.values(tasks).filter((t) => t.state === 'ready');
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

    const doneCount = Object.values(tasks).filter((t) => t.state === 'done').length;
    const runningCount = Object.values(tasks).filter((t) => t.state === 'running').length;
    const reason = score === Infinity
      ? ''
      : `→ unblocks ${closest} (${score} remaining)`;
    console.log(`[${elapsed()}] 📦 ${agentId} ← ${picked.name} ${reason}  [${doneCount} done, ${runningCount} running, ${readyLibs.length - 1} queued]`);
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

  const duration = task.endTime - task.startTime!;
  const doneCount = Object.values(tasks).filter((t) => t.state === 'done').length;
  const icon = success ? '✅' : '❌';

  // Track agent stats
  if (!agentStats[task.agentId!]) agentStats[task.agentId!] = { built: 0, totalTime: 0 };
  if (success) {
    agentStats[task.agentId!].built++;
    agentStats[task.agentId!].totalTime += duration;
  }

  console.log(`[${elapsed()}] ${icon} ${task.name} done in ${fmtDuration(duration)} (${task.agentId}) — ${progressBar(doneCount, libs.length)} ${doneCount}/${libs.length}`);

  logAppProgress();
  promoteReadyTasks();

  if (allLibsDone()) {
    const failedCount = Object.values(tasks).filter((t) => t.state === 'failed').length;
    const totalTime = fmtDuration(Date.now() - globalStart);
    console.log('');
    console.log('╔══════════════════════════════════════════════╗');
    console.log(`║  🏁 ALL ${libs.length} LIBS BUILT in ${totalTime}`.padEnd(47) + '║');
    if (failedCount > 0) {
      console.log(`║  ⚠️  ${failedCount} failed`.padEnd(47) + '║');
    }
    console.log('╠══════════════════════════════════════════════╣');
    console.log('║  📊 Agent Performance                        ║');
    for (const [agent, stats] of Object.entries(agentStats).sort((a, b) => b[1].built - a[1].built)) {
      const avg = stats.built > 0 ? fmtDuration(stats.totalTime / stats.built) : '-';
      const line = `║  ${agent}: ${stats.built} libs, avg ${avg}/lib`;
      console.log(line.padEnd(47) + '║');
    }
    console.log('╠══════════════════════════════════════════════╣');
    console.log('║  🚀 App Readiness                            ║');
    for (const app of sortedApps) {
      const readyTime = appReadyTimes[app] ? fmtDuration(appReadyTimes[app]) : 'n/a';
      const line = `║  ${app}: ready at ${readyTime} (${appDeps[app].length} libs)`;
      console.log(line.padEnd(47) + '║');
    }
    console.log('╚══════════════════════════════════════════════╝');
  }
}

function getStatus() {
  const counts = { pending: 0, ready: 0, running: 0, done: 0, failed: 0 };
  for (const task of Object.values(tasks)) {
    counts[task.state]++;
  }

  const appStatus = sortedApps.map((app) => {
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
    elapsed: elapsed(),
    allLibsDone: allLibsDone(),
    appStatus,
  };
}

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
    apps: sortedApps.map((a) => ({
      name: a,
      libDeps: appDeps[a],
    })),
    totalLibs: libs.length,
    totalApps: apps.length,
  };
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
  lines.push('');
  lines.push(`📈 Timeline — ${timeline.length} tasks, ${fmtDuration(maxEnd)} total`);
  lines.push('─'.repeat(maxNameLen + 2 + chartWidth));

  // Header
  const header = ' '.repeat(maxNameLen + 2);
  const timeMarks: string[] = [];
  for (let i = 0; i <= 4; i++) {
    const t = ((maxEnd / 1000) * (i / 4)).toFixed(0);
    timeMarks.push(`${t}s`);
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
        .map((_, i) => '┊' + (i < 4 ? ' '.repeat(spacing - 1) : ''))
        .join('')
  );

  // Group by agent for coloring
  const agents = [...new Set(sorted.map((e) => e.agentId))].sort();
  const agentSymbols = ['█', '▓', '▒', '░'];

  for (const entry of sorted) {
    const startCol = Math.floor(entry.start / msPerChar);
    const endCol = Math.min(chartWidth, Math.floor(entry.end / msPerChar));
    const barLen = Math.max(1, endCol - startCol);
    const name = entry.name.padEnd(maxNameLen);
    const sym = entry.success ? agentSymbols[agents.indexOf(entry.agentId) % agentSymbols.length] : '✗';
    const bar = ' '.repeat(startCol) + sym.repeat(barLen);
    lines.push(`${name}  ${bar}`);
  }

  lines.push('─'.repeat(maxNameLen + 2 + chartWidth));
  lines.push(`Legend: ${agents.map((a, i) => `${agentSymbols[i % agentSymbols.length]} ${a}`).join('  ')}  ✗ failed`);
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
  console.log(`🌐 Listening on http://localhost:${PORT}`);
  console.log(`   Waiting for agents to connect...`);
  console.log('');
});
