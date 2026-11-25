---
marp: true
theme: dark-tech
size: 16:9
lang: ja
---

## スイムレーン

<div class="figure">
<svg class="diagram" viewBox="0 0 1100 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="担当ごとに処理を移す" font-size="24">
  <defs>
  <marker id="f09-arrow" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
  <path d="M0 0L8 4L0 8z" fill="var(--accent)"/>
  </marker>
  </defs>
  <rect x="20" y="15" width="1060" height="86" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="121" y="66" fill="var(--ink)" text-anchor="middle" >利用者</text>
  <rect x="285" y="23" width="210" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="390" y="66" fill="var(--ink)" text-anchor="middle" >申請を提出</text>
  <rect x="20" y="128" width="1060" height="86" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="121" y="179" fill="var(--ink)" text-anchor="middle" >受付担当</text>
  <rect x="535" y="136" width="210" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="640" y="179" fill="var(--ink)" text-anchor="middle" >内容を照合</text>
  <path d="M495 58L535 171" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#f09-arrow)" />
  <rect x="20" y="241" width="1060" height="86" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="121" y="292" fill="var(--ink)" text-anchor="middle" >承認者</text>
  <rect x="785" y="249" width="210" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="890" y="292" fill="var(--ink)" text-anchor="middle" >結果を確定</text>
  <path d="M745 171L785 284" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#f09-arrow)" />
</svg>
</div>
