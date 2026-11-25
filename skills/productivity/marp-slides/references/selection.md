# 目的とテーマの選択

資料の目的を1つ選ぶ。テーマは既定を起点に、媒体・読み手・ユーザーの希望で変更する。内容の形式と見た目の指定が混ざっている場合は、資料で達成したいことを目的に割り当てる。

| 目的 | 資料 | 読者の目安 | 既定テーマ |
| --- | --- | --- | --- |
| [lightning-talk](purposes/lightning-talk.yaml) | LT・ライトニングトーク | 短時間で新しい話題に触れる聴衆 | bold |
| [tech-conference](purposes/tech-conference.yaml) | テックカンファレンス | 技術カンファレンスの参加者 | dark-tech |
| [keynote](purposes/keynote.yaml) | キーノート | 製品発表やコンセプト発表の聴衆 | minimal |
| [pitch-deck](purposes/pitch-deck.yaml) | ピッチデック | 投資家・パートナー候補 | modern |
| [consulting](purposes/consulting.yaml) | コンサルティング | 事業責任者・プロジェクト責任者 | corporate |
| [executive](purposes/executive.yaml) | 経営層・意思決定 | 経営層・意思決定者 | minimal |
| [client-facing](purposes/client-facing.yaml) | お客様説明・提案 | 導入を検討するお客様 | corporate |
| [internal-review](purposes/internal-review.yaml) | 社内レビュー | レビュー担当者・関係部署 | monochrome |
| [status-report](purposes/status-report.yaml) | 進捗・活動報告 | プロジェクト関係者 | modern |
| [data-analysis](purposes/data-analysis.yaml) | データ分析・調査報告 | 分析結果を利用する担当者 | scientific |
| [technical-design](purposes/technical-design.yaml) | 開発ドキュメント・設計書 | 開発者・設計レビュー担当 | scientific |
| [technical-guide](purposes/technical-guide.yaml) | 開発・運用手順書 | 開発者・運用担当者 | corporate |
| [technical-explainer](purposes/technical-explainer.yaml) | 技術解説・ナレッジ共有 | ソフトウェアエンジニア | modern |
| [postmortem](purposes/postmortem.yaml) | 障害報告・ポストモーテム | 運用・開発・プロジェクト関係者 | monochrome |
| [educational](purposes/educational.yaml) | 教育・研修・学習教材 | 初学者・研修受講者 | friendly |
| [infographic](purposes/infographic.yaml) | インフォグラフィック・図解 | 短時間で構造や流れを理解したい読者 | hand-drawn |
| [academic](purposes/academic.yaml) | 研究・学術発表 | 研究者・査読者・専門分野の学生 | scientific |
| [product-showcase](purposes/product-showcase.yaml) | 製品・サービス紹介 | 製品を評価する利用者・導入担当者 | editorial |

- 技術の仕組みを知ってほしい場合は `technical-explainer`。設計をレビューする場合は `technical-design`。作業を再現する場合は `technical-guide`。
- 経営判断を求める場合は `executive`。分析根拠を詰めて推奨する場合は `consulting`。観測結果自体を報告する場合は `data-analysis`。
- 言語は依頼または素材に合わせ、どちらからも判断できない場合は日本語。配布中心なら根拠や脚注を残し、投影中心なら要点を一枚ずつ見せる。

## テーマ

| テーマ | 表現 | PNG |
| --- | --- | --- |
| [minimal](themes/minimal.css) | 広い余白、静かなアクセント、大きな文字 | [見本](themes/previews/minimal.png) |
| [corporate](themes/corporate.css) | 青と紺、見出しの罫線、フォーマル | [見本](themes/previews/corporate.png) |
| [modern](themes/modern.css) | 薄紫の背景、丸いカード、控えめな影 | [見本](themes/previews/modern.png) |
| [dark-tech](themes/dark-tech.css) | 紺の暗色背景、明るいミントのアクセント | [見本](themes/previews/dark-tech.png) |
| [editorial](themes/editorial.css) | 紙色、明朝・セリフの見出し、細い罫線 | [見本](themes/previews/editorial.png) |
| [bold](themes/bold.css) | 濃い紫と黄色、太い文字、強いコントラスト | [見本](themes/previews/bold.png) |
| [friendly](themes/friendly.css) | 暖色背景、柔らかな紫、大きな角丸 | [見本](themes/previews/friendly.png) |
| [monochrome](themes/monochrome.css) | 白黒とグレー、形状や線種で意味を区別 | [見本](themes/previews/monochrome.png) |
| [hand-drawn](themes/hand-drawn.css) | 紙の色、不均等な丸み、手描き風の破線 | [見本](themes/previews/hand-drawn.png) |
| [scientific](themes/scientific.css) | 白と青緑、等幅数字、図表を優先 | [見本](themes/previews/scientific.png) |

## 設定ファイル

新規デッキでは [作成前の確認](briefing.md) の資料プリセットとブランドを選び、[ブランド付きの使用例](../examples/branded/presentation.yaml) を使う。

[使用例](../examples/presentation.yaml) の `presentation.purpose` は必須。未指定フィールドには目的の既定値が入る。`style` は項目単位で上書きし、レイアウト・描画ツール・回避事項の配列は指定値を使う。`aspect_ratio` は `"16:9"` または `"4:3"`。`preferred_layouts` にはレイアウトIDを指定する。

デッキのフロントマターには解決された `theme` と、`aspect_ratio` に対応する `size`、`language` に対応する `lang` を書く。目的や密度は本文の設計に反映する。
