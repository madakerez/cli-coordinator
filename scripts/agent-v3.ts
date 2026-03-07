import { exec } from 'child_process';
import { join } from 'path';

const COORDINATOR_URL = process.env.COORDINATOR_URL || 'http://localhost:8765';
const AGENT_ID = process.env.AGENT_ID || `agent-${process.pid}`;
const CONCURRENCY = parseInt(process.env.AGENT_CONCURRENCY || '2', 10);
const ROOT = join(__dirname, '..');
const POLL_INTERVAL = 2000;

const agentStart = Date.now();
let libsBuilt = 0, appsBuilt = 0, appsDeployed = 0;
let libsFailed = 0, appsFailed = 0;
let totalBuildTime = 0, cacheHits = 0;
let shuttingDown = false;

function fmtDuration(ms: number): string {
  const s = ms / 1000;
  return s >= 60 ? `${Math.floor(s / 60)}m${(s % 60).toFixed(0)}s` : `${s.toFixed(1)}s`;
}

function log(msg: string) {
  const elapsed = fmtDuration(Date.now() - agentStart);
  console.log(`[${elapsed}] [${AGENT_ID}] ${msg}`);
}

async function fetchJSON(url: string, options?: RequestInit, retries = 5): Promise<any> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, options);
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      return await res.json();
    } catch (e) {
      if (attempt === retries) throw e;
      await new Promise(r => setTimeout(r, 2000));
    }
  }
}

async function sendLog(task: string, line: string) {
  try {
    await fetch(`${COORDINATOR_URL}/task-log`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task, log: line }),
    });
  } catch {}
}

async function getNextTask(): Promise<{ task: string | null; type: string | null; done: boolean }> {
  return fetchJSON(`${COORDINATOR_URL}/next-task?agentId=${AGENT_ID}`);
}

async function reportDone(task: string, success: boolean, meta?: any): Promise<boolean> {
  try {
    await fetchJSON(`${COORDINATOR_URL}/task-done`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task, success, ...meta }),
    });
    return true;
  } catch {
    log(`📡 Coordinator gone after ${task} — work complete`);
    return false;
  }
}

function buildTask(taskName: string, taskType: string): Promise<{ success: boolean; duration: number; cacheHit: boolean; output: string }> {
  return new Promise(resolve => {
    const icon = taskType === 'app' ? '🚀' : '🔨';
    log(`${icon} Building ${taskName}...`);
    const start = Date.now();
    let stdout = '', stderr = '';

    const proc = exec(`npx nx run ${taskName}:build`, {
      cwd: ROOT,
      env: { ...process.env, NX_IGNORE_UNSUPPORTED_TS_SETUP: 'true', NX_DAEMON: 'false' },
      timeout: 600_000,
      maxBuffer: 10 * 1024 * 1024,
    });

    proc.stdout?.on('data', d => {
      stdout += d;
      const lines = d.toString().split('\n').filter((l: string) => l.trim());
      for (const line of lines) sendLog(taskName, line);
    });
    proc.stderr?.on('data', d => { stderr += d; });

    proc.on('close', code => {
      const duration = Date.now() - start;
      const success = code === 0;
      const cacheHit = stdout.includes('[remote cache]') || stdout.includes('[local cache]');

      if (success) {
        log(`✅ ${taskName} in ${fmtDuration(duration)}${cacheHit ? ' [cache]' : ''}`);
      } else {
        log(`❌ ${taskName} FAILED after ${fmtDuration(duration)}`);
        if (stderr) console.error(stderr.slice(-500));
      }
      resolve({ success, duration, cacheHit, output: stdout });
    });
  });
}

function deployApp(appName: string): Promise<{ success: boolean; duration: number }> {
  return new Promise(resolve => {
    log(`🚢 Deploying ${appName}...`);
    const start = Date.now();
    exec(
      `echo "Deploying ${appName} to https://${appName}.example.com..." && ls dist/apps/${appName}/ && echo "✅ ${appName} deployed!"`,
      { cwd: ROOT, timeout: 120_000, maxBuffer: 5 * 1024 * 1024 },
      (error) => {
        const duration = Date.now() - start;
        if (error) {
          log(`❌ ${appName} deploy FAILED`);
          resolve({ success: false, duration });
        } else {
          log(`🚢 ${appName} deployed in ${fmtDuration(duration)}`);
          resolve({ success: true, duration });
        }
      }
    );
  });
}

