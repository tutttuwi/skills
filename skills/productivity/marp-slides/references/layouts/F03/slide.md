---
marp: true
theme: dark-tech
size: 16:9
lang: ja
---

## ジグザグフロー

<div class="figure">
<svg class="diagram" viewBox="0 0 1100 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="折り返す工程" font-size="24">
  <defs>
  <marker id="f03-arrow" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
  <path d="M0 0L8 4L0 8z" fill="var(--accent)"/>
  </marker>
  </defs>
  <path d="M280 85L450 85" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#f03-arrow)" />
  <path d="M650 85L820 85" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#f03-arrow)" />
  <path d="M920 120L920 245" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#f03-arrow)" />
  <path d="M820 280L650 280" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#f03-arrow)" />
  <path d="M450 280L280 280" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#f03-arrow)" />
  <rect x="80" y="50" width="200" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="180" y="93" fill="var(--ink)" text-anchor="middle" >受付</text>
  <rect x="450" y="50" width="200" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="550" y="93" fill="var(--ink)" text-anchor="middle" >確認</text>
  <rect x="820" y="50" width="200" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="920" y="93" fill="var(--ink)" text-anchor="middle" >判定</text>
  <rect x="820" y="245" width="200" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="920" y="288" fill="var(--ink)" text-anchor="middle" >登録</text>
  <rect x="450" y="245" width="200" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="550" y="288" fill="var(--ink)" text-anchor="middle" >通知</text>
  <rect x="80" y="245" width="200" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="180" y="288" fill="var(--ink)" text-anchor="middle" >完了</text>
</svg>
</div>
