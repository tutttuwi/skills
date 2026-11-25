---
marp: true
theme: dark-tech
size: 16:9
lang: ja
---

## セキュリティ境界

<div class="figure">
<svg class="diagram" viewBox="0 0 1100 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="セキュリティ境界" font-size="24">
  <defs>
  <marker id="e16-arrow" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
  <path d="M0 0L8 4L0 8z" fill="var(--accent)"/>
  </marker>
  </defs>
  <rect x="55" y="70" width="300" height="220" rx="8" fill="var(--paper)" stroke="var(--line)" stroke-dasharray="8 6"/>
  <text x="205" y="115" fill="var(--ink)" text-anchor="middle" >公開側</text>
  <rect x="92.5" y="148" width="225" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="205" y="191" fill="var(--ink)" text-anchor="middle" >ブラウザ</text>
  <rect x="400" y="70" width="300" height="220" rx="8" fill="var(--paper)" stroke="var(--line)" stroke-dasharray="8 6"/>
  <text x="550" y="115" fill="var(--ink)" text-anchor="middle" >境界</text>
  <rect x="437.5" y="148" width="225" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="550" y="191" fill="var(--ink)" text-anchor="middle" >認証ゲートウェイ</text>
  <rect x="745" y="70" width="300" height="220" rx="8" fill="var(--paper)" stroke="var(--line)" stroke-dasharray="8 6"/>
  <text x="895" y="115" fill="var(--ink)" text-anchor="middle" >内部側</text>
  <rect x="782.5" y="148" width="225" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="895" y="191" fill="var(--ink)" text-anchor="middle" >申請API</text>
  <path d="M318 183L437 183" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#e16-arrow)" />
  <path d="M663 183L782 183" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#e16-arrow)" />
</svg>
</div>
