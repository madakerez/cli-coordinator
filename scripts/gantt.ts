// Standalone ASCII Gantt chart renderer
// Fetches timeline data from coordinator and renders it

const COORDINATOR_URL = process.env.COORDINATOR_URL || 'http://localhost:8765';

async function main() {
  const res = await fetch(`${COORDINATOR_URL}/timeline`);
  const text = await res.text();
  console.log(text);
}

main().catch((e) => {
  console.error('Failed to fetch timeline:', e.message);
  process.exit(1);
});
