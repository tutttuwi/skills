---
marp: true
theme: friendly
size: 16:9
lang: ja
---

## 因果関係

<div class="figure">
<svg class="diagram" viewBox="0 0 1100 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="処理の順序" font-size="24">
  <defs>
  <marker id="k13-arrow" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
  <path d="M0 0L8 4L0 8z" fill="var(--accent)"/>
  </marker>
  </defs>
  <rect x="75" y="145" width="250" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="200" y="188" fill="var(--ink)" text-anchor="middle" >結果を再利用</text>
  <rect x="425" y="145" width="250" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="550" y="188" fill="var(--ink)" text-anchor="middle" >DB呼び出しが減る</text>
  <path d="M325 180L425 180" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#k13-arrow)" />
  <rect x="775" y="145" width="250" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="900" y="188" fill="var(--ink)" text-anchor="middle" >応答が速まる</text>
  <path d="M675 180L775 180" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#k13-arrow)" />
</svg>
</div>
