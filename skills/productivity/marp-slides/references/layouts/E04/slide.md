---
marp: true
theme: dark-tech
size: 16:9
lang: ja
---

## 申請 API を入出力・判断・保存に分ける

<div class="card featured">
  <p class="label">APIサービスの内部</p>
  <div class="grid three">
    <article class="card muted"><h3>受付ハンドラ</h3><p>→ 入力を検証して処理を開始</p></article>
    <article class="card muted"><h3>申請ユースケース</h3><p>→ 条件を判定し保存を依頼</p></article>
    <article class="card muted"><h3>リポジトリ</h3><p>DB に書き込む</p></article>
  </div>
</div>
