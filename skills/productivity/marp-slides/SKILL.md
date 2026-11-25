---
name: marp-slides
description: Use when the user asks for a Marp slide deck or a branded presentation in Markdown. Confirm the purpose, audience, deck preset, brand, and display mode before generating and checking slides.
---

# Marp スライド作成

確認済みの目的とブランドに沿って、編集可能な Marp Markdown と指定形式のスライドを作る。コマンド中の `$SKILL` はこの SKILL.md があるディレクトリの絶対パスとする。

1. **本文作成前に**、[作成前の確認](references/briefing.md) に従い、目的と読者、用途別プリセット、ブランド、ライト／ダーク、標準／高コントラストを確認する。依頼で埋まっていない項目は推奨案を添えてまとめて聞き、回答を待つ。発表・配布、枚数、言語、形式は指定を反映する。
2. [目的・テーマの選択表](references/selection.md) で目的を1つ選び、用途別プリセットのページの流れと組み合わせる。「コンサル風の技術解説」なら `technical-explainer` と `technical-brief` が候補。ブランド選択時の既定テーマは `modern`。明示されたテーマ・レイアウトを優先する。
3. [デザインルール](references/design-rules.md) に従い、ページごとにメッセージ、根拠、主役となる図・数値・見出しを決める。[レイアウト一覧](references/layouts/index.md) から必要なIDを選び、`layout.yaml` と `slide.md` を今回の内容に合わせる。カードには `accent-card` を使い、役割を分けるときは補助色の `secondary` とラベルを組み合わせる。表紙、図、比較、確認事項で余白と情報の密度を変える。
4. Node.js 22.18 以降を使い、依存が入っていなければ `npm ci --prefix "$SKILL"` を実行する。[設定例](examples/branded/presentation.yaml) を基に `presentation.yaml` を保存し、`resolve.ts --frontmatter` の出力を `deck.md` の先頭に置く。必要に応じて `assets/`、`diagrams/` を作る。[カードの作例](examples/branded/deck.md) と [図表の作り方](references/renderers.md) を参照する。数値と事実は根拠を確認し、不明な内容を明示する。
5. PDF・PNG・PPTX 出力と検証には Chrome または Chromium を使う。標準の場所にない場合は `CHROME_PATH` に実行ファイルのパスを指定する。ユーザーが提供した既存ファイルは素材として読み、HTML とローカル素材へのアクセスを有効にするコマンドには確認済みの自作デッキを渡す。

   ```sh
   node "$SKILL/scripts/resolve.ts" ./presentation.yaml
   node "$SKILL/scripts/resolve.ts" ./presentation.yaml --frontmatter
   node "$SKILL/scripts/render.ts" ./deck.md --format pdf,png
   node "$SKILL/scripts/validate.ts" ./deck.md --config ./presentation.yaml
   ```

   対応する出力は `html,pdf,png,pptx`。既定は PDF と全ページの PNG。PPTX 指定時は通常の Marp 出力が画像ベースであることを伝える。HTML を共有する際は参照するローカル素材も一緒に渡す。
6. [品質チェックリスト](references/quality-checklist.md) で全ページの PNG を確認する。はみ出しを直し、再レンダリングしてから、Markdown・素材・指定形式の出力パスを渡す。レンダリングや検証ができなかった場合は確認できた範囲を伝える。
