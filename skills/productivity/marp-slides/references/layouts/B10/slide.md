---
marp: true
theme: corporate
size: 16:9
lang: ja
---

## 共有表への直接アクセスを API 経由に変える

<div class="grid two">
  <article class="card muted">
    <h3>旧構成</h3>
    <p class="chips"><span>Web画面</span> → <span>共有表</span></p>
    <p>画面から共有表を参照</p>
  </article>
  <article class="card featured">
    <h3>新構成</h3>
    <p class="chips"><span>Web画面</span> → <strong>API</strong> → <span>DB</span></p>
    <p>API が認証と検証を担当</p>
  </article>
</div>
