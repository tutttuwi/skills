---
marp: true
theme: dark-tech
size: 16:9
lang: ja
---

## 状態遷移

<div class="figure">
<svg class="diagram" viewBox="0 0 1100 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="状態遷移" font-size="24">
  <defs>
  <marker id="f14-arrow" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
  <path d="M0 0L8 4L0 8z" fill="var(--accent)"/>
  </marker>
  </defs>
  <rect x="100" y="90" width="200" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="200" y="133" fill="var(--ink)" text-anchor="middle" >下書き</text>
  <rect x="450" y="90" width="200" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="550" y="133" fill="var(--ink)" text-anchor="middle" >提出済み</text>
  <path d="M300 125L450 125" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#f14-arrow)" />
  <rect x="800" y="90" width="200" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="900" y="133" fill="var(--ink)" text-anchor="middle" >承認済み</text>
  <path d="M650 125L800 125" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#f14-arrow)" />
  <text x="375" y="100" fill="var(--ink)" text-anchor="middle" font-size="18">提出</text>
  <text x="725" y="100" fill="var(--ink)" text-anchor="middle" font-size="18">承認</text>
</svg>
</div>
