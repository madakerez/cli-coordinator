import * as http from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'fs';
import { join } from 'path';
import { WebSocketServer, WebSocket } from 'ws';

const PORT = parseInt(process.env.PORT || '8765', 10);
const DATA_DIR = process.env.DATA_DIR || join(__dirname, '..', '.coordinator-data');

mkdirSync(join(DATA_DIR, 'runs'), { recursive: true });

// --- Types ---

type TaskState = 'pending' | 'ready' | 'running' | 'done' | 'failed';
type TaskType = 'lib' | 'app';
type RunStatus = 'initializing' | 'running' | 'done' | 'failed';

interface Task {
  name: string;
  type: TaskType;
  state: TaskState;
  agentId?: string;
  startTime?: number;
  endTime?: number;
  cacheHit?: boolean;
  outputHash?: string;
  outputSize?: number;
  logs: string[];
}

interface TimelineEntry {
  name: string;
  type: TaskType;
  agentId: string;
  start: number;
  end: number;
  success: boolean;
  cacheHit?: boolean;
}

interface AgentInfo {
  id: string;
  connectedAt: number;
  lastSeen: number;
  tasksCompleted: number;
  tasksFailed: number;
  totalBuildTime: number;
  currentTask?: string;
}

interface Run {
  id: string;
  status: RunStatus;
  startTime: number;
  endTime?: number;
  commitSha: string;
  branch: string;
  triggeredBy: string;
  libs: string[];
  apps: string[];
  deps: Record<string, string[]>;
  appDeps: Record<string, string[]>;
  sortedApps: string[];
  tasks: Record<string, Task>;
  timeline: TimelineEntry[];
  agents: Record<string, AgentInfo>;
  appReadyTimes: Record<string, number>;
  appBuildTimes: Record<string, number>;
  workspaceStats?: {
    tsFiles: number;
    totalLines: number;
    diskSize: number;
    perProject: Record<string, { files: number }>;
  };
}

// --- State ---

let currentRun: Run | null = null;

// --- Helpers ---

