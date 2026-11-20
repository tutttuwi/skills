# 登録先ごとの手順

## 設定ファイル (任意)

`~/.config/knowledge-capture/config.json` に登録先を名前つきで保存できる。なければ作らなくてよい。ユーザーが保存を望んだときだけ書く。

```json
{
  "default": "work",
  "destinations": {
    "work": {
      "type": "github",
      "repo": "owner/team-knowledge"
    },
    "private": {
      "type": "gitlab",
      "repo": "https://gitlab.example.com/group/notes.git",
      "dir": "knowledge"
    },
    "memo": {
      "type": "local",
      "path": "~/notes"
    }
  }
}
```

| キー | 内容 |
| --- | --- |
| `type` | `github` / `gitlab` / `local` |
| `repo` | リポジトリ。`owner/repo` (GitHub のみ) か clone できる URL |
| `path` | ローカルの作業ディレクトリ (`type` が `local` のとき) |
| `dir` | ナレッジを置くディレクトリ名。省略時は `knowledge` |
| `default` | 登録先を指定しなかったときに使う名前 |

ユーザーが `owner/repo` や URL を直接渡したときは、その場の指定として扱い、設定ファイルは変更しない (保存を頼まれたときを除く)。URL のホストが `github.com` なら GitHub、`gitlab` を含むなら GitLab と判断する。判断できなければ聞く。

## ローカルディレクトリ

1. パスの `~` を展開し、ディレクトリが存在することを確かめる。なければ作る前にユーザーに確認する。
2. `<path>/knowledge/` がなければ作る。
3. 承認されたドラフトを `<path>/knowledge/yyyy-mm-dd_<概要>.md` に書く。
4. git 管理下のディレクトリでも、コミットや push はしない。ユーザーに任せる。

## リポジトリ (GitHub / GitLab)

作業はユーザーの作業ツリーではなく、一時ディレクトリの clone で行う。手元の作業ツリーが未コミットの変更を抱えていても、巻き込まない。

### 取得

```bash
WORK="${TMPDIR:-/tmp}/knowledge-capture/<repo名>-$(date +%s)"
git clone --depth 1 <URL> "$WORK"
git -C "$WORK" symbolic-ref --short refs/remotes/origin/HEAD   # 例: origin/main
```

- GitHub の `owner/repo` は `gh repo clone owner/repo "$WORK" -- --depth 1`。
- 取得できたら、その `knowledge/` を [SKILL.md](./SKILL.md) の手順 3 で調べる。
- clone に失敗したら、認証かアクセス権の問題が多い。ユーザーに `gh auth status` / `glab auth status` の確認を頼む。

### ブランチ・コミット・push

ユーザーの承認 (手順 5) を得てから行う。

```bash
git -C "$WORK" switch -c knowledge/yyyy-mm-dd-<英数字のスラグ>
git -C "$WORK" add knowledge/yyyy-mm-dd_<概要>.md
git -C "$WORK" commit -m "docs: add knowledge - <概要>"
git -C "$WORK" push -u origin knowledge/yyyy-mm-dd-<英数字のスラグ>
```

- ブランチ名のスラグは英数字とハイフンにする。日本語の概要は短い英語に言い換える。
- `git add` はそのファイルだけを指定する。`git add -A` は使わない。
- コミットメッセージの種別は `docs`。ハーネスから添付すべき attribution の指示があれば、それに従う。
- 同名のブランチがリモートにあれば、上書きせずスラグに `-2` を付けて作り直す。

### PR / MR を作る

本文には、何を学んだかの要約と、関連づけた過去ナレッジ、レビューしてほしい点を書く。会話の生ログは載せない。

**GitHub**

```bash
gh pr create --repo <owner/repo> --base <デフォルトブランチ> \
  --head knowledge/yyyy-mm-dd-<スラグ> \
  --title "docs: add knowledge - <概要>" --body-file <本文ファイル>
```

**GitLab**

```bash
glab mr create --source-branch knowledge/yyyy-mm-dd-<スラグ> \
  --target-branch <デフォルトブランチ> \
  --title "docs: add knowledge - <概要>" --description "$(cat <本文ファイル>)" --yes
```

CLI が入っていない、またはログインしていない場合:

- push までは済んでいるので、そこまでを報告する。
- GitHub は push の出力にある `https://github.com/<owner>/<repo>/pull/new/<ブランチ>` を、GitLab は push 時に表示される MR 作成 URL を伝える。
- GitLab は、最初の push に `-o merge_request.create -o merge_request.target=<デフォルトブランチ> -o merge_request.title="..."` を付けると、CLI なしで MR を作れる。ただし push 後に気づいた場合はやり直さず、URL を案内する。

### 後始末

PR / MR を作ったら、一時 clone の場所を報告に含める。ユーザーが不要と言うまで削除しない。
