---
marp: true
theme: dark-tech
size: 16:9
lang: ja
---

## データライフサイクル

<div class="figure">
<svg class="diagram" viewBox="0 0 1100 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="処理の順序" font-size="24">
  <defs>
  <marker id="e15-arrow" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
  <path d="M0 0L8 4L0 8z" fill="var(--accent)"/>
  </marker>
  </defs>
  <rect x="57" y="145" width="166" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="140" y="188" fill="var(--ink)" text-anchor="middle" >生成</text>
  <rect x="262" y="145" width="166" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="345" y="188" fill="var(--ink)" text-anchor="middle" >送信</text>
  <path d="M223 180L262 180" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#e15-arrow)" />
  <rect x="467" y="145" width="166" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="550" y="188" fill="var(--ink)" text-anchor="middle" >保存</text>
  <path d="M428 180L467 180" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#e15-arrow)" />
  <rect x="672" y="145" width="166" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="755" y="188" fill="var(--ink)" text-anchor="middle" >利用</text>
  <path d="M633 180L672 180" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#e15-arrow)" />
  <rect x="877" y="145" width="166" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="960" y="188" fill="var(--ink)" text-anchor="middle" >削除</text>
  <path d="M838 180L877 180" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#e15-arrow)" />
</svg>
</div>
