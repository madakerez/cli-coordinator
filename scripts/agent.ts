import { execSync } from 'child_process';
import { join } from 'path';

const COORDINATOR_URL = process.env.COORDINATOR_URL || 'http://localhost:8765';
const AGENT_ID = process.env.AGENT_ID || `agent-${process.pid}`;
const ROOT = join(__dirname, '..');
const POLL_INTERVAL = 2000;

const agentStart = Date.now();
let libsBuilt = 0;
let libsFailed = 0;
let totalBuildTime = 0;

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
      log(`⚠️  Request failed (${attempt}/${retries}), retrying...`);
      await new Promise((r) => setTimeout(r, 2000));
    }
  }
}

async function getNextTask(): Promise<{
  task: string | null;
  type: string | null;
  done: boolean;
}> {
  return fetchJSON(`${COORDINATOR_URL}/next-task?agentId=${AGENT_ID}`);
}

async function reportDone(task: string, success: boolean): Promise<boolean> {
  try {
    await fetchJSON(`${COORDINATOR_URL}/task-done`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task, success }),
    });
    return true;
  } catch {
    log(`📡 Coordinator gone after ${task} — work complete`);
    return false;
  }
}

function buildLib(taskName: string): { success: boolean; duration: number } {
  log(`🔨 Building ${taskName}...`);
  const start = Date.now();
  try {
    execSync(`npx nx run ${taskName}:build`, {
      cwd: ROOT,
      stdio: 'inherit',
      env: { ...process.env, NX_IGNORE_UNSUPPORTED_TS_SETUP: 'true' },
      timeout: 300_000,
    });
    const duration = Date.now() - start;
    log(`✅ ${taskName} built in ${fmtDuration(duration)}`);
    return { success: true, duration };
  } catch (e) {
    const duration = Date.now() - start;
    log(`❌ ${taskName} FAILED after ${fmtDuration(duration)}`);
    return { success: false, duration };
  }
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
      await new Promise((r) => setTimeout(r, 5000));
    }
  }
  throw new Error('Coordinator not reachable after 5 minutes');
}

function printSummary() {
  const totalTime = fmtDuration(Date.now() - agentStart);
  const avgTime = libsBuilt > 0 ? fmtDuration(totalBuildTime / libsBuilt) : '-';
  console.log('');
  console.log(`┌─────────────────────────────────────┐`);
  console.log(`│  📊 ${AGENT_ID} Summary`.padEnd(38) + '│');
  console.log(`├─────────────────────────────────────┤`);
  console.log(`│  Total time:  ${totalTime}`.padEnd(38) + '│');
  console.log(`│  Libs built:  ${libsBuilt}`.padEnd(38) + '│');
  if (libsFailed > 0) {
    console.log(`│  Libs failed: ${libsFailed}`.padEnd(38) + '│');
  }
  console.log(`│  Avg per lib: ${avgTime}`.padEnd(38) + '│');
  console.log(`└─────────────────────────────────────┘`);
}

async function main() {
  console.log('');
  console.log(`🤖 ${AGENT_ID} starting up`);
  console.log(`   Coordinator: ${COORDINATOR_URL}`);
  console.log(`   Cache: NX remote cache (MinIO)`);
  console.log('');

  await waitForCoordinator();

  const analysis = await fetchJSON(`${COORDINATOR_URL}/analyze`);
  log(`📋 ${analysis.totalLibs} libs in build plan, ${analysis.totalApps} apps`);
  console.log('');

  while (true) {
    let task: string | null;
    let done: boolean;
    try {
      ({ task, done } = await getNextTask());
    } catch {
      log(`📡 Coordinator unreachable — work complete`);
      break;
    }

    if (task) {
      const { success, duration } = buildLib(task);
      if (success) {
        libsBuilt++;
        totalBuildTime += duration;
      } else {
        libsFailed++;
      }
      const reported = await reportDone(task, success);
      if (!reported) break;
    } else if (done) {
      log('🏁 All libs built — shutting down');
      break;
    } else {
      await new Promise((r) => setTimeout(r, POLL_INTERVAL));
    }
  }

  printSummary();
}

main().catch((e) => {
  console.error(`\n❌ [${AGENT_ID}] Fatal error:`, e);
  printSummary();
  process.exit(1);
});
