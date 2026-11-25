---
marp: true
theme: dark-tech
size: 16:9
lang: ja
---

## メモリ・データ構造

<div class="figure">
<svg class="diagram" viewBox="0 0 1100 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="処理の順序" font-size="24">
  <defs>
  <marker id="e22-arrow" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
  <path d="M0 0L8 4L0 8z" fill="var(--accent)"/>
  </marker>
  </defs>
  <rect x="57.5" y="145" width="205" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="160" y="188" fill="var(--ink)" text-anchor="middle" >先頭</text>
  <rect x="317.5" y="145" width="205" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="420" y="188" fill="var(--ink)" text-anchor="middle" >要素 A</text>
  <path d="M262.5 180L317.5 180" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#e22-arrow)" />
  <rect x="577.5" y="145" width="205" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="680" y="188" fill="var(--ink)" text-anchor="middle" >要素 B</text>
  <path d="M522.5 180L577.5 180" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#e22-arrow)" />
  <rect x="837.5" y="145" width="205" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="940" y="188" fill="var(--ink)" text-anchor="middle" >null</text>
  <path d="M782.5 180L837.5 180" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#e22-arrow)" />
</svg>
</div>
