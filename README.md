# My Skills

自分専用のエージェントスキル集。[mattpocock/skills](https://github.com/mattpocock/skills) を参考に構成している。

## セットアップ

```bash
git clone https://github.com/tutttuwi/skills.git
cd skills
npm install
npm run link    # Claude Code / Codex / Cursor 向けにリンク
```

リンクなので、以後は `git pull` だけで更新される。スキルを追加・削除・改名したら `npm run link` を再実行する。

### 対応ツール

スキルは `SKILL.md` 一つを書けば、複数のエージェントツールで使える。

| target | リンク先 | 読むツール |
| --- | --- | --- |
| `claude` | `~/.claude/skills` | Claude Code |
| `agents` | `~/.agents/skills` | Codex, Cursor, OpenCode ほか |
| `cursor` | `~/.cursor/skills` | Cursor (通常は不要) |
| `codex` | `~/.codex/skills` | Codex 旧ディレクトリ (非推奨) |
| `opencode` | `~/.config/opencode/skills` | OpenCode (通常は不要) |

既定は `claude` と `agents` で、Claude Code / Codex / Cursor / OpenCode を賄える。Cursor と OpenCode は `~/.agents/skills` と `~/.claude/skills` の両方を読むため、`cursor` や `opencode` を追加する必要は通常ない。

```bash
npm run link -- --dry-run          # 何がリンクされるか確認
npm run link -- claude agents cursor   # target を指定
npm run link -- all                # 全 target
```

## 新しいスキルを作る

1. `templates/skill/` を `skills/<bucket>/<skill-name>/` にコピーする。
2. `SKILL.md` の `name` (ディレクトリ名と同じにする) と `description` を書く。
3. `agents/openai.yaml` を編集する。
4. バケットの `README.md` とこのファイルの一覧にスキルを追加する。
5. `npm run check` で frontmatter を検証し、`npm run link` で反映する。

起動方式の違いは [.agents/invocation.md](./.agents/invocation.md) を参照。

## バケット

| バケット | 用途 | リンク対象 |
| --- | --- | --- |
| [engineering](./skills/engineering/README.md) | 日常のコード作業 | する |
| [productivity](./skills/productivity/README.md) | コード以外の日常ワークフロー | する |
| [in-progress](./skills/in-progress/README.md) | 試作中 | する |
| [misc](./skills/misc/README.md) | ほとんど使わない | しない |
| [deprecated](./skills/deprecated/README.md) | 使わなくなった | しない |

## スキル一覧

### User-invoked

- [put-know](./skills/productivity/put-know/SKILL.md): 会話で得た学びをナレッジとして登録する (リポジトリは PR/MR、ローカルはファイル)
- [output-from-know](./skills/productivity/output-from-know/SKILL.md): ナレッジから記事を生成し、指定リポジトリのディレクトリへ PR/MR で出力する

### Model-invoked

- [get-know](./skills/productivity/get-know/SKILL.md): 貯めたナレッジを検索し、前にも同じ話があったかをすぐ答える
- [know-setup](./skills/productivity/know-setup/SKILL.md): ナレッジ系スキルの共通基盤 (保存先の設定、PR/MR での公開)

## スクリプト

| コマンド | 内容 |
| --- | --- |
| `npm run check` | 全 `SKILL.md` の frontmatter を検証 (CI でも実行) |
| `npm run list` | `SKILL.md` の一覧を表示 |
| `npm run link` | ローカルのスキルディレクトリへリンク |

## ライセンス

[MIT](./LICENSE)
