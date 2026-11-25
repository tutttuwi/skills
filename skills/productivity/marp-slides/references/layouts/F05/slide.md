---
marp: true
theme: dark-tech
size: 16:9
lang: ja
---

## 循環プロセス

<div class="figure">
<svg class="diagram" viewBox="0 0 1100 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="四工程を循環する" font-size="24">
  <defs>
  <marker id="f05-arrow" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
  <path d="M0 0L8 4L0 8z" fill="var(--accent)"/>
  </marker>
  </defs>
  <path d="M650 45Q840 48 875 158" fill="none" stroke="var(--accent)" stroke-width="3" marker-end="url(#f05-arrow)"/>
  <path d="M875 222Q830 332 650 335" fill="none" stroke="var(--accent)" stroke-width="3" marker-end="url(#f05-arrow)"/>
  <path d="M450 335Q274 333 230 222" fill="none" stroke="var(--accent)" stroke-width="3" marker-end="url(#f05-arrow)"/>
  <path d="M230 158Q265 48 450 45" fill="none" stroke="var(--accent)" stroke-width="3" marker-end="url(#f05-arrow)"/>
  <rect x="450" y="10" width="200" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="550" y="53" fill="var(--ink)" text-anchor="middle" >計画</text>
  <rect x="775" y="155" width="200" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="875" y="198" fill="var(--ink)" text-anchor="middle" >実行</text>
  <rect x="450" y="300" width="200" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="550" y="343" fill="var(--ink)" text-anchor="middle" >確認</text>
  <rect x="130" y="155" width="200" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="230" y="198" fill="var(--ink)" text-anchor="middle" >改善</text>
</svg>
</div>
