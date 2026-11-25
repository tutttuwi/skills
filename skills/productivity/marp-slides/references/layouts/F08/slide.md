---
marp: true
theme: dark-tech
size: 16:9
lang: ja
---

## 分岐・合流

<div class="figure">
<svg class="diagram" viewBox="0 0 1100 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="分岐して二つの処理を実行し再び合流する" font-size="24">
  <defs>
  <marker id="f08-arrow" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
  <path d="M0 0L8 4L0 8z" fill="var(--accent)"/>
  </marker>
  </defs>
  <path d="M210 190L445 93" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#f08-arrow)" />
  <path d="M210 190L445 287" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#f08-arrow)" />
  <path d="M655 93L880 190" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#f08-arrow)" />
  <path d="M655 287L880 190" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#f08-arrow)" />
  <rect x="20" y="155" width="190" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="115" y="198" fill="var(--ink)" text-anchor="middle" >受付</text>
  <rect x="445" y="58" width="210" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="550" y="101" fill="var(--ink)" text-anchor="middle" >自動審査</text>
  <rect x="445" y="252" width="210" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="550" y="295" fill="var(--ink)" text-anchor="middle" >手動審査</text>
  <rect x="880" y="155" width="190" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="975" y="198" fill="var(--ink)" text-anchor="middle" >結果確定</text>
</svg>
</div>
