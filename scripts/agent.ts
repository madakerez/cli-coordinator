import { execSync } from 'child_process';
import { join } from 'path';

const COORDINATOR_URL = process.env.COORDINATOR_URL || 'http://localhost:8765';
const AGENT_ID = process.env.AGENT_ID || `agent-${process.pid}`;
const ROOT = join(__dirname, '..');
const POLL_INTERVAL = 2000;

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

async function getNextTask(): Promise<{ task: string | null; done: boolean }> {
  return fetchJSON(`${COORDINATOR_URL}/next-task?agentId=${AGENT_ID}`);
}

async function reportDone(task: string, success: boolean, artifactPath?: string) {
  await fetchJSON(`${COORDINATOR_URL}/task-done`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task, success, artifactPath }),
  });
}

function buildTask(taskName: string): { success: boolean; artifactPath?: string } {
  console.log(`[${AGENT_ID}] Building: ${taskName}`);
  try {
    execSync(`npx nx build ${taskName}`, {
      cwd: ROOT,
      stdio: 'inherit',
      env: { ...process.env, NX_IGNORE_UNSUPPORTED_TS_SETUP: 'true' },
      timeout: 300_000,
    });
    // NX outputs to dist/ by default
    const artifactPath = join(ROOT, 'dist', 'libs', taskName);
    console.log(`[${AGENT_ID}] Done: ${taskName}`);
    return { success: true, artifactPath };
  } catch (e) {
    console.error(`[${AGENT_ID}] Failed: ${taskName}`, (e as Error).message);
    return { success: false };
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

  while (true) {
    const { task, done } = await getNextTask();

    if (task) {
      const result = buildTask(task);
      await reportDone(task, result.success, result.artifactPath);
    } else if (done) {
      console.log(`[${AGENT_ID}] All tasks completed. Exiting.`);
      break;
    } else {
      // No task available yet, poll again
      await new Promise((r) => setTimeout(r, POLL_INTERVAL));
    }
  }
}

main().catch((e) => {
  console.error(`[${AGENT_ID}] Fatal error:`, e);
  process.exit(1);
});
