---
marp: true
theme: dark-tech
size: 16:9
lang: ja
---

## 一人の利用者は複数の申請を持てる

<div class="figure">
<svg class="diagram" viewBox="0 0 1100 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="users と requests の一対多の関係" font-size="24">
  <g fill="var(--surface)" stroke="var(--line)" stroke-width="2">
    <rect x="42" y="66" width="352" height="166" rx="12"/>
    <rect x="706" y="66" width="352" height="166" rx="12"/>
  </g>
  <g fill="none" stroke="var(--accent)" stroke-width="3">
    <path d="M394 149H706M421 135v28M437 135v28M687 130l19 19-19 19"/>
    <circle cx="667" cy="149" r="9" fill="var(--paper)"/>
  </g>
  <g fill="var(--ink)">
    <text x="70" y="107" font-weight="700">users</text>
    <text x="70" y="159">id  PK</text>
    <text x="70" y="196">name</text>
    <text x="734" y="107" font-weight="700">requests</text>
    <text x="734" y="159">id  PK</text>
    <text x="734" y="196">user_id  FK</text>
    <text x="416" y="124">1</text>
    <text x="654" y="124">0..n</text>
  </g>
</svg>
</div>