async function waitForCoordinator() {
  log('📡 Connecting to coordinator...');
  for (let i = 0; i < 60; i++) {
    try {
      await fetchJSON(`${COORDINATOR_URL}/health`);
      log('📡 Connected!');
      return;
    } catch {
      if (i % 6 === 5) log(`⏳ Still waiting... (${i + 1}/60)`);
      await new Promise(r => setTimeout(r, 5000));
    }
  }
  throw new Error('Coordinator not reachable after 5 minutes');
}

function printSummary() {
  const totalTime = fmtDuration(Date.now() - agentStart);
  const total = libsBuilt + appsBuilt;
  const avgTime = total > 0 ? fmtDuration(totalBuildTime / total) : '-';
  console.log('');
  console.log(`┌─────────────────────────────────────┐`);
  console.log(`│  📊 ${AGENT_ID} Summary`.padEnd(38) + '│');
  console.log(`├─────────────────────────────────────┤`);
  console.log(`│  Concurrency: ${CONCURRENCY}`.padEnd(38) + '│');
  console.log(`│  Total time:  ${totalTime}`.padEnd(38) + '│');
  console.log(`│  Libs built:  ${libsBuilt} (${cacheHits} cache)`.padEnd(38) + '│');
  console.log(`│  Apps built:  ${appsBuilt}`.padEnd(38) + '│');
  console.log(`│  Deployed:    ${appsDeployed}`.padEnd(38) + '│');
  if (libsFailed > 0) console.log(`│  Libs failed: ${libsFailed}`.padEnd(38) + '│');
  if (appsFailed > 0) console.log(`│  Apps failed: ${appsFailed}`.padEnd(38) + '│');
  console.log(`│  Avg per task: ${avgTime}`.padEnd(38) + '│');
  console.log(`└─────────────────────────────────────┘`);
}

async function worker(workerId: number) {
  const wTag = `w${workerId}`;
  while (!shuttingDown) {
    let task: string | null, type: string | null, done: boolean;
    try {
      ({ task, type, done } = await getNextTask());
    } catch {
      log(`📡 [${wTag}] Coordinator unreachable — stopping`);
      shuttingDown = true;
      break;
    }

    if (task && type) {
      const result = await buildTask(task, type);
      if (result.success) {
        if (type === 'app') { appsBuilt++; } else { libsBuilt++; }
        if (result.cacheHit) cacheHits++;
        totalBuildTime += result.duration;

        // Deploy immediately after app build
        if (type === 'app') {
          const deploy = await deployApp(task);
          if (deploy.success) appsDeployed++;
        }
      } else {
        if (type === 'app') appsFailed++; else libsFailed++;
      }

      const reported = await reportDone(task, result.success, {
        cacheHit: result.cacheHit,
      });
      if (!reported) { shuttingDown = true; break; }
    } else if (done) {
      log(`🏁 [${wTag}] All tasks done — stopping`);
      shuttingDown = true;
      break;
    } else {
      await new Promise(r => setTimeout(r, POLL_INTERVAL));
    }
  }
}

async function main() {
  console.log('');
  console.log(`🤖 ${AGENT_ID} starting up (v3 — libs + apps + deploy)`);
  console.log(`   Coordinator: ${COORDINATOR_URL}`);
  console.log(`   Concurrency: ${CONCURRENCY}`);
  console.log('');

  await waitForCoordinator();

  const analysis = await fetchJSON(`${COORDINATOR_URL}/analyze`);
  log(`📋 ${analysis.totalLibs} libs + ${analysis.totalApps} apps = ${analysis.totalTasks} tasks`);
  console.log('');

  await Promise.all(Array.from({ length: CONCURRENCY }, (_, i) => worker(i + 1)));
  printSummary();
}

main().catch(e => {
  console.error(`\n❌ [${AGENT_ID}] Fatal error:`, e);
  printSummary();
  process.exit(1);
});
