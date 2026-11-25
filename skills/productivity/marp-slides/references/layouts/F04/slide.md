---
marp: true
theme: dark-tech
size: 16:9
lang: ja
---

## 条件分岐フロー

<div class="figure">
<svg class="diagram" viewBox="0 0 1100 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="判定条件で処理経路を分ける" font-size="24">
  <defs>
  <marker id="f04-arrow" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
  <path d="M0 0L8 4L0 8z" fill="var(--accent)"/>
  </marker>
  </defs>
  <path d="M215 190L370 190" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#f04-arrow)" />
  <path d="M650 190L880 95" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#f04-arrow)" />
  <path d="M650 190L880 285" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#f04-arrow)" />
  <polygon points="510,120 650,190 510,260 370,190" fill="var(--surface)" stroke="var(--accent)" stroke-width="3"/>
  <text x="510" y="198" fill="var(--ink)" text-anchor="middle" >条件を満たす？</text>
  <rect x="25" y="155" width="190" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="120" y="198" fill="var(--ink)" text-anchor="middle" >入力確認</text>
  <rect x="880" y="60" width="200" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="980" y="103" fill="var(--ink)" text-anchor="middle" >登録</text>
  <rect x="880" y="250" width="200" height="70" rx="8" fill="var(--surface)" stroke="var(--line)" />
  <text x="980" y="293" fill="var(--ink)" text-anchor="middle" >修正案内</text>
  <text x="765" y="125" fill="var(--ink)" text-anchor="middle" font-size="18">はい</text>
  <text x="765" y="275" fill="var(--ink)" text-anchor="middle" font-size="18">いいえ</text>
</svg>
</div>
