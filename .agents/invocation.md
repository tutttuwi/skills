# モデル呼び出しとユーザー呼び出し

このリポジトリの `SKILL.md` は、**誰が起動できるか** で二種類に分かれる。

- **ユーザー呼び出し専用**: 人間が名前を打ったときだけ動く。
  - frontmatter に `disable-model-invocation: true` (Claude Code)。
  - `agents/openai.yaml` に `policy.allow_implicit_invocation: false` (Codex)。
  - `description` は **人間向け** の一行要約にする。「Use when...」のトリガー列挙は書かない。
- **モデル呼び出し可** (デフォルト): モデルもユーザーも起動できる。
  - 上の二つは書かない。
  - `description` は **モデル向け**。自動起動されるよう「Use when the user wants..., mentions...」と具体的に書く。
  - 判断基準: 「モデルが自分の判断で使って役に立つか?」

`SKILL.md` と `agents/openai.yaml` は必ず同期させる。スキルは両方のハーネスでユーザー専用か、両方でそうでないかのどちらか。

## スキル同士の依存

- 別スキルを使う手順は、`../other-skill/FILE.md` のような相対参照ではなく、**Skill ツールを呼ぶ** と明記する (例: `Skill ツールで "grilling" を呼ぶ`)。
- Skill ツールは一回に一スキル。二つ必要なら二回呼ぶと書く。
- この呼び方が成り立つのは相手が **モデル呼び出し可** の場合だけ。ユーザー呼び出し専用スキルは他のスキルから呼べないので、「ユーザーに `/name` の実行を促す」と書く。
- 共有する参考資料は、それを所有するスキルのディレクトリ内に置く。
