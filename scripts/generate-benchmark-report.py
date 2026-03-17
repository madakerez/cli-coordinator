#!/usr/bin/env python3
"""Generate an HTML benchmark report from benchmark-cache.json."""
import json
import sys
from pathlib import Path

def main():
    if len(sys.argv) < 3:
        print("Usage: generate-benchmark-report.py <input.json> <output.html>")
        sys.exit(1)

    data = json.loads(Path(sys.argv[1]).read_text())
    meta = data["meta"]
    scenarios = data["scenarios"]

    # Find max for bar scaling
    max_ms = max(s["avg_ms"] for s in scenarios) if scenarios else 1

    # Color map
    colors = {
        "cold_build": "#6b7280",
        "warm_pvc": "#22c55e",
        "warm_gcs": "#3b82f6",
        "cold_gcs_write": "#f59e0b",
    }
    labels = {
        "cold_build": "Cold Build (baseline)",
        "warm_pvc": "Warm PVC (local disk)",
        "warm_gcs": "Warm GCS (remote)",
        "cold_gcs_write": "Cold + GCS Write",
    }

    # Speedup calculations
    cold_avg = next((s["avg_ms"] for s in scenarios if s["name"] == "cold_build"), 1)
    pvc_avg = next((s["avg_ms"] for s in scenarios if s["name"] == "warm_pvc"), 0)
    gcs_avg = next((s["avg_ms"] for s in scenarios if s["name"] == "warm_gcs"), 0)

    pvc_speedup = cold_avg / pvc_avg if pvc_avg > 0 else 0
    gcs_speedup = cold_avg / gcs_avg if gcs_avg > 0 else 0
    pvc_vs_gcs = ((gcs_avg - pvc_avg) / pvc_avg * 100) if pvc_avg > 0 else 0

    # Build scenario bars HTML
    bars_html = ""
    for s in scenarios:
        name = s["name"]
        color = colors.get(name, "#9ca3af")
        label = labels.get(name, name)
        pct = (s["avg_ms"] / max_ms * 100) if max_ms > 0 else 0
        times_str = ", ".join(f"{t}ms" for t in s["times_ms"])

        bars_html += f"""
        <div class="scenario">
          <div class="scenario-header">
            <span class="scenario-label">{label}</span>
            <span class="scenario-avg">{s['avg_ms']:,}ms</span>
          </div>
          <div class="bar-track">
            <div class="bar-fill" style="width:{pct:.1f}%;background:{color}"></div>
          </div>
          <div class="scenario-details">
            <span>min {s['min_ms']:,}ms</span>
            <span>max {s['max_ms']:,}ms</span>
            <span>runs: [{times_str}]</span>
            <span>cache entries: {s.get('local_cache_entries', '?')} local / {s.get('gcs_cache_entries', '?')} GCS</span>
            <span>local size: {s.get('local_cache_size_kb', 0):,} KB</span>
          </div>
        </div>
        """

    # Determine verdict
    if pvc_avg > 0 and gcs_avg > 0:
        if pvc_avg < gcs_avg:
            winner = "PVC"
            diff_pct = abs(pvc_vs_gcs)
            verdict_color = "#22c55e"
            verdict_text = f"PVC is {diff_pct:.0f}% faster than GCS"
            verdict_detail = f"Local disk cache ({pvc_avg:,}ms) beats network fetch ({gcs_avg:,}ms) by {gcs_avg - pvc_avg:,}ms per build."
        else:
            winner = "GCS"
            diff_pct = abs(pvc_vs_gcs)
            verdict_color = "#3b82f6"
            verdict_text = f"GCS is {diff_pct:.0f}% faster than PVC"
            verdict_detail = f"Network fetch ({gcs_avg:,}ms) beats local disk ({pvc_avg:,}ms) by {pvc_avg - gcs_avg:,}ms per build."
    else:
        winner = "N/A"
        verdict_color = "#6b7280"
        verdict_text = "Insufficient data"
        verdict_detail = ""

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NX Cache Benchmark: PVC vs GCS</title>
<style>
  * {{ margin: 0; padding: 0; box-sizing: border-box; }}
  body {{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #0f172a;
    color: #e2e8f0;
    padding: 2rem;
    max-width: 960px;
    margin: 0 auto;
  }}
  h1 {{
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(90deg, #22c55e, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }}
  .subtitle {{ color: #94a3b8; margin-bottom: 2rem; font-size: 0.9rem; }}

  /* Verdict card */
  .verdict {{
    background: #1e293b;
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    border-left: 4px solid {verdict_color};
  }}
  .verdict h2 {{
    font-size: 1.3rem;
    color: {verdict_color};
    margin-bottom: 0.5rem;
  }}
  .verdict p {{ color: #94a3b8; font-size: 0.9rem; }}

  /* KPI cards */
  .kpi-grid {{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
  }}
  .kpi {{
    background: #1e293b;
    border-radius: 10px;
    padding: 1.25rem;
    text-align: center;
  }}
  .kpi-value {{
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2;
  }}
  .kpi-label {{
    font-size: 0.8rem;
    color: #94a3b8;
    margin-top: 0.3rem;
  }}

  /* Scenarios */
  .scenarios {{
    background: #1e293b;
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 2rem;
  }}
  .scenarios h3 {{
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: #f1f5f9;
  }}
  .scenario {{
    margin-bottom: 1.5rem;
  }}
  .scenario:last-child {{ margin-bottom: 0; }}
  .scenario-header {{
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.4rem;
  }}
  .scenario-label {{ font-weight: 600; font-size: 0.95rem; }}
  .scenario-avg {{ font-weight: 700; font-size: 0.95rem; font-variant-numeric: tabular-nums; }}
  .bar-track {{
    background: #334155;
    border-radius: 6px;
    height: 28px;
    overflow: hidden;
  }}
  .bar-fill {{
    height: 100%;
    border-radius: 6px;
    transition: width 0.6s ease;
    min-width: 2px;
  }}
  .scenario-details {{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 0.3rem;
    font-size: 0.75rem;
    color: #64748b;
  }}

  /* Meta */
  .meta {{
    background: #1e293b;
    border-radius: 12px;
    padding: 1.25rem;
    font-size: 0.8rem;
    color: #64748b;
  }}
  .meta-grid {{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 0.5rem;
  }}
  .meta strong {{ color: #94a3b8; }}

  /* Comparison table */
  .comparison {{
    background: #1e293b;
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 2rem;
  }}
  .comparison h3 {{ font-size: 1.1rem; margin-bottom: 1rem; color: #f1f5f9; }}
  table {{
    width: 100%;
    border-collapse: collapse;
  }}
  th, td {{
    text-align: left;
    padding: 0.6rem 1rem;
    border-bottom: 1px solid #334155;
    font-size: 0.9rem;
  }}
  th {{ color: #94a3b8; font-weight: 600; font-size: 0.8rem; text-transform: uppercase; }}
  td.num {{ text-align: right; font-variant-numeric: tabular-nums; font-weight: 600; }}
  tr.winner td {{ color: #22c55e; }}

  .footer {{
    text-align: center;
    margin-top: 2rem;
    font-size: 0.75rem;
    color: #475569;
  }}
</style>
</head>
<body>

<h1>NX Cache Benchmark</h1>
<p class="subtitle">PVC (local disk) vs GCS (remote) &mdash; {meta.get('date', 'N/A')}</p>

<div class="verdict">
  <h2>{verdict_text}</h2>
  <p>{verdict_detail}</p>
</div>

<div class="kpi-grid">
  <div class="kpi">
    <div class="kpi-value" style="color:#6b7280">{cold_avg:,}ms</div>
    <div class="kpi-label">Cold Build (baseline)</div>
  </div>
  <div class="kpi">
    <div class="kpi-value" style="color:#22c55e">{pvc_avg:,}ms</div>
    <div class="kpi-label">Warm PVC</div>
  </div>
  <div class="kpi">
    <div class="kpi-value" style="color:#3b82f6">{gcs_avg:,}ms</div>
    <div class="kpi-label">Warm GCS</div>
  </div>
  <div class="kpi">
    <div class="kpi-value" style="color:#22c55e">{pvc_speedup:.1f}x</div>
    <div class="kpi-label">PVC Speedup vs Cold</div>
  </div>
  <div class="kpi">
    <div class="kpi-value" style="color:#3b82f6">{gcs_speedup:.1f}x</div>
    <div class="kpi-label">GCS Speedup vs Cold</div>
  </div>
</div>

<div class="scenarios">
  <h3>All Scenarios</h3>
  {bars_html}
</div>

<div class="comparison">
  <h3>Head-to-Head: PVC vs GCS</h3>
  <table>
    <thead>
      <tr><th>Metric</th><th>PVC (local)</th><th>GCS (remote)</th><th>Delta</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>Avg build time</td>
        <td class="num">{pvc_avg:,}ms</td>
        <td class="num">{gcs_avg:,}ms</td>
        <td class="num">{abs(gcs_avg - pvc_avg):,}ms</td>
      </tr>
      <tr>
        <td>Speedup vs cold</td>
        <td class="num">{pvc_speedup:.1f}x</td>
        <td class="num">{gcs_speedup:.1f}x</td>
        <td class="num">{abs(pvc_speedup - gcs_speedup):.1f}x</td>
      </tr>
      <tr>
        <td>Cache locality</td>
        <td>Same node (disk I/O)</td>
        <td>Network (us-central1)</td>
        <td>&mdash;</td>
      </tr>
      <tr>
        <td>Shared across pods</td>
        <td>No (RWO PVC)</td>
        <td>Yes (any pod)</td>
        <td>&mdash;</td>
      </tr>
      <tr>
        <td>Shared across branches</td>
        <td>Yes (same PVC)</td>
        <td>Yes (same bucket)</td>
        <td>&mdash;</td>
      </tr>
      <tr>
        <td>Cost</td>
        <td>~$0.04/GB/mo (PD)</td>
        <td>~$0.02/GB/mo (GCS)</td>
        <td>&mdash;</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="meta">
  <div class="meta-grid">
    <div><strong>NX version:</strong> {meta.get('nx_version', '?')}</div>
    <div><strong>Projects:</strong> {meta.get('projects', '?')}</div>
    <div><strong>Parallel:</strong> {meta.get('parallel', '?')}</div>
    <div><strong>Runs per scenario:</strong> {meta.get('runs', '?')}</div>
    <div><strong>Node:</strong> {meta.get('node', '?')}</div>
    <div><strong>CPU:</strong> {meta.get('cpu', '?')} cores</div>
    <div><strong>Memory:</strong> {meta.get('memory_gb', '?')} GB</div>
    <div><strong>Date:</strong> {meta.get('date', '?')}</div>
  </div>
</div>

<div class="footer">
  Generated by NX Cache Benchmark &mdash; cli-coordinator
</div>

</body>
</html>"""

    Path(sys.argv[2]).write_text(html)
    print(f"Report generated: {sys.argv[2]}")


if __name__ == "__main__":
    main()
