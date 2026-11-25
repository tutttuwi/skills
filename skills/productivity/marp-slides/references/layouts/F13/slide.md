---
marp: true
theme: dark-tech
size: 16:9
lang: ja
---

## フィードバックループ

<div class="figure">
<svg class="diagram" viewBox="0 0 1100 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="フィードバックループ" font-size="24">
  <defs>
  <marker id="f13-arrow" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
  <path d="M0 0L8 4L0 8z" fill="var(--accent)"/>
  </marker>
  </defs>
  <rect x="100" y="90" width="200" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="200" y="133" fill="var(--ink)" text-anchor="middle" >施策</text>
  <rect x="450" y="90" width="200" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="550" y="133" fill="var(--ink)" text-anchor="middle" >実施</text>
  <path d="M300 125L450 125" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#f13-arrow)" />
  <rect x="800" y="90" width="200" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="900" y="133" fill="var(--ink)" text-anchor="middle" >計測</text>
  <path d="M650 125L800 125" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#f13-arrow)" />
  <path d="M900 160V283H200V160" fill="none" stroke="var(--accent)" stroke-width="3" marker-end="url(#f13-arrow)"/>
  <text x="550" y="320" fill="var(--ink)" text-anchor="middle" >次の施策へ反映</text>
</svg>
</div>
