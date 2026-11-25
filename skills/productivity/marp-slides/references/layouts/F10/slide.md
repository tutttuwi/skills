---
marp: true
theme: dark-tech
size: 16:9
lang: ja
---

## シーケンス

<div class="figure">
<svg class="diagram" viewBox="0 0 1100 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="参加者間のメッセージの順序" font-size="24">
  <defs>
  <marker id="f10-arrow" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
  <path d="M0 0L8 4L0 8z" fill="var(--accent)"/>
  </marker>
  </defs>
  <rect x="55" y="11" width="210" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="160" y="54" fill="var(--ink)" text-anchor="middle" >画面</text>
  <path d="M160 81L160 366" stroke="var(--accent)" stroke-width="3" fill="none"  opacity=".45" stroke-dasharray="6 7"/>
  <rect x="445" y="11" width="210" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="550" y="54" fill="var(--ink)" text-anchor="middle" >API</text>
  <path d="M550 81L550 366" stroke="var(--accent)" stroke-width="3" fill="none"  opacity=".45" stroke-dasharray="6 7"/>
  <rect x="835" y="11" width="210" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="940" y="54" fill="var(--ink)" text-anchor="middle" >DB</text>
  <path d="M940 81L940 366" stroke="var(--accent)" stroke-width="3" fill="none"  opacity=".45" stroke-dasharray="6 7"/>
  <path d="M160 120L550 120" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#f10-arrow)" />
  <text x="355" y="108" fill="var(--ink)" text-anchor="middle" font-size="20">POST /requests</text>
  <path d="M550 193L940 193" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#f10-arrow)" />
  <text x="745" y="181" fill="var(--ink)" text-anchor="middle" font-size="20">INSERT</text>
  <path d="M940 266L550 266" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#f10-arrow)" stroke-dasharray="7 5"/>
  <text x="745" y="254" fill="var(--ink)" text-anchor="middle" font-size="20">保存済み</text>
  <path d="M550 339L160 339" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#f10-arrow)" stroke-dasharray="7 5"/>
  <text x="355" y="327" fill="var(--ink)" text-anchor="middle" font-size="20">201 Created</text>
</svg>
</div>
