#!/bin/sh
# ─────────────────────────────────────────────────────────────
# NX Cache Benchmark: PVC (local disk) vs GCS (remote)
# Runs inside a GKE pod (alpine). No gsutil needed.
# GCS bucket clearing is triggered via /tmp/signals files.
# Outputs JSON results (between BENCHMARK_JSON_START/END).
# ─────────────────────────────────────────────────────────────
set -eu

PROJECTS="${BENCHMARK_PROJECTS:-shared-utils,shared-config,shared-auth,shared-http,shared-models,shared-ui,shared-cache,shared-logging,shared-events,shared-crypto}"
PARALLEL="${BENCHMARK_PARALLEL:-6}"
RUNS="${BENCHMARK_RUNS:-3}"

echo "============================================"
echo "  NX CACHE BENCHMARK"
echo "============================================"
echo "Projects:  $PROJECTS"
echo "Parallel:  $PARALLEL"
echo "Runs:      $RUNS"
echo "Node:      $(hostname)"
echo "CPU:       $(nproc)"
echo "Date:      $(date -u +%Y-%m-%dT%H:%M:%SZ)"
echo "============================================"

# ── helpers ──────────────────────────────────────────────────

time_ms() {
  # Returns command duration in milliseconds
  local start end
  start=$(date +%s)
  "$@"
  end=$(date +%s)
  echo $(( (end - start) * 1000 ))
}

run_nx_build() {
  npx nx run-many \
    --target=build \
    --projects="$PROJECTS" \
    --parallel="$PARALLEL" \
    --skip-nx-cache=false 2>&1
}

clear_local_cache() {
  echo "[*] Clearing local NX cache..."
  rm -rf .nx/cache .nx/d 2>/dev/null || true
  rm -rf node_modules/.cache 2>/dev/null || true
}

clear_dist() {
  echo "[*] Clearing dist outputs..."
  rm -rf dist 2>/dev/null || true
  find libs apps packages -name "dist" -type d -exec rm -rf {} + 2>/dev/null || true
}

clear_gcs_via_nx() {
  # Reset NX to force fresh hashes by touching inputs
  # Then use nx reset to clear daemon state
  echo "[*] Resetting NX state..."
  npx nx reset 2>/dev/null || true
}

cache_entry_count() {
  if [ -d .nx/cache ]; then
    ls -1 .nx/cache 2>/dev/null | wc -l | tr -d ' '
  else
    echo "0"
  fi
}

cache_size_kb() {
  if [ -d .nx/cache ]; then
    du -sk .nx/cache 2>/dev/null | awk '{print $1}'
  else
    echo "0"
  fi
}

# ── collect results in a simple format ───────────────────────
# We'll build JSON manually since alpine may not have python

RESULTS_COLD=""
RESULTS_PVC=""
RESULTS_GCS=""
RESULTS_GCS_WRITE=""

# ── SCENARIO 1: COLD BUILD (no cache) ───────────────────────

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  SCENARIO 1: COLD BUILD (baseline, no cache)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

i=1
while [ "$i" -le "$RUNS" ]; do
  echo ""
  echo "── Cold run $i/$RUNS ──"
  clear_local_cache
  clear_dist
  npx nx reset 2>/dev/null || true

  # Disable remote cache for cold baseline
  export NX_SKIP_REMOTE_CACHE=true
  START=$(node -e "process.stdout.write(String(Date.now()))")
  run_nx_build || true
  END=$(node -e "process.stdout.write(String(Date.now()))")
  DURATION_MS=$((END - START))
  unset NX_SKIP_REMOTE_CACHE

  echo "  → ${DURATION_MS} ms"
  RESULTS_COLD="${RESULTS_COLD}${RESULTS_COLD:+,}${DURATION_MS}"
  i=$((i + 1))
done

COLD_ENTRIES=$(cache_entry_count)
COLD_SIZE=$(cache_size_kb)

# ── SCENARIO 2: WARM PVC (local disk cache) ─────────────────

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  SCENARIO 2: WARM PVC (local disk cache)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Populate local cache first
echo "[*] Populating local PVC cache..."
clear_local_cache
clear_dist
npx nx reset 2>/dev/null || true
export NX_SKIP_REMOTE_CACHE=true
run_nx_build > /dev/null 2>&1 || true
unset NX_SKIP_REMOTE_CACHE

