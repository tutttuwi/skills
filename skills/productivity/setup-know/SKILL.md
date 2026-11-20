---
name: setup-know
description: "Use when put-know, get-know or output-from-know needs to know where knowledge or articles are stored, when the user wants to set or change the storage location, or when file changes in a repository must be published as a PR/MR. Resolves the destination from ~/.config/know/config.json, asks the user and registers it when missing, prepares a local working copy, and creates the branch, push and PR/MR."
---

# Setup Know

ナレッジ系スキル (`put-know` / `get-know` / `output-from-know`) の共通基盤。次の三つを受け持つ。

- 保存先 (ナレッジの置き場、記事の出力先) を決め、未設定なら聞いて設定ファイルに登録する。
- リポジトリの作業用コピーを用意する。
- リポジトリへの変更を、ブランチ、push、PR / MR で公開する。

設定ファイルの形式と保存先の解決規則は [CONFIG.md](./CONFIG.md)、公開の手順は [PUBLISH.md](./PUBLISH.md)。

他のスキルから呼ばれたときは、呼び出し元の用途に合う節だけを実行して、結果を会話に残して呼び出し元の手順へ戻る。ユーザーが直接 `/setup-know` と呼んだときは、現在の設定を表示し、変更したい点を聞く。

## A. 保存先を解決する

用途は二種類。呼び出し元が「ナレッジ」か「出力先」かを伝える。

1. **指定を確認する**: 呼び出し元の引数や会話に、登録先の指定 (登録先名、`owner/repo`、URL、ローカルパス) があれば、それを使う。出力先は `owner/repo:ディレクトリ` (例 `me/blog:content/posts`) の書式でも指定できる。コロンより後ろがディレクトリ。
2. **設定ファイルを読む**: `~/.config/know/config.json` を読む。ナレッジなら `default`、出力先なら `defaultOutput` を使う。
3. **決まらなければ聞く**: 設定ファイルがない、または既定の登録先がないときは、ユーザーに保存先を聞く。聞き方と、手がかりからの候補提示は [CONFIG.md](./CONFIG.md) の「保存先を聞く」に従う。
4. **検証する**: 到達できるか、必要な CLI が使えるかを確かめる ([CONFIG.md](./CONFIG.md) の「検証」)。
5. **設定ファイルに登録する**: 聞いて決めた保存先は、設定ファイルがなければ作り、あれば他の内容を保ったまま追記して、既定にする。登録したことはユーザーに伝える。
6. **作業コピーを用意する**: ローカルならそのパス、リポジトリなら `~/.cache/know/<登録先名>` にある読み取り用の clone を最新にする ([CONFIG.md](./CONFIG.md) の「作業コピー」)。
7. **結果を伝える**: 呼び出し元が使えるよう、次の項目を会話に書き出す。

   ```text
   登録先: <名前> (<type>)
   場所: <owner/repo または パス>   公開範囲: <public / private / ローカル>
   ベースブランチ: <main など>    ディレクトリ: <knowledge など>
   作業コピー: <ローカルのパス>/<ディレクトリ>
   ```

ユーザーの指定がその場限りなら、設定ファイルは書き換えない。登録を頼まれたときだけ登録する。

## B. 変更を PR / MR で公開する

リポジトリへのファイル追加を、ブランチ、コミット、push、PR / MR にまとめて公開する。呼び出し元が、対象リポジトリ、追加するファイル、PR / MR のタイトルと本文を渡す。手順は [PUBLISH.md](./PUBLISH.md)。

ユーザーの承認は呼び出し元が取っておく。承認がまだなら、この節を実行しない。

## 守ること

- 設定ファイルへ書くのは、保存先の名前、場所、ディレクトリ名だけ。トークンやパスワードは書かない。
- 認証が通らないときは、資格情報を探し回らず、ユーザーにログインを頼む (`! gh auth login` など)。
- 読み取り用の clone (`~/.cache/know/`) には、コミットしない。変更は [PUBLISH.md](./PUBLISH.md) の作業用 worktree で行う。
