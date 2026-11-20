# 設定ファイルと保存先の解決

## 設定ファイル

`~/.config/know/config.json`。なければ「保存先を聞く」で決めた内容から作る。

```json
{
  "default": "work",
  "destinations": {
    "work": {
      "type": "github",
      "repo": "owner/team-knowledge",
      "dir": "knowledge"
    },
    "private": {
      "type": "gitlab",
      "repo": "https://gitlab.example.com/group/notes.git"
    },
    "memo": {
      "type": "local",
      "path": "~/notes"
    }
  },
  "defaultOutput": "blog",
  "outputs": {
    "blog": {
      "type": "github",
      "repo": "owner/blog",
      "dir": "content/posts",
      "note": "frontmatter は既存記事に合わせる"
    }
  }
}
```

| キー | 内容 |
| --- | --- |
| `default` | ナレッジの保存先を指定しなかったときに使う `destinations` の名前 |
| `destinations` | ナレッジの保存先。名前をキーにする |
| `defaultOutput` | 記事の出力先を指定しなかったときに使う `outputs` の名前 |
| `outputs` | 記事の出力先。名前をキーにする。形式は `destinations` と同じ |
| `type` | `github` / `gitlab` / `local` |
| `repo` | リポジトリ。`owner/repo` (GitHub のみ) か clone できる URL |
| `path` | ローカルの作業ディレクトリ (`type` が `local` のとき)。`~` は展開する |
| `dir` | ファイルを置くディレクトリ。`destinations` は省略時 `knowledge`、`outputs` は省略時に聞く |
| `note` | 出力先ごとのメモ (記事の形式の指定など)。任意 |

URL のホストが `github.com` なら GitHub、`gitlab` を含めば GitLab と判断する。判断できなければ聞く。

## 保存先を聞く

設定がなくて保存先が決まらないときの手順。

1. **手がかりを集める** (読み取りだけ)。
   - 現在のディレクトリに `knowledge/` があるか。
   - 現在のディレクトリが git リポジトリなら、`git remote get-url origin`。
   - 設定ファイルに他の登録先が残っているか。
2. **選択式で聞く**。`AskUserQuestion` が使えるハーネスでは、それを使う。選択肢には、手がかりから見つけた場所を先頭に置き、あとに「GitHub リポジトリ」「GitLab リポジトリ」「ローカルディレクトリ」を並べる。自由入力 (Other) で `owner/repo`、URL、パスを受ける。
3. **足りない項目だけ聞く**。ナレッジなら `dir` は聞かず `knowledge` にする。出力先なら、記事を置くディレクトリ (例 `content/posts`) は必ず聞く。
4. **名前を付ける**。ユーザーが言わなければ、リポジトリ名またはディレクトリ名から作る (例 `team-knowledge`)。ナレッジは `destinations`、出力先は `outputs` に入れる。
5. 登録は、検証が通ってから行う。

## 検証

登録する前に、次を確かめる。失敗したら、原因と取れる手をユーザーに伝えて、登録せずに止まる。

- **ローカル**: ディレクトリが存在するか (`test -d`)。なければ作ってよいかを聞く。
- **リポジトリ**:
  - 到達できるか: `git ls-remote --exit-code <URL> HEAD`。GitHub の `owner/repo` は `gh repo view owner/repo --json visibility,defaultBranchRef`。
  - 公開範囲: GitHub は上の `visibility`。GitLab は `glab repo view <repo>` で確かめ、分からなければ「不明」とする。
  - PR / MR を作る CLI: GitHub は `command -v gh` と `gh auth status`、GitLab は `command -v glab` と `glab auth status`。なくても登録はできるが、PR / MR を自動で作れないので、そのことをユーザーに伝える。
- 出力先は、書き込み権限がありそうかも確かめる (GitHub は `gh repo view` の `viewerPermission`)。

## 設定ファイルへの保存

1. `~/.config/know/` がなければ作る。
2. 既存の `config.json` があれば先に読み、他の登録先を保ったまま、新しい登録先を足す。
3. 新しく決めた登録先を、`default` (ナレッジ) または `defaultOutput` (出力先) にする。すでに別の既定があるときは、置き換えてよいかを聞く。
4. 妥当な JSON になっているかを、書いたあとに読み戻して確かめる。
5. 何を登録したかを、ユーザーに一行で伝える。

## 作業コピー

### ローカル

`path` をそのまま使う。ナレッジは `<path>/<dir>/` を見る。なければ、書き込みのときに作る。

### リポジトリ (読み取り用の clone)

`~/.cache/know/<登録先名>` を、読み取り用に使う。登録先名のない場合は `<ホスト>-<owner>-<repo>`。

```bash
CACHE="${XDG_CACHE_HOME:-$HOME/.cache}/know/<名前>"
# なければ clone する
git clone --depth 1 <URL> "$CACHE"            # GitHub は gh repo clone <owner/repo> "$CACHE" -- --depth 1
# あれば最新にする
BASE=$(git -C "$CACHE" symbolic-ref --short refs/remotes/origin/HEAD | sed 's|^origin/||')
git -C "$CACHE" fetch -q --depth 1 origin "$BASE"
git -C "$CACHE" checkout -q --detach "origin/$BASE"
```

- 検索のたびに `fetch` して最新にする。ネットワークに届かないときは、手元のコピーをそのまま使い、「最後に取得した時点の内容」と伝える。
- この clone は読み取り専用。ここでコミットしない。壊れていたら (checkout できないなど)、ディレクトリごと消して clone し直してよい。作るのはこのスキルだけなので、失われるものはない。
- clone に失敗したら、認証かアクセス権の問題が多い。ユーザーに `gh auth status` / `glab auth status` の確認を頼む。
