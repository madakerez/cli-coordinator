#!/bin/bash
# Downloads pre-built lib outputs from the coordinator and registers them in NX cache.
# Usage: ./scripts/download-libs.sh <app-name>
# Requires COORDINATOR_URL env var.

set -euo pipefail

APP_NAME="${1:?Usage: download-libs.sh <app-name>}"
COORDINATOR_URL="${COORDINATOR_URL:?COORDINATOR_URL not set}"

echo "=== Downloading pre-built libs for ${APP_NAME} ==="

# Download JSON bundle from coordinator
BUNDLE_FILE="/tmp/libs-bundle-${APP_NAME}.json"
HTTP_CODE=$(curl -sf -o "$BUNDLE_FILE" -w '%{http_code}' "${COORDINATOR_URL}/download-libs?app=${APP_NAME}" 2>/dev/null) || true

if [ "$HTTP_CODE" != "200" ] || [ ! -f "$BUNDLE_FILE" ]; then
  echo "WARNING: Could not download libs bundle (HTTP ${HTTP_CODE}). App will rebuild libs."
  exit 0
fi

# Process the JSON: extract tars and insert DB metadata
python3 - "$BUNDLE_FILE" "$(pwd)" <<'PYEOF'
import sys, json, base64, subprocess, os, tempfile, glob

bundle_path = sys.argv[1]
work_dir = sys.argv[2]

with open(bundle_path) as f:
    data = json.load(f)

print(f"Libs available: {data['available']}, missing: {len(data['missing'])}")
if data['missing']:
    print(f"  Missing (will be rebuilt): {', '.join(data['missing'])}")

# Extract each lib's tar.gz
extracted = 0
for lib in data['libs']:
    tar_bytes = base64.b64decode(lib['tar'])
    tar_path = os.path.join(tempfile.gettempdir(), f"lib-{lib['name']}.tar.gz")
    with open(tar_path, 'wb') as tf:
        tf.write(tar_bytes)
    subprocess.run(['tar', 'xzf', tar_path, '-C', work_dir], check=True)
    size_kb = len(tar_bytes) / 1024
    print(f"  Extracted: {lib['name']} ({size_kb:.1f} KB)")
    extracted += 1
    os.unlink(tar_path)

# Find the NX workspace DB and insert cache metadata
# First, ensure NX has initialized its workspace data by running a quick command
nx_ws_dir = os.path.join(work_dir, '.nx', 'workspace-data')
os.makedirs(nx_ws_dir, exist_ok=True)

# Find existing DB or we'll create entries after NX initializes
db_files = glob.glob(os.path.join(nx_ws_dir, '*.db'))

if not db_files:
    # Run a minimal NX command to initialize the workspace DB
    print("  Initializing NX workspace data...")
    subprocess.run(
        ['npx', 'nx', 'report'],
        cwd=work_dir, capture_output=True, timeout=60,
        env={**os.environ, 'NX_IGNORE_UNSUPPORTED_TS_SETUP': 'true'}
    )
    db_files = glob.glob(os.path.join(nx_ws_dir, '*.db'))

if db_files and data['meta']:
    db_path = db_files[0]
    meta_rows = data['meta']
    print(f"  Registering {len(meta_rows)} cache entries in NX DB...")

    # Build SQL to insert task_details and cache_outputs
    sql_cmds = []
    for row in meta_rows:
        h = row['hash']
        p = row['project'].replace("'", "''")
        t = row['target'].replace("'", "''")
        c = row.get('code', 0)
        s = row.get('size', 0)
        sql_cmds.append(f"INSERT OR IGNORE INTO task_details (hash, project, target) VALUES ('{h}', '{p}', '{t}');")
        sql_cmds.append(f"INSERT OR IGNORE INTO cache_outputs (hash, code, size) VALUES ('{h}', {c}, {s});")

    sql = '\n'.join(sql_cmds)
    result = subprocess.run(
        ['sqlite3', db_path],
        input=sql, capture_output=True, text=True, timeout=10
    )
    if result.returncode == 0:
        print(f"  Registered {len(meta_rows)} entries in NX cache DB")
    else:
        print(f"  WARNING: DB insert failed: {result.stderr}")
elif not db_files:
    print("  WARNING: No NX workspace DB found, cache may not work")

print(f"=== Restored {extracted} pre-built libs for {data['app']} ===")

# Summary
cache_dir = os.path.join(work_dir, '.nx', 'cache')
if os.path.isdir(cache_dir):
    entries = [e for e in os.listdir(cache_dir) if e[0].isdigit()]
    print(f".nx/cache/ contains {len(entries)} cache entries")
PYEOF
