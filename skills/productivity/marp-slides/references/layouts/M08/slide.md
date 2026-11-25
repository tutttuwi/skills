---
marp: true
theme: corporate
size: 16:9
lang: ja
---

## ロジックツリー

<div class="figure">
<svg class="diagram" viewBox="0 0 1100 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="親と子の関係" font-size="24">
  <defs>
  <marker id="m08-arrow" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
  <path d="M0 0L8 4L0 8z" fill="var(--accent)"/>
  </marker>
  </defs>
  <path d="M550 92L285 173" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#m08-arrow)" />
  <path d="M550 92L815 173" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#m08-arrow)" />
  <path d="M285 243L163 305" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#m08-arrow)" />
  <path d="M285 243L407 305" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#m08-arrow)" />
  <rect x="455" y="22" width="190" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="550" y="65" fill="var(--ink)" text-anchor="middle" >処理時間</text>
  <rect x="190" y="173" width="190" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="285" y="216" fill="var(--ink)" text-anchor="middle" >入力時間</text>
  <rect x="720" y="173" width="190" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="815" y="216" fill="var(--ink)" text-anchor="middle" >確認時間</text>
  <rect x="68" y="305" width="190" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="163" y="348" fill="var(--ink)" text-anchor="middle" >入力項目</text>
  <rect x="312" y="305" width="190" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="407" y="348" fill="var(--ink)" text-anchor="middle" >画面遷移</text>
</svg>
</div>