function elapsed(): string {
  if (!currentRun) return '0s';
  const s = (Date.now() - currentRun.startTime) / 1000;
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

function broadcast(event: string, data: any) {
  const msg = JSON.stringify({ event, data, timestamp: Date.now() });
  for (const ws of wsClients) {
    if (ws.readyState === WebSocket.OPEN) ws.send(msg);
  }
}

function saveRun() {
  if (!currentRun) return;
  const path = join(DATA_DIR, 'runs', `${currentRun.id}.json`);
  writeFileSync(path, JSON.stringify(currentRun, null, 2));
}

function loadRunHistory(): { id: string; status: RunStatus; startTime: number; endTime?: number; commitSha: string; branch: string; libCount: number; appCount: number }[] {
  const dir = join(DATA_DIR, 'runs');
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter(f => f.endsWith('.json'))
    .map(f => {
      try {
        const run = JSON.parse(readFileSync(join(dir, f), 'utf-8'));
        return {
          id: run.id,
          status: run.status,
          startTime: run.startTime,
          endTime: run.endTime,
          commitSha: run.commitSha,
          branch: run.branch,
          libCount: run.libs?.length || 0,
          appCount: run.apps?.length || 0,
        };
      } catch { return null; }
    })
    .filter(Boolean)
    .sort((a: any, b: any) => b.startTime - a.startTime);
}

function loadRun(id: string): Run | null {
  const path = join(DATA_DIR, 'runs', `${id}.json`);
  if (!existsSync(path)) return null;
  try { return JSON.parse(readFileSync(path, 'utf-8')); } catch { return null; }
}

// --- Task management ---

function promoteReadyTasks() {
  if (!currentRun) return;
  const { libs, deps, tasks, apps, appDeps } = currentRun;

  for (const lib of libs) {
    if (tasks[lib].state !== 'pending') continue;
    const libDeps = deps[lib] || [];
    if (libDeps.every(d => tasks[d]?.state === 'done')) {
      tasks[lib].state = 'ready';
    }
  }

  for (const app of apps) {
    if (tasks[app].state !== 'pending') continue;
    const myDeps = appDeps[app] || [];
    if (myDeps.every(d => tasks[d]?.state === 'done')) {
      tasks[app].state = 'ready';
    }
  }
}

function allDone(): boolean {
  if (!currentRun) return false;
  return Object.values(currentRun.tasks).every(t => t.state === 'done' || t.state === 'failed');
}

function scoreLib(libName: string): number {
  if (!currentRun) return Infinity;
  const { apps, appDeps, tasks, appReadyTimes } = currentRun;
  let minRemaining = Infinity;
  for (const app of apps) {
    if (appReadyTimes[app]) continue;
    const myDeps = appDeps[app] || [];
    if (!myDeps.includes(libName)) continue;
    const remaining = myDeps.filter(d => d !== libName && tasks[d]?.state !== 'done').length;
    minRemaining = Math.min(minRemaining, remaining);
  }
  return minRemaining;
}

function getNextTask(agentId: string): { task: string | null; type: string | null; done: boolean } {
  if (!currentRun) return { task: null, type: null, done: true };
  const { tasks, apps, appDeps, libs, sortedApps, agents, appReadyTimes } = currentRun;

  // Track agent
  if (!agents[agentId]) {
    agents[agentId] = { id: agentId, connectedAt: Date.now(), lastSeen: Date.now(), tasksCompleted: 0, tasksFailed: 0, totalBuildTime: 0 };
    console.log(`[${elapsed()}] 🤖 ${agentId} connected`);
    broadcast('agent-connected', { agentId });
  }
  agents[agentId].lastSeen = Date.now();

  // Priority 1: ready apps
  const readyApps = apps.filter(a => tasks[a].state === 'ready');
  if (readyApps.length > 0) {
    readyApps.sort((a, b) => (appDeps[a]?.length || 0) - (appDeps[b]?.length || 0));
    const picked = tasks[readyApps[0]];
    picked.state = 'running';
    picked.agentId = agentId;
    picked.startTime = Date.now();
    agents[agentId].currentTask = picked.name;

    const doneApps = apps.filter(a => tasks[a].state === 'done').length;
    console.log(`[${elapsed()}] 🚀 ${agentId} ← BUILD ${picked.name} (app ${doneApps + 1}/${apps.length})`);
    broadcast('task-assigned', { task: picked.name, type: 'app', agentId });
    return { task: picked.name, type: 'app', done: false };
  }

  // Priority 2: ready libs
  const readyLibs = libs.filter(l => tasks[l].state === 'ready');
  if (readyLibs.length > 0) {
    const scored = readyLibs.map(l => ({ name: l, score: scoreLib(l) }));
    scored.sort((a, b) => a.score - b.score);
    const picked = tasks[scored[0].name];
    const score = scored[0].score;
    picked.state = 'running';
    picked.agentId = agentId;
    picked.startTime = Date.now();
    agents[agentId].currentTask = picked.name;

    const doneCount = libs.filter(l => tasks[l].state === 'done').length;
    const runningCount = Object.values(tasks).filter(t => t.state === 'running').length;

    const closest = sortedApps.find(app => {
      if (appReadyTimes[app]) return false;
      const myDeps = appDeps[app] || [];
      if (!myDeps.includes(picked.name)) return false;
      return myDeps.filter(d => d !== picked.name && tasks[d]?.state !== 'done').length === score;
    });

    const reason = score === Infinity ? '' : ` → unblocks ${closest} (${score} left)`;
    console.log(`[${elapsed()}] 📦 ${agentId} ← ${picked.name}${reason}  [${doneCount}/${libs.length} done, ${runningCount} running]`);
    broadcast('task-assigned', { task: picked.name, type: 'lib', agentId, score, closest });
    return { task: picked.name, type: 'lib', done: false };
  }

  agents[agentId].currentTask = undefined;
  return { task: null, type: null, done: allDone() };
}

function markTaskDone(taskName: string, success: boolean, meta?: { cacheHit?: boolean; outputHash?: string; outputSize?: number }) {
  if (!currentRun) return;
  const { tasks, libs, apps, appDeps, sortedApps, timeline, agents, appReadyTimes, appBuildTimes } = currentRun;
  const task = tasks[taskName];
  if (!task) return;

  task.state = success ? 'done' : 'failed';
  task.endTime = Date.now();
  if (meta) {
    task.cacheHit = meta.cacheHit;
    task.outputHash = meta.outputHash;
    task.outputSize = meta.outputSize;
  }

  const duration = task.endTime - (task.startTime || task.endTime);

  timeline.push({
    name: task.name,
    type: task.type,
    agentId: task.agentId!,
    start: (task.startTime || currentRun.startTime) - currentRun.startTime,
    end: task.endTime - currentRun.startTime,
    success,
    cacheHit: meta?.cacheHit,
  });

  // Agent stats
  const agent = agents[task.agentId!];
  if (agent) {
    if (success) { agent.tasksCompleted++; agent.totalBuildTime += duration; }
    else agent.tasksFailed++;
    agent.currentTask = undefined;
  }

  const icon = success ? '✅' : '❌';

  if (task.type === 'lib') {
    const doneCount = libs.filter(l => tasks[l].state === 'done').length;
    const cacheTag = meta?.cacheHit ? ' [cache]' : '';
    console.log(`[${elapsed()}] ${icon} ${task.name} in ${fmtDuration(duration)}${cacheTag} (${task.agentId}) — ${progressBar(doneCount, libs.length)} ${doneCount}/${libs.length}`);

    // Check app readiness
    for (const app of sortedApps) {
      if (appReadyTimes[app]) continue;
      const myDeps = appDeps[app] || [];
      if (myDeps.every(d => tasks[d]?.state === 'done')) {
        appReadyTimes[app] = Date.now() - currentRun.startTime;
        console.log(`[${elapsed()}] 🟢 ${app} READY — all ${myDeps.length} libs done`);
        broadcast('app-ready', { app, time: appReadyTimes[app], libCount: myDeps.length });
      }
    }
  } else {
    if (success) appBuildTimes[task.name] = duration;
    const doneApps = apps.filter(a => tasks[a].state === 'done').length;
    console.log(`[${elapsed()}] ${icon} 🚀 ${task.name} BUILT in ${fmtDuration(duration)} (${task.agentId}) — ${doneApps}/${apps.length} apps`);
    broadcast('app-built', { app: task.name, duration, agentId: task.agentId });
  }

  broadcast('task-done', {
    task: taskName, type: task.type, success, duration,
    cacheHit: meta?.cacheHit, agentId: task.agentId,
    progress: {
      libsDone: libs.filter(l => tasks[l].state === 'done').length,
      libsTotal: libs.length,
      appsDone: apps.filter(a => tasks[a].state === 'done').length,
      appsTotal: apps.length,
    },
  });

  promoteReadyTasks();

  if (allDone()) {
    currentRun.status = 'done';
    currentRun.endTime = Date.now();
    const totalTime = fmtDuration(currentRun.endTime - currentRun.startTime);
    console.log('');
    console.log(`╔══════════════════════════════════════════════════╗`);
    console.log(`║  🏁 ALL DONE in ${totalTime}`.padEnd(51) + '║');
    console.log(`╚══════════════════════════════════════════════════╝`);
    broadcast('run-complete', { duration: currentRun.endTime - currentRun.startTime });
    saveRun();
  } else {
    // Periodic save
    if (timeline.length % 10 === 0) saveRun();
  }
}

function getStatus() {
  if (!currentRun) return { active: false };
  const { tasks, libs, apps, appDeps, sortedApps, agents, appReadyTimes, appBuildTimes } = currentRun;

  const libCounts = { pending: 0, ready: 0, running: 0, done: 0, failed: 0 };
  for (const lib of libs) libCounts[tasks[lib].state]++;

  const cacheHits = Object.values(tasks).filter(t => t.type === 'lib' && t.cacheHit).length;

  const appStatus = sortedApps.map(app => {
    const myDeps = appDeps[app] || [];
    const doneCount = myDeps.filter(d => tasks[d]?.state === 'done').length;
    return {
      name: app,
      libsReady: doneCount,
      libsNeeded: myDeps.length,
      libsDone: doneCount === myDeps.length,
      buildState: tasks[app].state,
      builtBy: tasks[app].agentId || null,
      readyAt: appReadyTimes[app] || null,
      buildTime: appBuildTimes[app] || null,
    };
  });

  return {
    active: true,
    runId: currentRun.id,
    status: currentRun.status,
    commitSha: currentRun.commitSha,
    branch: currentRun.branch,
    elapsed: elapsed(),
    elapsedMs: Date.now() - currentRun.startTime,
    ...libCounts,
    total: libs.length,
    totalTasks: libs.length + apps.length,
    cacheHits,
    allDone: allDone(),
    appStatus,
    agents: Object.values(agents).map(a => ({
      ...a,
      avgBuildTime: a.tasksCompleted > 0 ? a.totalBuildTime / a.tasksCompleted : 0,
    })),
    workspaceStats: currentRun.workspaceStats || null,
  };
}

// --- HTTP + WebSocket Server ---

const wsClients = new Set<WebSocket>();

const server = http.createServer((req, res) => {
  const url = new URL(req.url || '/', `http://localhost:${PORT}`);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  // Dashboard
  if (req.method === 'GET' && (url.pathname === '/' || url.pathname === '/dashboard')) {
    const dashPath = join(__dirname, 'dashboard', 'index.html');
    if (existsSync(dashPath)) {
      res.setHeader('Content-Type', 'text/html');
      res.end(readFileSync(dashPath, 'utf-8'));
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.end('<h1>Dashboard not found</h1><p>Place index.html in scripts/dashboard/</p>');
    }
    return;
  }

  res.setHeader('Content-Type', 'application/json');

  // Health
  if (req.method === 'GET' && url.pathname === '/health') {
    res.end(JSON.stringify({ status: 'ok', activeRun: currentRun?.id || null }));
    return;
  }

  // Init new run
  if (req.method === 'POST' && url.pathname === '/init') {
    let body = '';
    req.on('data', c => body += c);
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const { graph, commitSha, branch, triggeredBy, workspaceStats } = data;

        // Parse graph
        const libs: string[] = [];
        const apps: string[] = [];
        const libSet = new Set<string>();

        for (const [name, node] of Object.entries(graph.nodes) as any) {
          const targets = node.data?.targets || {};
          if (!targets.build) continue;
          if (node.data?.projectType === 'application') apps.push(name);
          else { libs.push(name); libSet.add(name); }
        }

        const deps: Record<string, string[]> = {};
        for (const lib of libs) {
          deps[lib] = (graph.dependencies[lib] || []).map((d: any) => d.target).filter((t: string) => libSet.has(t));
        }

        const appDeps: Record<string, string[]> = {};
        for (const app of apps) {
          const visited = new Set<string>();
          const queue = (graph.dependencies[app] || []).map((d: any) => d.target).filter((t: string) => libSet.has(t));
          while (queue.length > 0) {
            const dep = queue.shift()!;
            if (visited.has(dep)) continue;
            visited.add(dep);
            for (const t of deps[dep] || []) { if (!visited.has(t)) queue.push(t); }
          }
          appDeps[app] = [...visited];
        }

        const sortedApps = [...apps].sort((a, b) => appDeps[a].length - appDeps[b].length);

        const tasks: Record<string, Task> = {};
        for (const l of libs) tasks[l] = { name: l, type: 'lib', state: 'pending', logs: [] };
        for (const a of apps) tasks[a] = { name: a, type: 'app', state: 'pending', logs: [] };

        const runId = `run-${Date.now()}`;
        currentRun = {
          id: runId, status: 'running', startTime: Date.now(),
          commitSha: commitSha || 'unknown', branch: branch || 'unknown',
          triggeredBy: triggeredBy || 'unknown',
          libs, apps, deps, appDeps, sortedApps, tasks, timeline: [],
          agents: {}, appReadyTimes: {}, appBuildTimes: {},
          workspaceStats: workspaceStats || undefined,
        };

        promoteReadyTasks();

        console.log('');
        console.log('┌──────────────────────────────────────────────────────┐');
        console.log('│  🧠  COORDINATOR v3 — New Run                        │');
        console.log('└──────────────────────────────────────────────────────┘');
        console.log(`   Run ID:  ${runId}`);
        console.log(`   Commit:  ${commitSha?.slice(0, 8) || '?'} (${branch})`);
        console.log(`   Tasks:   ${libs.length} libs + ${apps.length} apps = ${libs.length + apps.length}`);
        for (const app of sortedApps) {
          const count = appDeps[app].length;
          console.log(`   ${app.padEnd(20)} ${count} libs ${count <= 10 ? '⚡' : count >= 50 ? '🐢' : ''}`);
        }
        console.log('');

        broadcast('run-started', {
          runId, commitSha, branch, libs: libs.length, apps: apps.length,
          appDeps: sortedApps.map(a => ({ name: a, count: appDeps[a].length })),
        });
        saveRun();

        res.end(JSON.stringify({ runId, libs: libs.length, apps: apps.length, totalTasks: libs.length + apps.length }));
      } catch (e: any) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  // Analyze
  if (req.method === 'GET' && url.pathname === '/analyze') {
    if (!currentRun) { res.statusCode = 404; res.end(JSON.stringify({ error: 'No active run' })); return; }
    res.end(JSON.stringify({
      libs: currentRun.libs.map(l => ({ name: l, deps: currentRun!.deps[l] || [] })),
      apps: currentRun.sortedApps.map(a => ({ name: a, libDeps: currentRun!.appDeps[a] })),
      totalLibs: currentRun.libs.length,
      totalApps: currentRun.apps.length,
      totalTasks: currentRun.libs.length + currentRun.apps.length,
    }));
    return;
  }

  // Next task
  if (req.method === 'GET' && url.pathname === '/next-task') {
    const agentId = url.searchParams.get('agentId') || 'unknown';
    const result = getNextTask(agentId);
    res.end(JSON.stringify(result));
    return;
  }

  // Task done
  if (req.method === 'POST' && url.pathname === '/task-done') {
    let body = '';
    req.on('data', c => body += c);
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        markTaskDone(data.task, data.success, {
          cacheHit: data.cacheHit,
          outputHash: data.outputHash,
          outputSize: data.outputSize,
        });
        res.end(JSON.stringify({ ok: true }));
      } catch (e) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
    return;
  }

  // Task logs
  if (req.method === 'POST' && url.pathname === '/task-log') {
    let body = '';
    req.on('data', c => body += c);
    req.on('end', () => {
      try {
        const { task, log } = JSON.parse(body);
        if (currentRun?.tasks[task]) {
          currentRun.tasks[task].logs.push(log);
          broadcast('task-log', { task, log });
        }
        res.end(JSON.stringify({ ok: true }));
      } catch { res.statusCode = 400; res.end(JSON.stringify({ error: 'Invalid' })); }
    });
    return;
  }

  // Status
  if (req.method === 'GET' && url.pathname === '/status') {
    res.end(JSON.stringify(getStatus()));
    return;
  }

  // App status
  if (req.method === 'GET' && url.pathname === '/app-status') {
    const appName = url.searchParams.get('app');
    if (!appName || !currentRun) { res.statusCode = 400; res.end(JSON.stringify({ error: 'Missing app or no run' })); return; }
    const myDeps = currentRun.appDeps[appName];
    if (!myDeps) { res.statusCode = 404; res.end(JSON.stringify({ error: 'Unknown app' })); return; }
    const doneCount = myDeps.filter(d => currentRun!.tasks[d]?.state === 'done').length;
    res.end(JSON.stringify({
      app: appName, ready: doneCount === myDeps.length,
      libsReady: doneCount, libsNeeded: myDeps.length,
      buildState: currentRun.tasks[appName].state,
    }));
    return;
  }

  // Run history
  if (req.method === 'GET' && url.pathname === '/runs') {
    res.end(JSON.stringify(loadRunHistory()));
    return;
  }

  // Load specific run
  if (req.method === 'GET' && url.pathname.startsWith('/runs/')) {
    const runId = url.pathname.slice(6);
    const run = runId === currentRun?.id ? currentRun : loadRun(runId);
    if (!run) { res.statusCode = 404; res.end(JSON.stringify({ error: 'Run not found' })); return; }
    res.end(JSON.stringify(run));
    return;
  }

  // Graph data for visualization
  if (req.method === 'GET' && url.pathname === '/graph-data') {
    if (!currentRun) { res.statusCode = 404; res.end(JSON.stringify({ error: 'No active run' })); return; }
    const nodes = [
      ...currentRun.libs.map(l => ({ id: l, type: 'lib', state: currentRun!.tasks[l].state, deps: currentRun!.deps[l]?.length || 0 })),
      ...currentRun.apps.map(a => ({ id: a, type: 'app', state: currentRun!.tasks[a].state, deps: currentRun!.appDeps[a]?.length || 0 })),
    ];
    const edges: { from: string; to: string }[] = [];
    for (const lib of currentRun.libs) {
      for (const dep of currentRun.deps[lib] || []) edges.push({ from: dep, to: lib });
    }
    for (const app of currentRun.apps) {
      for (const dep of currentRun.appDeps[app] || []) edges.push({ from: dep, to: app });
    }
    res.end(JSON.stringify({ nodes, edges }));
    return;
  }

  res.statusCode = 404;
  res.end(JSON.stringify({ error: 'Not found' }));
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  wsClients.add(ws);
  // Send current state on connect
  ws.send(JSON.stringify({ event: 'init', data: getStatus(), timestamp: Date.now() }));
  ws.on('close', () => wsClients.delete(ws));
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('');
  console.log('┌──────────────────────────────────────────────────────┐');
  console.log('│  🧠  COORDINATOR v3 — Persistent Build Orchestrator  │');
  console.log('└──────────────────────────────────────────────────────┘');
  console.log(`   🌐 http://0.0.0.0:${PORT}`);
  console.log(`   📊 Dashboard: http://0.0.0.0:${PORT}/dashboard`);
  console.log(`   📁 Data: ${DATA_DIR}`);
  console.log('   Waiting for /init...');
  console.log('');
});
