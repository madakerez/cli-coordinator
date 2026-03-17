#!/bin/bash
# ─────────────────────────────────────────────────────────────
# Orchestrator: submit benchmark job to GKE, collect results,
# generate HTML report.
# Usage: ./scripts/run-cache-benchmark.sh [--projects=...] [--runs=3]
# ─────────────────────────────────────────────────────────────
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
JOB_NAME="benchmark-cache-$(date +%s)"
IMAGE="us-central1-docker.pkg.dev/project-c09883fa-34b7-476f-80e/ci-images/cli-coordinator-base:latest"
GIT_SHA=$(cd "$REPO_DIR" && git rev-parse HEAD)
PROJECTS="${PROJECTS:-shared-utils,shared-config,shared-auth,shared-http,shared-models,shared-ui,shared-cache,shared-logging,shared-events,shared-crypto}"
RUNS="${RUNS:-3}"
PARALLEL="${PARALLEL:-6}"
REPORT_DIR="$REPO_DIR/scripts/dashboard"
REPORT_FILE="$REPORT_DIR/benchmark-cache.html"

# ── parse args ───────────────────────────────────────────────
for arg in "$@"; do
  case $arg in
    --projects=*) PROJECTS="${arg#*=}" ;;
    --runs=*)     RUNS="${arg#*=}" ;;
    --parallel=*) PARALLEL="${arg#*=}" ;;
    --all)        PROJECTS="all" ;;
    *)            echo "Unknown arg: $arg"; exit 1 ;;
  esac
done

echo "╔══════════════════════════════════════════╗"
echo "║   NX CACHE BENCHMARK ORCHESTRATOR       ║"
echo "╠══════════════════════════════════════════╣"
echo "║ Job:      $JOB_NAME"
echo "║ Projects: $PROJECTS"
echo "║ Runs:     $RUNS"
echo "║ Parallel: $PARALLEL"
echo "╚══════════════════════════════════════════╝"
echo ""

# ── pre-checks ───────────────────────────────────────────────

echo "[1/6] Checking cluster access..."
kubectl get nodes -o wide | head -5

echo ""
echo "[2/6] Ensuring heavy pool has nodes..."
HEAVY_NODES=$(kubectl get nodes -l workload=heavy --no-headers 2>/dev/null | wc -l | tr -d ' ')
if [ "$HEAVY_NODES" -eq 0 ]; then
  echo "  → No heavy nodes, triggering scale-up..."
  gcloud container node-pools update heavy-6cpu \
    --cluster=lab-cluster \
    --zone=us-central1-a \
    --enable-autoscaling \
    --min-nodes=1 \
    --max-nodes=2 \
    --quiet
  echo "  → Waiting for heavy node to be Ready (up to 5 min)..."
  for i in $(seq 1 60); do
    READY=$(kubectl get nodes -l workload=heavy --no-headers 2>/dev/null | grep -c "Ready" || true)
    if [ "$READY" -ge 1 ]; then
      echo "  → Heavy node ready!"
      break
    fi
    sleep 5
  done
fi

# ── upload benchmark script as ConfigMap ─────────────────────

echo ""
echo "[3/6] Creating benchmark ConfigMap..."
kubectl delete configmap benchmark-script 2>/dev/null || true
kubectl create configmap benchmark-script \
  --from-file=benchmark-cache.sh="$SCRIPT_DIR/benchmark-cache.sh"

# ── submit K8s job ───────────────────────────────────────────

echo ""
echo "[4/6] Submitting benchmark job: $JOB_NAME"
kubectl apply -f - <<EOF
apiVersion: batch/v1
kind: Job
metadata:
  name: $JOB_NAME
spec:
  ttlSecondsAfterFinished: 600
  backoffLimit: 0
  template:
    spec:
      nodeSelector:
        workload: heavy
      serviceAccountName: ci-runner
      containers:
      - name: benchmark
        image: $IMAGE
        command:
        - sh
        - -c
        - |
          git fetch --depth=1 origin $GIT_SHA && git reset --hard $GIT_SHA
          chmod +x /scripts/benchmark-cache.sh
          bash /scripts/benchmark-cache.sh
        env:
        - name: BENCHMARK_PROJECTS
          value: "$PROJECTS"
        - name: BENCHMARK_RUNS
          value: "$RUNS"
        - name: BENCHMARK_PARALLEL
          value: "$PARALLEL"
        resources:
          requests:
            cpu: "5000m"
            memory: "12Gi"
        volumeMounts:
        - name: nx-cache
          mountPath: /app/.nx
        - name: benchmark-script
          mountPath: /scripts
      volumes:
      - name: nx-cache
        persistentVolumeClaim:
          claimName: nx-cache
      - name: benchmark-script
        configMap:
          name: benchmark-script
          defaultMode: 0755
      restartPolicy: Never
EOF

# ── wait & stream logs ───────────────────────────────────────

echo ""
echo "[5/6] Waiting for pod to start..."
kubectl wait --for=condition=ready pod -l "job-name=$JOB_NAME" --timeout=600s

echo ""
echo "── BENCHMARK LOGS ──────────────────────────"
kubectl logs -f "job/$JOB_NAME" | tee /tmp/benchmark-output.log

# ── check job status ─────────────────────────────────────────

JOB_STATUS=$(kubectl get job "$JOB_NAME" -o jsonpath='{.status.conditions[0].type}' 2>/dev/null || echo "Unknown")
if [ "$JOB_STATUS" != "Complete" ]; then
  echo "WARNING: Job status is $JOB_STATUS (not Complete)"
fi

# ── extract JSON & generate report ───────────────────────────

echo ""
echo "[6/6] Generating HTML report..."

# Extract JSON from logs
BENCHMARK_JSON=$(sed -n '/BENCHMARK_JSON_START/,/BENCHMARK_JSON_END/{/BENCHMARK_JSON/d;p;}' /tmp/benchmark-output.log)

if [ -z "$BENCHMARK_JSON" ]; then
  echo "ERROR: Could not extract benchmark JSON from logs!"
  echo "Check /tmp/benchmark-output.log"
  exit 1
fi

# Save raw JSON
echo "$BENCHMARK_JSON" > "$REPORT_DIR/benchmark-cache.json"
echo "  → JSON saved to $REPORT_DIR/benchmark-cache.json"

# Generate HTML
python3 "$SCRIPT_DIR/generate-benchmark-report.py" \
  "$REPORT_DIR/benchmark-cache.json" \
  "$REPORT_FILE"

echo "  → HTML report: $REPORT_FILE"
echo ""
echo "Done! Open the report:"
echo "  open $REPORT_FILE"

# ── cleanup ──────────────────────────────────────────────────

echo ""
read -rp "Scale heavy pool back to 0? [y/N] " answer
if [[ "$answer" =~ ^[Yy]$ ]]; then
  gcloud container node-pools update heavy-6cpu \
    --cluster=lab-cluster \
    --zone=us-central1-a \
    --enable-autoscaling \
    --min-nodes=0 \
    --max-nodes=2 \
    --quiet
  echo "  → Heavy pool scaling to 0"
fi