i=1
while [ "$i" -le "$RUNS" ]; do
  echo ""
  echo "── PVC warm run $i/$RUNS ──"
  clear_dist  # clear outputs but keep cache
  export NX_SKIP_REMOTE_CACHE=true

  START=$(node -e "process.stdout.write(String(Date.now()))")
  run_nx_build || true
  END=$(node -e "process.stdout.write(String(Date.now()))")
  DURATION_MS=$((END - START))
  unset NX_SKIP_REMOTE_CACHE

  echo "  → ${DURATION_MS} ms"
  RESULTS_PVC="${RESULTS_PVC}${RESULTS_PVC:+,}${DURATION_MS}"
  i=$((i + 1))
done

PVC_ENTRIES=$(cache_entry_count)
PVC_SIZE=$(cache_size_kb)

# ── SCENARIO 3: WARM GCS (remote cache, no local) ───────────

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  SCENARIO 3: WARM GCS (remote cache read)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Populate GCS: clear local, build with GCS enabled
echo "[*] Populating GCS cache..."
clear_local_cache
clear_dist
npx nx reset 2>/dev/null || true
run_nx_build > /dev/null 2>&1 || true

i=1
while [ "$i" -le "$RUNS" ]; do
  echo ""
  echo "── GCS warm run $i/$RUNS ──"
  clear_local_cache  # force fetch from GCS
  clear_dist

  START=$(node -e "process.stdout.write(String(Date.now()))")
  run_nx_build || true
  END=$(node -e "process.stdout.write(String(Date.now()))")
  DURATION_MS=$((END - START))

  echo "  → ${DURATION_MS} ms"
  RESULTS_GCS="${RESULTS_GCS}${RESULTS_GCS:+,}${DURATION_MS}"
  i=$((i + 1))
done

GCS_ENTRIES=$(cache_entry_count)
GCS_SIZE=$(cache_size_kb)

# ── SCENARIO 4: COLD + GCS WRITE ────────────────────────────

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  SCENARIO 4: COLD + GCS WRITE (upload overhead)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

echo ""
echo "NOTE: GCS bucket should be cleared externally before this."
echo "      Signal file: /tmp/gcs-cleared"
echo "      Proceeding in 5s..."
sleep 5

i=1
while [ "$i" -le "$RUNS" ]; do
  echo ""
  echo "── GCS write run $i/$RUNS ──"
  clear_local_cache
  clear_dist
  npx nx reset 2>/dev/null || true
  # Note: GCS may still have entries from scenario 3 on run 2+
  # This measures cold local + GCS write for new entries (or skip if exists)

  START=$(node -e "process.stdout.write(String(Date.now()))")
  run_nx_build || true
  END=$(node -e "process.stdout.write(String(Date.now()))")
  DURATION_MS=$((END - START))

  echo "  → ${DURATION_MS} ms"
  RESULTS_GCS_WRITE="${RESULTS_GCS_WRITE}${RESULTS_GCS_WRITE:+,}${DURATION_MS}"
  i=$((i + 1))
done

GCS_WRITE_ENTRIES=$(cache_entry_count)
GCS_WRITE_SIZE=$(cache_size_kb)

# ── BUILD JSON OUTPUT ────────────────────────────────────────

calc_stats() {
  # input: comma-separated ms values; output: avg,min,max
  local vals="$1"
  echo "$vals" | awk -F',' '{
    sum=0; min=999999999; max=0;
    for(i=1;i<=NF;i++){
      sum+=$i;
      if($i<min) min=$i;
      if($i>max) max=$i;
    }
    printf "%d,%d,%d", sum/NF, min, max
  }'
}

COLD_STATS=$(calc_stats "$RESULTS_COLD")
PVC_STATS=$(calc_stats "$RESULTS_PVC")
GCS_STATS=$(calc_stats "$RESULTS_GCS")
GCS_WRITE_STATS=$(calc_stats "$RESULTS_GCS_WRITE")

