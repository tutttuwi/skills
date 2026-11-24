# 変更を PR / MR で公開する

呼び出し元から、次を受け取る。

- 対象リポジトリの読み取り用 clone (`~/.cache/know/<名前>`) と、ベースブランチ
- 追加するファイル (リポジトリ内の相対パスと内容)
- コミットメッセージ、PR / MR のタイトルと本文

ユーザーの承認を得てから実行する。

## 1. 作業用 worktree を作る

読み取り用 clone を汚さないよう、作業用の worktree を別に作る。

```bash
CACHE="${XDG_CACHE_HOME:-$HOME/.cache}/know/<名前>"
BR="<ブランチ名>"
WT="${TMPDIR:-/tmp}/know-publish/<名前>-$(date +%s)"
git -C "$CACHE" fetch -q --depth 1 origin <ベース>
git -C "$CACHE" worktree add -q -b "$BR" "$WT" "origin/<ベース>"
```

- ブランチ名は、ナレッジなら `knowledge/yyyy-mm-dd-<スラグ>`、記事なら `article/yyyy-mm-dd-<スラグ>`。スラグは英数字とハイフンにする。日本語の概要は短い英語に言い換える。
- 同名のブランチがリモートにあれば、上書きせずスラグに `-2` を付ける。

## 2. ファイルを置いてコミットする

```bash
# $WT/<パス> にファイルを書く
git -C "$WT" add <パス>
git -C "$WT" commit -m "<種別>: <概要>"
```

- `git add` は対象のファイルだけを指定する。`git add -A` は使わない。
- コミットメッセージの種別は `docs`。ハーネスから添付すべき attribution の指示があれば、それに従う。
- 既存のファイルを変更するのは、呼び出し元がユーザーの承認を得ているときだけ。

## 3. push する

```bash
git -C "$WT" push -u origin "$BR"
```

デフォルトブランチへの直接 push、force push はしない。

## 4. PR / MR を作る

本文には、何を追加したか、元にしたナレッジ (記事の場合)、レビューしてほしい点を書く。会話の生ログは載せない。本文はファイルに書いて渡す。

**GitHub**

```bash
gh pr create --repo <owner/repo> --base <ベース> --head "$BR" \
  --title "<種別>: <概要>" --body-file <本文ファイル>
```

**GitLab**

```bash
glab mr create --source-branch "$BR" --target-branch <ベース> \
  --title "<種別>: <概要>" --description "$(cat <本文ファイル>)" --yes
```

CLI が入っていない、またはログインしていない場合:

- push までは済んでいるので、そこまでを報告する。
- GitHub は push の出力にある `https://github.com/<owner>/<repo>/pull/new/<ブランチ>`、GitLab は push 時に表示される MR 作成 URL を案内する。
- GitLab は、最初の push に `-o merge_request.create -o merge_request.target=<ベース> -o merge_request.title="..."` を付けると、CLI なしで MR を作れる。ただし push 後に気づいた場合はやり直さず、URL を案内する。

## 5. 後始末

PR / MR を作れたら、worktree とローカルのブランチを消す。リモートにブランチが残っているので、失うものはない。

```bash
git -C "$CACHE" worktree remove "$WT"
git -C "$CACHE" branch -D "$BR"
```

PR / MR の作成までに失敗したときは、再試行できるよう worktree を残し、その場所を報告する。

PR / MR の URL を、呼び出し元に返す。
