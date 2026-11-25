---
marp: true
theme: dark-tech
size: 16:9
lang: ja
---

## 依存関係グラフ

<div class="figure">
<svg class="diagram" viewBox="0 0 1100 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="依存関係グラフ" font-size="24">
  <defs>
  <marker id="e17-arrow" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
  <path d="M0 0L8 4L0 8z" fill="var(--accent)"/>
  </marker>
  </defs>
  <path d="M295 90L775 90" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#e17-arrow)" />
  <path d="M775 90L295 290" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#e17-arrow)" />
  <path d="M865 125L865 255" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#e17-arrow)" />
  <rect x="115" y="55" width="180" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="205" y="98" fill="var(--ink)" text-anchor="middle" >UI</text>
  <rect x="775" y="55" width="180" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="865" y="98" fill="var(--ink)" text-anchor="middle" >サービス</text>
  <rect x="115" y="255" width="180" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="205" y="298" fill="var(--ink)" text-anchor="middle" >永続化</text>
  <rect x="775" y="255" width="180" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="865" y="298" fill="var(--ink)" text-anchor="middle" >監査</text>
</svg>
</div>
