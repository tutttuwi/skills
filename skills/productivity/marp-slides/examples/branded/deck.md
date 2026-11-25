---
marp: true
theme: modern
size: 16:9
lang: ja
paginate: true
style: |
  section {
    --paper: #f5f8ff;
    --surface: #ffffff;
    --ink: #14213a;
    --muted: #14213a;
    --accent: #112b73;
    --brand-secondary: #6d270e;
    --brand-accent-surface: #e9f0ff;
    --line: #cad5ea;
  }
  section {
    background: var(--paper);
    color: var(--ink);
    padding: 52px 60px;
  }
  section.hero { background: var(--paper); }
  section.brand-cover {
    justify-content: center;
    background: var(--brand-accent-surface);
  }
  section.brand-cover h1 {
    max-width: 1080px;
    font-size: 64px;
    line-height: 1.12;
  }
  section.brand-cover p { max-width: 960px; }
  section.brand-cover[data-size="4:3"] h1 { font-size: 54px; }
  section.brand-cover .label, section .accent-card .label { margin-bottom: 12px; }
  section::after { color: var(--muted); }
  section pre, section code { background: var(--surface); color: var(--ink); }
  section .accent-card {
    padding: 24px 27px;
    border-inline-start: 5px solid var(--accent);
    background: var(--surface);
  }
  section .accent-card.secondary { border-inline-start-color: var(--brand-secondary); }
  section .accent-card.secondary .label { color: var(--brand-secondary); }
  section .brand-focus {
    padding: 18px 22px;
    border-inline-start: 5px solid var(--accent);
    border-radius: var(--radius);
    background: var(--brand-accent-surface);
    color: var(--ink);
  }
  section .brand-kpi {
    color: var(--accent);
    font-size: 62px;
    line-height: 1.05;
    font-variant-numeric: tabular-nums;
    margin: 0 0 12px;
  }
  section table tr, section table td { background: var(--paper); color: var(--ink); }
  section table th { background: var(--surface); color: var(--ink); }
---

<!-- _class: "brand-cover" -->

<p class="label">技術解説 · API設計</p>

# 二重処理を防げるなら、<br>失敗したリクエストを再送できる

一時的な通信障害に備え、再試行の条件と冪等キーの扱いを決める。

---

## クライアントとAPIで、再試行の役割を分ける

<div class="grid two">
  <article class="card accent-card">
    <p class="label">送り直す側</p>
    <h3>同じ操作に同じキーを使う</h3>
    <p>注文を再送するときは、最初のリクエストと同じキーと注文内容を送る。</p>
  </article>
  <article class="card accent-card secondary">
    <p class="label">受け取る側</p>
    <h3>注文を一度だけ作る</h3>
    <p>処理済みのキーを受け取ったら、保存済みの注文番号を返す。</p>
  </article>
</div>

<p class="brand-focus note">再試行しても、読者が確認すべき結果は「注文が1件に保たれること」。</p>

---

## 応答が消えた場合をテストする

<div class="grid split align-middle">
  <div>
    <p class="brand-kpi">1件</p>
    <p>再試行後に残る注文</p>
  </div>
  <ol class="rank">
    <li>サーバーで注文を保存する。</li>
    <li>クライアントに届く直前の応答を落とす。</li>
    <li>同じキーで再試行し、DBの件数と返る注文番号を照合する。</li>
  </ol>
</div>
