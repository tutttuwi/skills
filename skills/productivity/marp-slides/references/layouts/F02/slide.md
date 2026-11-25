---
marp: true
theme: dark-tech
size: 16:9
lang: ja
---

## 垂直ステップフロー

<div class="figure">
<svg class="diagram" viewBox="0 0 1100 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="垂直ステップ" font-size="24">
  <defs>
  <marker id="f02-arrow" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
  <path d="M0 0L8 4L0 8z" fill="var(--accent)"/>
  </marker>
  </defs>
  <rect x="350" y="25" width="400" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="550" y="68" fill="var(--ink)" text-anchor="middle" >資料準備</text>
  <rect x="350" y="153" width="400" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="550" y="196" fill="var(--ink)" text-anchor="middle" >設定更新</text>
  <path d="M550 95L550 153" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#f02-arrow)" />
  <rect x="350" y="281" width="400" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="550" y="324" fill="var(--ink)" text-anchor="middle" >結果確認</text>
  <path d="M550 223L550 281" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#f02-arrow)" />
</svg>
</div>
