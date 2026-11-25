---
marp: true
theme: friendly
size: 16:9
lang: ja
---

## 分解学習

<div class="figure">
<svg class="diagram" viewBox="0 0 1100 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="分解学習" font-size="24">
  <defs>
  <marker id="k12-arrow" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
  <path d="M0 0L8 4L0 8z" fill="var(--accent)"/>
  </marker>
  </defs>
  <rect x="425" y="35" width="250" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="550" y="78" fill="var(--ink)" text-anchor="middle" >キャッシュ</text>
  <path d="M550 105L240 205" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#k12-arrow)" />
  <rect x="132.5" y="205" width="215" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="240" y="234" fill="var(--ink)" text-anchor="middle" >キー</text>
  <text x="240" y="260" fill="var(--ink)" text-anchor="middle" font-size="18">対象を識別</text>
  <path d="M550 105L550 205" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#k12-arrow)" />
  <rect x="442.5" y="205" width="215" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="550" y="234" fill="var(--ink)" text-anchor="middle" >値</text>
  <text x="550" y="260" fill="var(--ink)" text-anchor="middle" font-size="18">結果を保持</text>
  <path d="M550 105L860 205" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#k12-arrow)" />
  <rect x="752.5" y="205" width="215" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="860" y="234" fill="var(--ink)" text-anchor="middle" >TTL</text>
  <text x="860" y="260" fill="var(--ink)" text-anchor="middle" font-size="18">保管期間</text>
</svg>
</div>
