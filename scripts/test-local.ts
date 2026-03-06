import { spawn, ChildProcess } from 'child_process';
import { join } from 'path';

const ROOT = join(__dirname, '..');
const NUM_AGENTS = parseInt(process.env.NUM_AGENTS || '4', 10);
const PORT = 8765;

const children: ChildProcess[] = [];

function cleanup() {
  console.log('\nCleaning up...');
  for (const child of children) {
    child.kill('SIGTERM');
  }
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

async function waitForHealth() {
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch(`http://localhost:${PORT}/health`);
      if (res.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error('Coordinator failed to start');
}

async function pollStatus(): Promise<boolean> {
  try {
    const res = await fetch(`http://localhost:${PORT}/status`);
    const status = await res.json() as any;
    const remaining = status.pending + status.ready + status.running;
    process.stdout.write(
      `\r[status] done=${status.done} running=${status.running} ready=${status.ready} pending=${status.pending} failed=${status.failed}    `
    );
    return remaining === 0;
  } catch {
    return false;
  }
}

async function main() {
  console.log(`Starting local test with ${NUM_AGENTS} agents...\n`);

  // Start coordinator
  console.log('Starting coordinator...');
  const coordinator = spawn('npx', ['tsx', 'scripts/coordinator.ts'], {
    cwd: ROOT,
    stdio: ['ignore', 'inherit', 'inherit'],
    env: { ...process.env, PORT: String(PORT) },
  });
  children.push(coordinator);

  coordinator.on('exit', (code) => {
    console.log(`\nCoordinator exited with code ${code}`);
  });

  await waitForHealth();
  console.log('Coordinator is ready.\n');

  // Start agents
  const agentPromises: Promise<number | null>[] = [];
  for (let i = 1; i <= NUM_AGENTS; i++) {
    const agentId = `agent-${i}`;
    console.log(`Starting ${agentId}...`);
    const agent = spawn('npx', ['tsx', 'scripts/agent.ts'], {
      cwd: ROOT,
      stdio: ['ignore', 'inherit', 'inherit'],
      env: {
        ...process.env,
        COORDINATOR_URL: `http://localhost:${PORT}`,
        AGENT_ID: agentId,
      },
    });
    children.push(agent);

    agentPromises.push(
      new Promise((resolve) => {
        agent.on('exit', (code) => resolve(code));
      })
    );
  }

  // Poll status until all done
  while (true) {
    const allDone = await pollStatus();
    if (allDone) break;
    await new Promise((r) => setTimeout(r, 3000));
  }

  console.log('\n\nAll tasks complete! Fetching timeline...\n');

  // Fetch and print gantt chart
  try {
    const res = await fetch(`http://localhost:${PORT}/timeline`);
    const text = await res.text();
    console.log(text);
  } catch (e) {
    console.error('Failed to fetch timeline');
  }

  // Wait for agents to exit
  await Promise.all(agentPromises);

  // Stop coordinator
  coordinator.kill('SIGTERM');
  console.log('Done!');
  process.exit(0);
}

main().catch((e) => {
  console.error('Fatal error:', e);
  cleanup();
  process.exit(1);
});