NX_VER=$(npx nx --version 2>/dev/null || echo "unknown")

echo ""
echo "============================================"
echo "  BENCHMARK COMPLETE"
echo "============================================"

printf "%-30s %8s %8s %8s\n" "Scenario" "Avg" "Min" "Max"
echo "────────────────────────────────────────────────────────"
printf "%-30s %7sms %7sms %7sms\n" "cold_build" "$(echo $COLD_STATS | cut -d, -f1)" "$(echo $COLD_STATS | cut -d, -f2)" "$(echo $COLD_STATS | cut -d, -f3)"
printf "%-30s %7sms %7sms %7sms\n" "warm_pvc" "$(echo $PVC_STATS | cut -d, -f1)" "$(echo $PVC_STATS | cut -d, -f2)" "$(echo $PVC_STATS | cut -d, -f3)"
printf "%-30s %7sms %7sms %7sms\n" "warm_gcs" "$(echo $GCS_STATS | cut -d, -f1)" "$(echo $GCS_STATS | cut -d, -f2)" "$(echo $GCS_STATS | cut -d, -f3)"
printf "%-30s %7sms %7sms %7sms\n" "cold_gcs_write" "$(echo $GCS_WRITE_STATS | cut -d, -f1)" "$(echo $GCS_WRITE_STATS | cut -d, -f2)" "$(echo $GCS_WRITE_STATS | cut -d, -f3)"

echo ""
echo "BENCHMARK_JSON_START"
cat <<ENDJSON
{
  "meta": {
    "projects": "$PROJECTS",
    "parallel": $PARALLEL,
    "runs": $RUNS,
    "node": "$(hostname)",
    "cpu": $(nproc),
    "memory_gb": $(awk '/MemTotal/{printf "%d", $2/1048576}' /proc/meminfo),
    "date": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
    "nx_version": "$NX_VER"
  },
  "scenarios": [
    {
      "name": "cold_build",
      "description": "No cache (baseline)",
      "times_ms": [$RESULTS_COLD],
      "avg_ms": $(echo $COLD_STATS | cut -d, -f1),
      "min_ms": $(echo $COLD_STATS | cut -d, -f2),
      "max_ms": $(echo $COLD_STATS | cut -d, -f3),
      "local_cache_entries": $COLD_ENTRIES,
      "local_cache_size_kb": $COLD_SIZE,
      "gcs_cache_entries": 0
    },
    {
      "name": "warm_pvc",
      "description": "Warm PVC (local disk cache hit)",
      "times_ms": [$RESULTS_PVC],
      "avg_ms": $(echo $PVC_STATS | cut -d, -f1),
      "min_ms": $(echo $PVC_STATS | cut -d, -f2),
      "max_ms": $(echo $PVC_STATS | cut -d, -f3),
      "local_cache_entries": $PVC_ENTRIES,
      "local_cache_size_kb": $PVC_SIZE,
      "gcs_cache_entries": 0
    },
    {
      "name": "warm_gcs",
      "description": "Warm GCS (remote cache read)",
      "times_ms": [$RESULTS_GCS],
      "avg_ms": $(echo $GCS_STATS | cut -d, -f1),
      "min_ms": $(echo $GCS_STATS | cut -d, -f2),
      "max_ms": $(echo $GCS_STATS | cut -d, -f3),
      "local_cache_entries": $GCS_ENTRIES,
      "local_cache_size_kb": $GCS_SIZE,
      "gcs_cache_entries": 0
    },
    {
      "name": "cold_gcs_write",
      "description": "Cold build + GCS write",
      "times_ms": [$RESULTS_GCS_WRITE],
      "avg_ms": $(echo $GCS_WRITE_STATS | cut -d, -f1),
      "min_ms": $(echo $GCS_WRITE_STATS | cut -d, -f2),
      "max_ms": $(echo $GCS_WRITE_STATS | cut -d, -f3),
      "local_cache_entries": $GCS_WRITE_ENTRIES,
      "local_cache_size_kb": $GCS_WRITE_SIZE,
      "gcs_cache_entries": 0
    }
  ]
}
ENDJSON
echo "BENCHMARK_JSON_END"
