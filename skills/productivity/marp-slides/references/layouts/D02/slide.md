---
marp: true
theme: scientific
size: 16:9
lang: ja
---

<!-- _class: "dense" -->

## ダッシュボード

<div class="grid three">
  <article class="card"><h3>申請</h3><p>42件</p></article>
  <article class="card"><h3>完了</h3><p>36件</p></article>
  <article class="card"><h3>要確認</h3><p>6件</p></article>
</div><div class="figure">
<svg class="diagram" viewBox="0 0 1100 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="週別の受付推移と対応状況" font-size="24">
  <rect x="20" y="12" width="515" height="230" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="267" y="49" fill="var(--ink)" text-anchor="middle" >週別の受付（件）</text>
  <polyline points="73,190 194,137 310,160 455,93" fill="none" stroke="var(--accent)" stroke-width="4" />
  <circle cx="73" cy="190" r="5" fill="var(--accent)" stroke="var(--accent)" />
  <text x="73" y="223" fill="var(--ink)" text-anchor="middle" font-size="18">第1週</text>
  <text x="73" y="176" fill="var(--ink)" text-anchor="middle" font-size="18">8</text>
  <circle cx="194" cy="137" r="5" fill="var(--accent)" stroke="var(--accent)" />
  <text x="194" y="223" fill="var(--ink)" text-anchor="middle" font-size="18">第2週</text>
  <text x="194" y="123" fill="var(--ink)" text-anchor="middle" font-size="18">11</text>
  <circle cx="310" cy="160" r="5" fill="var(--accent)" stroke="var(--accent)" />
  <text x="310" y="223" fill="var(--ink)" text-anchor="middle" font-size="18">第3週</text>
  <text x="310" y="146" fill="var(--ink)" text-anchor="middle" font-size="18">9</text>
  <circle cx="455" cy="93" r="5" fill="var(--accent)" stroke="var(--accent)" />
  <text x="455" y="223" fill="var(--ink)" text-anchor="middle" font-size="18">第4週</text>
  <text x="455" y="79" fill="var(--ink)" text-anchor="middle" font-size="18">14</text>
  <rect x="565" y="12" width="515" height="230" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="822" y="49" fill="var(--ink)" text-anchor="middle" >対応状況（件）</text>
  <rect x="625" y="85" width="340" height="39" rx="8" fill="var(--accent)" stroke="var(--line)" />
  <text x="1004" y="112" fill="var(--ink)" text-anchor="middle" >36</text>
  <text x="780" y="113" text-anchor="middle" fill="white">完了</text>
  <rect x="625" y="155" width="57" height="39" rx="8" fill="var(--line)" stroke="var(--line)" />
  <text x="727" y="183" fill="var(--ink)" text-anchor="middle" text-anchor="start">6 要確認</text>
</svg>
</div><p class="source note">例示用データ（架空）</p>
