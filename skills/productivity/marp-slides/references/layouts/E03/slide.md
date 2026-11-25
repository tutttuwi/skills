---
marp: true
theme: dark-tech
size: 16:9
lang: ja
---

## API が申請の保存を担当する

<div class="card featured">
  <p class="label">経費システムの境界</p>
  <div class="grid three">
    <article class="card muted"><span class="label">アプリケーション</span><h3>Webアプリ</h3><p>→ HTTPS で申請</p></article>
    <article class="card muted"><span class="label">サービス</span><h3>APIサービス</h3><p>→ SQL で履歴を保存</p></article>
    <article class="card muted"><span class="label">データストア</span><h3>PostgreSQL</h3><p>申請と承認履歴</p></article>
  </div>
</div>
