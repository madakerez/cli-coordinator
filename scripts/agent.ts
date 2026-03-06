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

function run(cmd: string, label: string): boolean {
  console.log(`[${AGENT_ID}] ${label}`);
  try {
    execSync(cmd, {
      cwd: ROOT,
      stdio: 'inherit',
      env: { ...process.env, NX_IGNORE_UNSUPPORTED_TS_SETUP: 'true' },
      timeout: 300_000,
    });
    return true;
  } catch (e) {
    console.error(`[${AGENT_ID}] FAILED: ${label}`, (e as Error).message);
    return false;
  }
}

function buildLib(taskName: string): boolean {
  // Use NX_TASKS_RUNNER_DYNAMIC_OUTPUT=false and build ONLY this lib,
  // skipping dependency builds since the coordinator ensures deps are already built.
  // We achieve this by running the underlying SWC compiler directly via nx run.
  return run(
    `npx nx run ${taskName}:build --skip-nx-cache`,
    `Building lib: ${taskName}`
  );
}

function buildApp(taskName: string): boolean {
  // Apps need their lib deps to be built (which they already are at this phase).
  // Build with NX which will find all deps already cached.
  return run(
    `npx nx build ${taskName}`,
    `Building app: ${taskName}`
  );
}

function deployApp(taskName: string): boolean {
  // Fake deploy — simulate a deployment step
  const appName = taskName.replace('deploy:', '');
  console.log(`[${AGENT_ID}] Deploying: ${appName}`);
  console.log(`[${AGENT_ID}]   Checking build artifacts in dist/apps/${appName}...`);

  try {
    execSync(`ls dist/apps/${appName}/browser/index.html`, { cwd: ROOT, stdio: 'pipe' });
  } catch {
    console.log(`[${AGENT_ID}]   Warning: build artifacts not found locally (expected on distributed runners)`);
  }

  // Simulate upload delay
  const delay = 1000 + Math.random() * 2000;
  execSync(`sleep ${(delay / 1000).toFixed(1)}`);

  console.log(`[${AGENT_ID}]   Uploaded ${appName} to https://${appName}.example.com`);
  console.log(`[${AGENT_ID}]   Health check passed`);
  console.log(`[${AGENT_ID}]   Deploy complete: ${appName}`);
  return true;
}

function executeTask(taskName: string, type: string): boolean {
  switch (type) {
    case 'lib':
      return buildLib(taskName);
    case 'app':
      return buildApp(taskName);
    case 'deploy':
      return deployApp(taskName);
    default:
      console.error(`[${AGENT_ID}] Unknown task type: ${type}`);
      return false;
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

  // Fetch and log the build plan
  const analysis = await fetchJSON(`${COORDINATOR_URL}/analyze`);
  console.log(`[${AGENT_ID}] Build plan: ${analysis.totalLibs} libs → ${analysis.totalApps} apps → ${analysis.totalApps} deploys`);

  while (true) {
    const { task, type, done } = await getNextTask();

    if (task && type) {
      console.log(`[${AGENT_ID}] Assigned: ${task} (${type})`);
      const success = executeTask(task, type);
      await reportDone(task, success);
    } else if (done) {
      console.log(`[${AGENT_ID}] All phases completed. Exiting.`);
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
