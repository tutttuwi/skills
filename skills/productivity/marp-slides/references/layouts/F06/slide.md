---
marp: true
theme: dark-tech
size: 16:9
lang: ja
---

## 入力・処理・出力

<div class="figure">
<svg class="diagram" viewBox="0 0 1100 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="処理の順序" font-size="24">
  <defs>
  <marker id="f06-arrow" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
  <path d="M0 0L8 4L0 8z" fill="var(--accent)"/>
  </marker>
  </defs>
  <rect x="75" y="145" width="250" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="200" y="174" fill="var(--ink)" text-anchor="middle" >入力</text>
  <text x="200" y="200" fill="var(--ink)" text-anchor="middle" font-size="18">申請フォーム</text>
  <rect x="425" y="145" width="250" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="550" y="174" fill="var(--ink)" text-anchor="middle" >処理</text>
  <text x="550" y="200" fill="var(--ink)" text-anchor="middle" font-size="18">検証・保存</text>
  <path d="M325 180L425 180" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#f06-arrow)" />
  <rect x="775" y="145" width="250" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="900" y="174" fill="var(--ink)" text-anchor="middle" >出力</text>
  <text x="900" y="200" fill="var(--ink)" text-anchor="middle" font-size="18">受付番号</text>
  <path d="M675 180L775 180" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#f06-arrow)" />
</svg>
</div>
