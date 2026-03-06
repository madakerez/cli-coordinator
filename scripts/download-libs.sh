#!/bin/bash
# Downloads and extracts pre-built lib outputs from the coordinator for a given app.
# Usage: ./scripts/download-libs.sh <app-name>
# Requires COORDINATOR_URL env var.

set -euo pipefail

APP_NAME="${1:?Usage: download-libs.sh <app-name>}"
COORDINATOR_URL="${COORDINATOR_URL:?COORDINATOR_URL not set}"

echo "=== Downloading pre-built libs for ${APP_NAME} ==="

# Download the binary bundle from coordinator
BUNDLE_FILE="/tmp/libs-bundle-${APP_NAME}.bin"
HTTP_CODE=$(curl -sf -o "$BUNDLE_FILE" -w '%{http_code}' "${COORDINATOR_URL}/download-libs?app=${APP_NAME}" 2>/dev/null) || true

if [ "$HTTP_CODE" != "200" ] || [ ! -f "$BUNDLE_FILE" ]; then
  echo "WARNING: Could not download libs bundle (HTTP ${HTTP_CODE}). App will rebuild libs."
  exit 0
fi

BUNDLE_SIZE=$(stat -f%z "$BUNDLE_FILE" 2>/dev/null || stat -c%s "$BUNDLE_FILE" 2>/dev/null || echo "0")
echo "Downloaded bundle: ${BUNDLE_SIZE} bytes"

# Parse the binary protocol:
# 4 bytes manifest length (LE) + manifest JSON + for each lib: 4 bytes name len + name + 4 bytes data len + data
python3 - "$BUNDLE_FILE" "$(pwd)" <<'PYEOF'
import sys, json, struct, subprocess, os, tempfile

bundle_path = sys.argv[1]
work_dir = sys.argv[2]

with open(bundle_path, 'rb') as f:
    data = f.read()

offset = 0

# Read manifest
manifest_len = struct.unpack_from('<I', data, offset)[0]
offset += 4
manifest = json.loads(data[offset:offset + manifest_len].decode())
offset += manifest_len

print(f"Libs available: {len(manifest['libs'])}, missing: {len(manifest['missing'])}")
if manifest['missing']:
    print(f"  Missing (will be rebuilt): {', '.join(manifest['missing'])}")

extracted = 0
for lib_info in manifest['libs']:
    # Read name
    name_len = struct.unpack_from('<I', data, offset)[0]
    offset += 4
    name = data[offset:offset + name_len].decode()
    offset += name_len

    # Read tar data
    data_len = struct.unpack_from('<I', data, offset)[0]
    offset += 4
    tar_data = data[offset:offset + data_len]
    offset += data_len

    # Extract tar.gz into workspace
    tar_path = os.path.join(tempfile.gettempdir(), f'lib-{name}.tar.gz')
    with open(tar_path, 'wb') as tf:
        tf.write(tar_data)

    subprocess.run(['tar', 'xzf', tar_path, '-C', work_dir], check=True)
    size_kb = len(tar_data) / 1024
    print(f"  Extracted: {name} ({size_kb:.1f} KB)")
    extracted += 1
    os.unlink(tar_path)

print(f"=== Restored {extracted} pre-built libs for {manifest['app']} ===")
PYEOF

# Verify NX cache was populated
if [ -d ".nx/cache" ]; then
  CACHE_COUNT=$(ls .nx/cache/ 2>/dev/null | grep -c '^[0-9]' || true)
  echo ".nx/cache/ contains ${CACHE_COUNT} cache entries"
fi
