---
marp: true
theme: modern
size: 16:9
lang: ja
paginate: true
title: API の同時再送を一度の処理にまとめる
---

<!-- _class: hero -->
<!-- _paginate: false -->

# API の同時再送を<br>一度の処理にまとめる

タイムアウト後の再送を安全に扱う設計例

---

## 同じ操作の再送には同じキーを使う

<div class="grid two">
  <article class="card">
    <h3>仕組み</h3>
    <p>クライアントが操作にキーを付ける。サーバーはキーと処理結果を保存する。</p>
  </article>
  <article class="card">
    <h3>申請 API の例</h3>
    <p>応答が届かず再送しても、保存済みの申請番号を返せる。</p>
  </article>
</div>

---

## 再送時は保存済みの結果を返す

<div class="figure">
  <img src="./assets/retry-flow.svg" alt="クライアントの初回リクエストを API がデータベースへ保存し、同じキーでの再送には保存済みの番号を返す">
</div>

---

## キーの取得と保存には一意性を持たせる

<div class="grid split">
  <div>
    <pre><code>UNIQUE (account_id, operation_key)</code></pre>
  </div>
  <article class="card">
    <h3>同時再送</h3>
    <p>同じキーを二つの処理が同時に取得できないようにする。完了済みなら結果を返し、処理中なら再試行を案内する。</p>
  </article>
</div>

---

## 次の API 設計で確認すること

<div class="grid three">
  <article class="card"><h3>キーの範囲</h3><p>アカウントと操作の組で一意にする。</p></article>
  <article class="card"><h3>内容の一致</h3><p>本文が異なるキーの再利用はエラーにする。</p></article>
  <article class="card"><h3>保持期間</h3><p>クライアントの再試行期間に合わせて決める。</p></article>
</div>
