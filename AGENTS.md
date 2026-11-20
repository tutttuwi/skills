# 個人用スキル管理リポジトリ

自分専用のエージェントスキル集。 [mattpocock/skills](https://github.com/mattpocock/skills) の構成を参考にしている。

## 構成

スキルは `skills/` 配下のバケットに分ける。

- `engineering/`: 日常のコード作業
- `productivity/`: コード以外の日常ワークフロー
- `misc/`: 残してあるがほとんど使わない
- `in-progress/`: 試作中
- `deprecated/`: 使わなくなった

```text
skills/<bucket>/<skill-name>/
├── SKILL.md              # 必須。frontmatter に name と description
├── agents/openai.yaml    # Codex 用 UI メタデータ (SKILL.md と同期)
└── *.md / scripts/       # 補助資料 (任意)
```

## ルール

- 新規スキルは `templates/skill/` をコピーして始める。
- frontmatter の `name` はディレクトリ名と一致させる。`npm run check` で検証する。
- 起動方式 (モデル呼び出し / ユーザー呼び出し専用) は [.agents/invocation.md](./.agents/invocation.md) に従い、`SKILL.md` と `agents/openai.yaml` を必ず揃える。
- 各バケットの `README.md` に、そのバケットの全スキルを一行説明つきで載せ、スキル名から `SKILL.md` へリンクする。`engineering/` と `productivity/` は **User-invoked** と **Model-invoked** に分けて書く。
- 最上位 `README.md` のスキル一覧も、スキルを追加・改名・削除したら更新する。
- サブエージェントを起動するスキルは、「新しいコンテキストウィンドウで起動する」と明記する (ハーネスによっては親の会話をフォークしてしまうため)。

## ローカルへの反映

`scripts/link-skills.sh` (または `npm run link`) で、`deprecated/` と `misc/` 以外の全スキルをシンボリックリンクする。`git pull` で最新になる。スキルを追加・削除・改名したら再実行する。同名の実体ディレクトリがある場合は削除せずスキップする。

対応ツールとリンク先 (既定は `claude` + `agents`):

| target | リンク先 | 読むツール |
| --- | --- | --- |
| `claude` | `~/.claude/skills` | Claude Code |
| `agents` | `~/.agents/skills` | Codex, Cursor, OpenCode ほか Agent Skills 互換ツール |
| `cursor` | `~/.cursor/skills` | Cursor (`agents` と併用すると重複する可能性あり) |
| `codex` | `~/.codex/skills` | Codex 旧ディレクトリ (非推奨) |
| `opencode` | `~/.config/opencode/skills` | OpenCode (`claude` / `agents` も読むので通常は不要) |

`--dry-run` で実行内容だけ確認できる。`SKILL.md` は全ツール共通の形式なので、スキルは一つだけ書けばよい。`agents/openai.yaml` は Codex 専用で、他のツールは無視する。
