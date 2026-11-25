# 図・グラフの作り方

SVG または PNG を資料の `assets/` に保存し、Marp から相対パスで参照する。編集可能な元データや仕様は `diagrams/` や `data/` に残す。ブラウザで動くグラフも、PDF・PNG・PPTX 向けには先に静的な素材に変換する。

| 表現 | 選び方 |
| --- | --- |
| Markdown / HTML + CSS | テキスト、表、カード、段組、注釈、KPI。既存クラスを使うとテーマを差し替えやすい |
| Mermaid | フロー、状態遷移、シーケンス、ER。既定は CLI で SVG 化 |
| D2 | アーキテクチャ、接続、階層化したシステム構成 |
| PlantUML / Graphviz | 厳密な UML、既存の UML/ DOT 資産、依存関係 |
| SVG | ブランドに合わせた図版、行列や構造図、フォーマット固有の配置。viewBox を指定し、サイズ変更後に文字を確認 |
| Excalidraw | 概念やラフスケッチ。元の .excalidraw と書き出した SVG/PNG を保存 |
| Vega-Lite | データ・集計・軸の設定を JSON で管理する比較・時系列・分布 |
| ECharts | Sankey・ヒートマップ等。SSR で静的 SVG に出力するか、既存の生成方法を再利用する |
| KaTeX | Marp の数式記法。数式の意味が分かるラベルや図を配置 |
| Lucide / Iconify / Simple Icons | 意味のあるアイコンと技術ロゴ。セットを揃え、必要な SVG をローカルに保存 |
| Marp 標準のコード / Shiki | 通常は言語付きコードフェンス。独自強調が要る場合は Shiki の静的 HTML |
| 実写 / 画像生成 | 製品の実物、利用場面、コンセプト。モックや仮想場面は区別して表示 |

```sh
mkdir -p assets
mmdc -i diagrams/request.mmd -o assets/request.svg
d2 diagrams/architecture.d2 assets/architecture.svg
vl2svg diagrams/trend.vl.json > assets/trend.svg
```

各 CLI は図表を生成する場合だけ用意する。採用プロジェクトで固定済みの版があればそれを利用する。公開先で CDN が不要になるよう CSS・アイコン・入力データをローカル化する。SVG を `<img>` で参照する場合は SVG 内で図の色やフォントを指定する。ダークテーマでは図版側の文字・背景・線の色も確認する。

技術解説の作例は、`examples/` で次のコマンドを実行するとシーケンス図を更新できる。インストール済みの Chrome を使う環境では、Mermaid CLI の Puppeteer 設定に実行ファイルを指定できる。

```sh
npx --package @mermaid-js/mermaid-cli@11.17.0 mmdc -i diagrams/retry-flow.mmd -o assets/retry-flow.svg -b transparent
```

```markdown
![width:900px リクエストがAPIからストアへ流れる図](./assets/request.svg)
![bg right:45%](./assets/product.png)
```

- [Marp CLI](https://github.com/marp-team/marp-cli)
- [Marpit のテーマ CSS](https://marpit.marp.app/theme-css)
- [Mermaid CLI](https://github.com/mermaid-js/mermaid-cli)
- [Mermaid CLI で既存の Chromium を利用する](https://github.com/mermaid-js/mermaid-cli/blob/master/docs/already-installed-chromium.md)
- [D2 のエクスポート](https://d2lang.com/tour/exports/)
- [Vega-Lite の CLI](https://vega.github.io/vega-lite/usage/compile.html)
- [ECharts のサーバー側レンダリング](https://echarts.apache.org/handbook/en/how-to/cross-platform/server/)
