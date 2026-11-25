---
marp: true
theme: corporate
size: 16:9
lang: ja
---

## 魚骨図

<div class="figure">
<svg class="diagram" viewBox="0 0 1100 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="魚骨図" font-size="24">
  <defs>
  <marker id="m09-arrow" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
  <path d="M0 0L8 4L0 8z" fill="var(--accent)"/>
  </marker>
  </defs>
  <path d="M90 184L860 184" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#m09-arrow)" />
  <rect x="863" y="149" width="190" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="958" y="192" fill="var(--ink)" text-anchor="middle" >承認遅延</text>
  <path d="M220 94L325 184" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#m09-arrow)" />
  <rect x="110" y="30" width="220" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="220" y="59" fill="var(--ink)" text-anchor="middle" >人</text>
  <text x="220" y="85" fill="var(--ink)" text-anchor="middle" font-size="18">担当が不明</text>
  <path d="M520 94L625 184" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#m09-arrow)" />
  <rect x="410" y="30" width="220" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="520" y="59" fill="var(--ink)" text-anchor="middle" >手順</text>
  <text x="520" y="85" fill="var(--ink)" text-anchor="middle" font-size="18">優先度が曖昧</text>
  <path d="M220 277L325 184" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#m09-arrow)" />
  <rect x="110" y="271" width="220" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="220" y="300" fill="var(--ink)" text-anchor="middle" >仕組み</text>
  <text x="220" y="326" fill="var(--ink)" text-anchor="middle" font-size="18">通知が届かない</text>
  <path d="M520 277L625 184" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#m09-arrow)" />
  <rect x="410" y="271" width="220" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="520" y="300" fill="var(--ink)" text-anchor="middle" >環境</text>
  <text x="520" y="326" fill="var(--ink)" text-anchor="middle" font-size="18">繁忙期</text>
</svg>
</div>
