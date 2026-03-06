import { execSync } from 'child_process';
import { join } from 'path';
import { readdirSync, existsSync } from 'fs';

const COORDINATOR_URL = process.env.COORDINATOR_URL || 'http://localhost:8765';
const AGENT_ID = process.env.AGENT_ID || `agent-${process.pid}`;
const ROOT = join(__dirname, '..');
const POLL_INTERVAL = 2000;

// Track known NX cache entries so we upload only new ones per lib
let knownCacheEntries = new Set<string>();
function snapshotCacheEntries(): Set<string> {
  const cacheDir = join(ROOT, '.nx', 'cache');
  if (!existsSync(cacheDir)) return new Set();
  return new Set(readdirSync(cacheDir));
}
function getNewCacheEntries(): string[] {
  const current = snapshotCacheEntries();
  const newEntries = [...current].filter((e) => !knownCacheEntries.has(e) && e !== 'run.json' && e !== 'terminalOutputs');
  return newEntries;
}

async function fetchJSON(url: string, options?: RequestInit, retries = 5): Promise<any> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, options);
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      return await res.json();
    } catch (e) {
      if (attempt === retries) throw e;
      console.log(`[${AGENT_ID}] Request failed (attempt ${attempt}/${retries}), retrying in 2s...`);
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

async function reportDone(task: string, success: boolean) {
  await fetchJSON(`${COORDINATOR_URL}/task-done`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task, success }),
  });
}

function buildLib(taskName: string): boolean {
  console.log(`[${AGENT_ID}] Building lib: ${taskName}`);
  // Snapshot cache entries before build
  knownCacheEntries = snapshotCacheEntries();
  try {
    execSync(`npx nx run ${taskName}:build`, {
      cwd: ROOT,
      stdio: 'inherit',
      env: { ...process.env, NX_IGNORE_UNSUPPORTED_TS_SETUP: 'true' },
      timeout: 300_000,
    });
    return true;
  } catch (e) {
    console.error(`[${AGENT_ID}] FAILED: ${taskName}`, (e as Error).message);
    return false;
  }
}

async function uploadLibOutput(taskName: string) {
  // Tar new NX cache entries for this lib (contains the actual build output)
  const newCacheEntries = getNewCacheEntries();

  // Build the list of paths to tar (NX cache entries contain the build output)
  const paths: string[] = [];
  for (const entry of newCacheEntries) {
    const entryPath = join(ROOT, '.nx', 'cache', entry);
    if (existsSync(entryPath)) paths.push(`.nx/cache/${entry}`);
  }

  // Also include terminal output files for cache entries
  for (const entry of newCacheEntries) {
    const termPath = `.nx/cache/terminalOutputs/${entry}`;
    if (existsSync(join(ROOT, termPath))) paths.push(termPath);
  }

  if (paths.length === 0) {
    console.log(`[${AGENT_ID}] No output to upload for ${taskName}`);
    return;
  }

  try {
    // Create tar.gz of dist + cache entries
    const tarCmd = `tar czf /tmp/lib-${taskName}.tar.gz ${paths.join(' ')}`;
    execSync(tarCmd, { cwd: ROOT, stdio: 'pipe' });

    // Read and POST to coordinator
    const tarData = require('fs').readFileSync(`/tmp/lib-${taskName}.tar.gz`);
    const res = await fetch(`${COORDINATOR_URL}/upload-lib?name=${taskName}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/octet-stream' },
      body: tarData,
    });
    const result = await res.json();
    const sizeKB = (tarData.length / 1024).toFixed(1);
    console.log(`[${AGENT_ID}] Uploaded ${taskName} output (${sizeKB} KB, ${paths.length} paths)`);

    // Update known entries
    knownCacheEntries = snapshotCacheEntries();
  } catch (e) {
    console.error(`[${AGENT_ID}] Upload failed for ${taskName}:`, (e as Error).message);
  }
}

async function waitForCoordinator() {
  console.log(`[${AGENT_ID}] Waiting for coordinator at ${COORDINATOR_URL}...`);
  for (let i = 0; i < 60; i++) {
    try {
      await fetchJSON(`${COORDINATOR_URL}/health`);
      console.log(`[${AGENT_ID}] Coordinator is up!`);
      return;
    } catch {
      await new Promise((r) => setTimeout(r, 5000));
    }
  }
  throw new Error('Coordinator not reachable after 5 minutes');
}

async function main() {
  await waitForCoordinator();

  const analysis = await fetchJSON(`${COORDINATOR_URL}/analyze`);
  console.log(`[${AGENT_ID}] Build plan: ${analysis.totalLibs} libs to build`);

  while (true) {
    const { task, done } = await getNextTask();

    if (task) {
      console.log(`[${AGENT_ID}] Assigned: ${task}`);
      const success = buildLib(task);
      if (success) await uploadLibOutput(task);
      await reportDone(task, success);
    } else if (done) {
      console.log(`[${AGENT_ID}] All libs built. Exiting.`);
      break;
    } else {
      await new Promise((r) => setTimeout(r, POLL_INTERVAL));
    }
  }
}

main().catch((e) => {
  console.error(`[${AGENT_ID}] Fatal error:`, e);
  process.exit(1);
});
