---
marp: true
theme: dark-tech
size: 16:9
lang: ja
---

## SqlStore が Store インターフェースを実装する

<div class="figure">
<svg class="diagram" viewBox="0 0 1100 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SqlStore が Store を実装する UML クラス図" font-size="24">
  <g fill="var(--surface)" stroke="var(--line)" stroke-width="2">
    <rect x="42" y="68" width="352" height="166" rx="8"/>
    <rect x="706" y="68" width="352" height="166" rx="8"/>
  </g>
  <g fill="none" stroke="var(--accent)" stroke-width="3">
    <path d="M42 145H394M706 145H1058"/>
    <path d="M706 169H423" stroke-dasharray="8 5"/>
    <path d="M394 169l29-15v30z" fill="var(--paper)"/>
  </g>
  <g fill="var(--ink)">
    <text x="65" y="115" font-weight="700">«interface» Store</text>
    <text x="65" y="199">+ save(request)</text>
    <text x="734" y="115" font-weight="700">SqlStore</text>
    <text x="734" y="199">+ save(request)</text>
    <text x="550" y="150" text-anchor="middle" font-size="20">実装</text>
  </g>
</svg>
</div>
