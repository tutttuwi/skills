# レイアウト一覧

ページで示したい関係を基準に選ぶ。各IDの YAML に用途・構成・制約を、Markdown に実装例を、PNG に出力イメージを収録。CSS は [共通レイアウト](../themes/base.css) と各テーマを参照する。

関連項目の配置なら L/C、単独の強調なら H、対比なら B、順序なら F/T、構造なら S、データなら D、判断なら M、技術詳細なら E、画面なら P、学習なら K、話の流れなら N を参照する。

レイアウトを追加・編集したら、一覧のリンクを更新する。スキルのディレクトリで `npm run catalog` を実行すると PNG を再生成する。`npm run check` は定義と PNG の形式を確認する。

## L — 基本レイアウト

| ID | フォーマット | 使いどころ | テンプレート |
| --- | --- | --- | --- |
| L01 | 左右均等2分割 | 同じ重みの二つの観点を並べる | [YAML](L01/layout.yaml) · [Markdown](L01/slide.md) · [PNG](L01/preview.png) |
| L02 | 左右非均等2分割 | 主題を広く取り補足を隣に置く | [YAML](L02/layout.yaml) · [Markdown](L02/slide.md) · [PNG](L02/preview.png) |
| L03 | 左右均等3分割 | 同じ重要度の三要素を並列に示す | [YAML](L03/layout.yaml) · [Markdown](L03/slide.md) · [PNG](L03/preview.png) |
| L04 | 左右均等4分割 | 独立した四項目を俯瞰する | [YAML](L04/layout.yaml) · [Markdown](L04/slide.md) · [PNG](L04/preview.png) |
| L05 | 上下2分割 | 上の要約を下の証拠で補う | [YAML](L05/layout.yaml) · [Markdown](L05/slide.md) · [PNG](L05/preview.png) |
| L06 | 2×2グリッド | 四つの関連情報を均等に整理する | [YAML](L06/layout.yaml) · [Markdown](L06/slide.md) · [PNG](L06/preview.png) |
| L07 | 2×3グリッド | 六つの機能や特徴を俯瞰する | [YAML](L07/layout.yaml) · [Markdown](L07/slide.md) · [PNG](L07/preview.png) |
| L08 | Bento Grid | 面積の大小で情報の優先順位を示す | [YAML](L08/layout.yaml) · [Markdown](L08/slide.md) · [PNG](L08/preview.png) |
| L09 | メイン＋サイドバー | 主題を中心に置き補足の参照先を添える | [YAML](L09/layout.yaml) · [Markdown](L09/slide.md) · [PNG](L09/preview.png) |
| L10 | 中央集中型 | 単独のメッセージや図に視線を集める | [YAML](L10/layout.yaml) · [Markdown](L10/slide.md) · [PNG](L10/preview.png) |
| L11 | 非対称レイアウト | 対等でない画像と本文に読み順を作る | [YAML](L11/layout.yaml) · [Markdown](L11/slide.md) · [PNG](L11/preview.png) |
| L12 | 段差レイアウト | 各要素の独立性を保ちながら視線を移す | [YAML](L12/layout.yaml) · [Markdown](L12/slide.md) · [PNG](L12/preview.png) |

## H — メッセージ強調

| ID | フォーマット | 使いどころ | テンプレート |
| --- | --- | --- | --- |
| H01 | 全面背景画像 | 場面を示す画像に短いタイトルを重ねる | [YAML](H01/layout.yaml) · [Markdown](H01/slide.md) · [PNG](H01/preview.png) |
| H02 | 画像・テキスト分割 | 大きな図版と短い価値訴求を対応させる | [YAML](H02/layout.yaml) · [Markdown](H02/slide.md) · [PNG](H02/preview.png) |
| H03 | ビッグタイポグラフィ | 短い核心メッセージを文字だけで印象づける | [YAML](H03/layout.yaml) · [Markdown](H03/slide.md) · [PNG](H03/preview.png) |
| H04 | ビッグナンバー | 単一の指標と意味を印象づける | [YAML](H04/layout.yaml) · [Markdown](H04/slide.md) · [PNG](H04/preview.png) |
| H05 | キーワード強調 | 一文の中の重要語を明示する | [YAML](H05/layout.yaml) · [Markdown](H05/slide.md) · [PNG](H05/preview.png) |
| H06 | 問いかけ | 聴衆に答えを考えてもらう | [YAML](H06/layout.yaml) · [Markdown](H06/slide.md) · [PNG](H06/preview.png) |
| H07 | 引用 | 発言と発言者・出典を一緒に示す | [YAML](H07/layout.yaml) · [Markdown](H07/slide.md) · [PNG](H07/preview.png) |
| H08 | 結論先出し | 上に結論を置き直下で根拠を示す | [YAML](H08/layout.yaml) · [Markdown](H08/slide.md) · [PNG](H08/preview.png) |
| H09 | シンボル | 象徴的な図でメッセージの理解を助ける | [YAML](H09/layout.yaml) · [Markdown](H09/slide.md) · [PNG](H09/preview.png) |
| H10 | 背景グラデーション | 短い章題を抽象的な背景で区切る | [YAML](H10/layout.yaml) · [Markdown](H10/slide.md) · [PNG](H10/preview.png) |

## C — カード・情報整理

| ID | フォーマット | 使いどころ | テンプレート |
| --- | --- | --- | --- |
| C01 | アイコン付きカード | 機能を識別できる図柄と短文にする | [YAML](C01/layout.yaml) · [Markdown](C01/slide.md) · [PNG](C01/preview.png) |
| C02 | 番号付きカード | 項目の順序や優先度を番号で表す | [YAML](C02/layout.yaml) · [Markdown](C02/slide.md) · [PNG](C02/preview.png) |
| C03 | 画像付きカード | 図版と見出しを反復して機能を紹介する | [YAML](C03/layout.yaml) · [Markdown](C03/slide.md) · [PNG](C03/preview.png) |
| C04 | 大小カード | 一番重要な項目に大きな領域を割り当てる | [YAML](C04/layout.yaml) · [Markdown](C04/slide.md) · [PNG](C04/preview.png) |
| C05 | カテゴリ分類 | 各カテゴリに意味のあるラベルと色を割り当てる | [YAML](C05/layout.yaml) · [Markdown](C05/slide.md) · [PNG](C05/preview.png) |
| C06 | チェックリスト | 確認項目と実施状態を対応させる | [YAML](C06/layout.yaml) · [Markdown](C06/slide.md) · [PNG](C06/preview.png) |
| C07 | 定義リスト | 用語と意味を一覧で確認する | [YAML](C07/layout.yaml) · [Markdown](C07/slide.md) · [PNG](C07/preview.png) |
| C08 | タグ・チップ | 短い属性を一覧化する | [YAML](C08/layout.yaml) · [Markdown](C08/slide.md) · [PNG](C08/preview.png) |
| C09 | ランキング | 順位と評価理由を同時に示す | [YAML](C09/layout.yaml) · [Markdown](C09/slide.md) · [PNG](C09/preview.png) |
| C10 | 重要度別リスト | 重要度によって文字や余白の比重を変える | [YAML](C10/layout.yaml) · [Markdown](C10/slide.md) · [PNG](C10/preview.png) |

## B — 比較・対比

| ID | フォーマット | 使いどころ | テンプレート |
| --- | --- | --- | --- |
| B01 | Before / After | 変更前後の違いを同じ粒度で見せる | [YAML](B01/layout.yaml) · [Markdown](B01/slide.md) · [PNG](B01/preview.png) |
| B02 | As-Is / To-Be | 現状から到達したい状態への方向を示す | [YAML](B02/layout.yaml) · [Markdown](B02/slide.md) · [PNG](B02/preview.png) |
| B03 | メリット・デメリット | 一つの選択肢を長所と短所から検討する | [YAML](B03/layout.yaml) · [Markdown](B03/slide.md) · [PNG](B03/preview.png) |
| B04 | 多項目比較表 | 複数案を同じ評価軸で比較する | [YAML](B04/layout.yaml) · [Markdown](B04/slide.md) · [PNG](B04/preview.png) |
| B05 | 機能対応マトリクス | 各案で機能が使えるかを確認する | [YAML](B05/layout.yaml) · [Markdown](B05/slide.md) · [PNG](B05/preview.png) |
| B06 | 推奨案強調比較 | 選択肢を並べて推奨理由に注意を向ける | [YAML](B06/layout.yaml) · [Markdown](B06/slide.md) · [PNG](B06/preview.png) |
| B07 | 対立概念 | 同じ論点の異なるアプローチを対応させる | [YAML](B07/layout.yaml) · [Markdown](B07/slide.md) · [PNG](B07/preview.png) |
| B08 | 差分強調 | 共通部分を残して変更点を強調する | [YAML](B08/layout.yaml) · [Markdown](B08/slide.md) · [PNG](B08/preview.png) |
| B09 | トレードオフ | 二つの評価軸の得失を示す | [YAML](B09/layout.yaml) · [Markdown](B09/slide.md) · [PNG](B09/preview.png) |
| B10 | 新旧アーキテクチャ比較 | ノードと接続の変化を同じ縮尺で示す | [YAML](B10/layout.yaml) · [Markdown](B10/slide.md) · [PNG](B10/preview.png) |

## F — フロー・プロセス

| ID | フォーマット | 使いどころ | テンプレート |
| --- | --- | --- | --- |
| F01 | 水平ステップフロー | 少数の工程を左から右へ追う | [YAML](F01/layout.yaml) · [Markdown](F01/slide.md) · [PNG](F01/preview.png) |
| F02 | 垂直ステップフロー | 縦方向に連続する工程を確認する | [YAML](F02/layout.yaml) · [Markdown](F02/slide.md) · [PNG](F02/preview.png) |
| F03 | ジグザグフロー | 多段階の工程を折り返して追う | [YAML](F03/layout.yaml) · [Markdown](F03/slide.md) · [PNG](F03/preview.png) |
| F04 | 条件分岐フロー | 判定ごとの異なる処理を示す | [YAML](F04/layout.yaml) · [Markdown](F04/slide.md) · [PNG](F04/preview.png) |
| F05 | 循環プロセス | 繰り返す工程を閉じた経路で示す | [YAML](F05/layout.yaml) · [Markdown](F05/slide.md) · [PNG](F05/preview.png) |
| F06 | 入力・処理・出力 | 入出力の内容と変換を対応させる | [YAML](F06/layout.yaml) · [Markdown](F06/slide.md) · [PNG](F06/preview.png) |
| F07 | 並列処理フロー | 同時に進行する処理を示す | [YAML](F07/layout.yaml) · [Markdown](F07/slide.md) · [PNG](F07/preview.png) |
| F08 | 分岐・合流 | 複数の処理経路と再合流を示す | [YAML](F08/layout.yaml) · [Markdown](F08/slide.md) · [PNG](F08/preview.png) |
| F09 | スイムレーン | 役割ごとに責任範囲と受け渡しを示す | [YAML](F09/layout.yaml) · [Markdown](F09/slide.md) · [PNG](F09/preview.png) |
| F10 | シーケンス | 参加者間のメッセージ順序を確認する | [YAML](F10/layout.yaml) · [Markdown](F10/slide.md) · [PNG](F10/preview.png) |
| F11 | パイプライン | 入力が処理を通って変わる様子を示す | [YAML](F11/layout.yaml) · [Markdown](F11/slide.md) · [PNG](F11/preview.png) |
| F12 | ファネル | 各段階で対象数が絞られる様子を示す | [YAML](F12/layout.yaml) · [Markdown](F12/slide.md) · [PNG](F12/preview.png) |
| F13 | フィードバックループ | 出力を前工程へ戻す箇所を示す | [YAML](F13/layout.yaml) · [Markdown](F13/slide.md) · [PNG](F13/preview.png) |
| F14 | 状態遷移 | 状態と移行条件を明示する | [YAML](F14/layout.yaml) · [Markdown](F14/slide.md) · [PNG](F14/preview.png) |

## T — 時系列・計画

| ID | フォーマット | 使いどころ | テンプレート |
| --- | --- | --- | --- |
| T01 | 水平タイムライン | 日付と出来事を左から右に追う | [YAML](T01/layout.yaml) · [Markdown](T01/slide.md) · [PNG](T01/preview.png) |
| T02 | 垂直タイムライン | 各出来事に説明を添えて時系列を示す | [YAML](T02/layout.yaml) · [Markdown](T02/slide.md) · [PNG](T02/preview.png) |
| T03 | 交互タイムライン | 中央の時間軸の両側で出来事を見せる | [YAML](T03/layout.yaml) · [Markdown](T03/slide.md) · [PNG](T03/preview.png) |
| T04 | ロードマップ | 期間ごとに達成したい施策を示す | [YAML](T04/layout.yaml) · [Markdown](T04/slide.md) · [PNG](T04/preview.png) |
| T05 | ガントチャート | 期間とタスクの並行関係を示す | [YAML](T05/layout.yaml) · [Markdown](T05/slide.md) · [PNG](T05/preview.png) |
| T06 | マイルストーン | 判断点や主要な達成地点を示す | [YAML](T06/layout.yaml) · [Markdown](T06/slide.md) · [PNG](T06/preview.png) |
| T07 | フェーズ分割 | 各段階の目的と成果物を対応させる | [YAML](T07/layout.yaml) · [Markdown](T07/slide.md) · [PNG](T07/preview.png) |
| T08 | 成熟度ステップ | 能力の向上を段階として示す | [YAML](T08/layout.yaml) · [Markdown](T08/slide.md) · [PNG](T08/preview.png) |
| T09 | 過去・現在・未来 | 三時点で取り組みや状況を比較する | [YAML](T09/layout.yaml) · [Markdown](T09/slide.md) · [PNG](T09/preview.png) |
| T10 | 進捗ロードマップ | 時系列と現在位置、完了状態を示す | [YAML](T10/layout.yaml) · [Markdown](T10/slide.md) · [PNG](T10/preview.png) |

## S — 構造・概念図解

| ID | フォーマット | 使いどころ | テンプレート |
| --- | --- | --- | --- |
| S01 | 階層ピラミッド | 上位と下位の概念を階層で示す | [YAML](S01/layout.yaml) · [Markdown](S01/slide.md) · [PNG](S01/preview.png) |
| S02 | 逆ピラミッド | 結論から詳細に向かって範囲を絞る | [YAML](S02/layout.yaml) · [Markdown](S02/slide.md) · [PNG](S02/preview.png) |
| S03 | 積層レイヤー | 上から下に責務と依存方向を示す | [YAML](S03/layout.yaml) · [Markdown](S03/slide.md) · [PNG](S03/preview.png) |
| S04 | 同心円 | 核とその周囲の関係を見せる | [YAML](S04/layout.yaml) · [Markdown](S04/slide.md) · [PNG](S04/preview.png) |
| S05 | ハブ＆スポーク | 中心と周辺の直接接続を見せる | [YAML](S05/layout.yaml) · [Markdown](S05/slide.md) · [PNG](S05/preview.png) |
| S06 | ツリー | 親子関係や分類を示す | [YAML](S06/layout.yaml) · [Markdown](S06/slide.md) · [PNG](S06/preview.png) |
| S07 | マインドマップ | 中心テーマから論点や連想を広げる | [YAML](S07/layout.yaml) · [Markdown](S07/slide.md) · [PNG](S07/preview.png) |
| S08 | ベン図 | 集合の共通部分と固有部分を示す | [YAML](S08/layout.yaml) · [Markdown](S08/slide.md) · [PNG](S08/preview.png) |
| S09 | 包含関係 | 所属と入れ子を示す | [YAML](S09/layout.yaml) · [Markdown](S09/slide.md) · [PNG](S09/preview.png) |
| S10 | ネットワーク | 多対多の接続を示す | [YAML](S10/layout.yaml) · [Markdown](S10/slide.md) · [PNG](S10/preview.png) |
| S11 | パズル | 複数の要素が同じ全体を作る様子を示す | [YAML](S11/layout.yaml) · [Markdown](S11/slide.md) · [PNG](S11/preview.png) |
| S12 | 柱構造 | 同じ目標を支える要素を示す | [YAML](S12/layout.yaml) · [Markdown](S12/slide.md) · [PNG](S12/preview.png) |
| S13 | 氷山モデル | 観測された現象と背後の構造を分ける | [YAML](S13/layout.yaml) · [Markdown](S13/slide.md) · [PNG](S13/preview.png) |
| S14 | エコシステム | 複数の主体の相互作用を示す | [YAML](S14/layout.yaml) · [Markdown](S14/slide.md) · [PNG](S14/preview.png) |
| S15 | 分解・展開 | 一つの対象を構成要素へ分解する | [YAML](S15/layout.yaml) · [Markdown](S15/slide.md) · [PNG](S15/preview.png) |

## D — データ可視化・分析

| ID | フォーマット | 使いどころ | テンプレート |
| --- | --- | --- | --- |
| D01 | KPIカード | 指標・単位・変化をまとめる | [YAML](D01/layout.yaml) · [Markdown](D01/slide.md) · [PNG](D01/preview.png) |
| D02 | ダッシュボード | 主要指標と複数の可視化を一画面にまとめる | [YAML](D02/layout.yaml) · [Markdown](D02/slide.md) · [PNG](D02/preview.png) |
| D03 | 棒グラフ | カテゴリ間の量を比較する | [YAML](D03/layout.yaml) · [Markdown](D03/slide.md) · [PNG](D03/preview.png) |
| D04 | 積み上げ棒グラフ | 量の合計と内訳を比較する | [YAML](D04/layout.yaml) · [Markdown](D04/slide.md) · [PNG](D04/preview.png) |
| D05 | 折れ線グラフ | 時系列の動きを見る | [YAML](D05/layout.yaml) · [Markdown](D05/slide.md) · [PNG](D05/preview.png) |
| D06 | エリアチャート | 時系列と規模感を示す | [YAML](D06/layout.yaml) · [Markdown](D06/slide.md) · [PNG](D06/preview.png) |
| D07 | ドーナツチャート | 全体の構成比と中心指標を示す | [YAML](D07/layout.yaml) · [Markdown](D07/slide.md) · [PNG](D07/preview.png) |
| D08 | 散布図 | 二変数の関係と外れた観測値を示す | [YAML](D08/layout.yaml) · [Markdown](D08/slide.md) · [PNG](D08/preview.png) |
| D09 | バブルチャート | 位置と面積で三変数を示す | [YAML](D09/layout.yaml) · [Markdown](D09/slide.md) · [PNG](D09/preview.png) |
| D10 | レーダーチャート | 複数の評価軸から特徴を見る | [YAML](D10/layout.yaml) · [Markdown](D10/slide.md) · [PNG](D10/preview.png) |
| D11 | ヒートマップ | 行列の数値のパターンを濃淡で示す | [YAML](D11/layout.yaml) · [Markdown](D11/slide.md) · [PNG](D11/preview.png) |
| D12 | ウォーターフォール | 増減が合計値をどう変えるかを示す | [YAML](D12/layout.yaml) · [Markdown](D12/slide.md) · [PNG](D12/preview.png) |
| D13 | サンキー図 | 経路ごとの量を線の太さで示す | [YAML](D13/layout.yaml) · [Markdown](D13/slide.md) · [PNG](D13/preview.png) |
| D14 | ツリーマップ | 階層と構成比を面積で示す | [YAML](D14/layout.yaml) · [Markdown](D14/slide.md) · [PNG](D14/preview.png) |
| D15 | 進捗バー | 目標に対する達成割合を示す | [YAML](D15/layout.yaml) · [Markdown](D15/slide.md) · [PNG](D15/preview.png) |
| D16 | ゲージ | 現在値と基準の位置関係を示す | [YAML](D16/layout.yaml) · [Markdown](D16/slide.md) · [PNG](D16/preview.png) |
| D17 | スパークライン | 表の中で値と短期推移を併記する | [YAML](D17/layout.yaml) · [Markdown](D17/slide.md) · [PNG](D17/preview.png) |
| D18 | 実績・目標比較 | 実績、目標、差分を比較する | [YAML](D18/layout.yaml) · [Markdown](D18/slide.md) · [PNG](D18/preview.png) |

## M — 戦略・意思決定

| ID | フォーマット | 使いどころ | テンプレート |
| --- | --- | --- | --- |
| M01 | 2×2マトリクス | 二つの軸で四象限に分類する | [YAML](M01/layout.yaml) · [Markdown](M01/slide.md) · [PNG](M01/preview.png) |
| M02 | SWOT分析 | 内部と外部の要素をプラス・マイナスに分ける | [YAML](M02/layout.yaml) · [Markdown](M02/slide.md) · [PNG](M02/preview.png) |
| M03 | インパクト・コスト | 効果と費用で取り組みを位置づける | [YAML](M03/layout.yaml) · [Markdown](M03/slide.md) · [PNG](M03/preview.png) |
| M04 | リスクマトリクス | 発生確率と影響度でリスクを分類する | [YAML](M04/layout.yaml) · [Markdown](M04/slide.md) · [PNG](M04/preview.png) |
| M05 | 意思決定ツリー | 判断基準で結論が分かれる場面に使う | [YAML](M05/layout.yaml) · [Markdown](M05/slide.md) · [PNG](M05/preview.png) |
| M06 | 加重スコアリング | 重みと評点から比較結果を示す | [YAML](M06/layout.yaml) · [Markdown](M06/slide.md) · [PNG](M06/preview.png) |
| M07 | 課題・原因・対策 | 観測した課題に原因と対策を対応させる | [YAML](M07/layout.yaml) · [Markdown](M07/slide.md) · [PNG](M07/preview.png) |
| M08 | ロジックツリー | 目標や問題を観点で分解する | [YAML](M08/layout.yaml) · [Markdown](M08/slide.md) · [PNG](M08/preview.png) |
| M09 | 魚骨図 | 結果に関わる原因をカテゴリ単位で整理する | [YAML](M09/layout.yaml) · [Markdown](M09/slide.md) · [PNG](M09/preview.png) |
| M10 | 仮説・検証・結果 | 検証方法と観測結果を順に示す | [YAML](M10/layout.yaml) · [Markdown](M10/slide.md) · [PNG](M10/preview.png) |
| M11 | 優先順位ピラミッド | 重要度の階層を示す | [YAML](M11/layout.yaml) · [Markdown](M11/slide.md) · [PNG](M11/preview.png) |
| M12 | MoSCoW | 要件を優先度の四区分に振り分ける | [YAML](M12/layout.yaml) · [Markdown](M12/slide.md) · [PNG](M12/preview.png) |

## E — ソフトウェア・技術解説

| ID | フォーマット | 使いどころ | テンプレート |
| --- | --- | --- | --- |
| E01 | システムアーキテクチャ | 主要な構成要素と接続経路を俯瞰する | [YAML](E01/layout.yaml) · [Markdown](E01/slide.md) · [PNG](E01/preview.png) |
| E02 | C4コンテキスト | 利用者・対象システム・外部サービスの関係を示す | [YAML](E02/layout.yaml) · [Markdown](E02/slide.md) · [PNG](E02/preview.png) |
| E03 | C4コンテナ | アプリとデータストアの内部構成を示す | [YAML](E03/layout.yaml) · [Markdown](E03/slide.md) · [PNG](E03/preview.png) |
| E04 | C4コンポーネント | コンテナ内の責務・依存関係を確認する | [YAML](E04/layout.yaml) · [Markdown](E04/slide.md) · [PNG](E04/preview.png) |
| E05 | インフラ構成 | ネットワークとリソースの境界を確認する | [YAML](E05/layout.yaml) · [Markdown](E05/slide.md) · [PNG](E05/preview.png) |
| E06 | ER図 | エンティティ・属性とカーディナリティを示す | [YAML](E06/layout.yaml) · [Markdown](E06/slide.md) · [PNG](E06/preview.png) |
| E07 | クラス図 | クラスの公開要素と実装関係を示す | [YAML](E07/layout.yaml) · [Markdown](E07/slide.md) · [PNG](E07/preview.png) |
| E08 | コード・解説分割 | 実装の隣に意図や挙動を置く | [YAML](E08/layout.yaml) · [Markdown](E08/slide.md) · [PNG](E08/preview.png) |
| E09 | コード差分 | コードの追加・削除箇所を示す | [YAML](E09/layout.yaml) · [Markdown](E09/slide.md) · [PNG](E09/preview.png) |
| E10 | コード部分強調 | 解説する行に視線を誘導する | [YAML](E10/layout.yaml) · [Markdown](E10/slide.md) · [PNG](E10/preview.png) |
| E11 | コード・実行結果 | コードと出力を対応させる | [YAML](E11/layout.yaml) · [Markdown](E11/slide.md) · [PNG](E11/preview.png) |
| E12 | ディレクトリ構成 | ファイルツリーと責務を合わせて示す | [YAML](E12/layout.yaml) · [Markdown](E12/slide.md) · [PNG](E12/preview.png) |
| E13 | APIリクエスト・レスポンス | メソッド、URL、本文、応答を対応させる | [YAML](E13/layout.yaml) · [Markdown](E13/slide.md) · [PNG](E13/preview.png) |
| E14 | プロトコルスタック | プロトコル階層ごとの役割を示す | [YAML](E14/layout.yaml) · [Markdown](E14/slide.md) · [PNG](E14/preview.png) |
| E15 | データライフサイクル | データに何が起きるかを段階ごとに示す | [YAML](E15/layout.yaml) · [Markdown](E15/slide.md) · [PNG](E15/preview.png) |
| E16 | セキュリティ境界 | 信頼境界とアクセスを検査する場所を明示する | [YAML](E16/layout.yaml) · [Markdown](E16/slide.md) · [PNG](E16/preview.png) |
| E17 | 依存関係グラフ | 複数のモジュールの依存方向を示す | [YAML](E17/layout.yaml) · [Markdown](E17/slide.md) · [PNG](E17/preview.png) |
| E18 | デプロイメント構成 | 実行環境とノード上の配置を示す | [YAML](E18/layout.yaml) · [Markdown](E18/slide.md) · [PNG](E18/preview.png) |
| E19 | 技術スタック | 各レイヤーで採用した技術を俯瞰する | [YAML](E19/layout.yaml) · [Markdown](E19/slide.md) · [PNG](E19/preview.png) |
| E20 | 抽象化・詳細化 | 抽象概念の具体的な実装箇所を対応させる | [YAML](E20/layout.yaml) · [Markdown](E20/slide.md) · [PNG](E20/preview.png) |
| E21 | 正常系・異常系 | 成功とエラー時の動作を並べて説明する | [YAML](E21/layout.yaml) · [Markdown](E21/slide.md) · [PNG](E21/preview.png) |
| E22 | メモリ・データ構造 | データの位置関係や参照を示す | [YAML](E22/layout.yaml) · [Markdown](E22/slide.md) · [PNG](E22/preview.png) |

## P — 製品・UI紹介

| ID | フォーマット | 使いどころ | テンプレート |
| --- | --- | --- | --- |
| P01 | デバイスモックアップ | 主要機能をデバイスに載せて利用状況を想像させる | [YAML](P01/layout.yaml) · [Markdown](P01/slide.md) · [PNG](P01/preview.png) |
| P02 | スクリーンショット・解説 | 画面と操作上の意味を対応させる | [YAML](P02/layout.yaml) · [Markdown](P02/slide.md) · [PNG](P02/preview.png) |
| P03 | アノテーション | 画面の一部分を引き出し線で指し示す | [YAML](P03/layout.yaml) · [Markdown](P03/slide.md) · [PNG](P03/preview.png) |
| P04 | 画面遷移 | 複数画面の操作順を追う | [YAML](P04/layout.yaml) · [Markdown](P04/slide.md) · [PNG](P04/preview.png) |
| P05 | UI改善比較 | 同じ操作の改善前後を並べる | [YAML](P05/layout.yaml) · [Markdown](P05/slide.md) · [PNG](P05/preview.png) |
| P06 | 機能ギャラリー | 複数の画面や機能を俯瞰する | [YAML](P06/layout.yaml) · [Markdown](P06/slide.md) · [PNG](P06/preview.png) |
| P07 | マルチデバイス | 画面幅による表示と操作の違いを示す | [YAML](P07/layout.yaml) · [Markdown](P07/slide.md) · [PNG](P07/preview.png) |
| P08 | 拡大フォーカス | 全体の中の詳細箇所を拡大する | [YAML](P08/layout.yaml) · [Markdown](P08/slide.md) · [PNG](P08/preview.png) |
| P09 | ユーザージャーニー | 行動、接点、状態を時系列で対応させる | [YAML](P09/layout.yaml) · [Markdown](P09/slide.md) · [PNG](P09/preview.png) |
| P10 | ペルソナ | 行動の前提となる利用者像を共有する | [YAML](P10/layout.yaml) · [Markdown](P10/slide.md) · [PNG](P10/preview.png) |
| P11 | 利用シナリオ | 利用者が目的を達成する場面を順に追う | [YAML](P11/layout.yaml) · [Markdown](P11/slide.md) · [PNG](P11/preview.png) |
| P12 | デザインシステム | 色・タイポグラフィ・部品の規則を示す | [YAML](P12/layout.yaml) · [Markdown](P12/slide.md) · [PNG](P12/preview.png) |

## K — 学習・教育

| ID | フォーマット | 使いどころ | テンプレート |
| --- | --- | --- | --- |
| K01 | 用語・定義・具体例 | 用語を定義して一つの具体例に結び付ける | [YAML](K01/layout.yaml) · [Markdown](K01/slide.md) · [PNG](K01/preview.png) |
| K02 | 概念・実例分割 | 抽象的な仕組みと具体的な使い方を対応させる | [YAML](K02/layout.yaml) · [Markdown](K02/slide.md) · [PNG](K02/preview.png) |
| K03 | アナロジー | 身近な例のどの部分が概念に対応するかを示す | [YAML](K03/layout.yaml) · [Markdown](K03/slide.md) · [PNG](K03/preview.png) |
| K04 | 図解中心 | 仕組みを短い図中ラベルで説明する | [YAML](K04/layout.yaml) · [Markdown](K04/slide.md) · [PNG](K04/preview.png) |
| K05 | 問題提示 | 答えを表示する前に考える時間を作る | [YAML](K05/layout.yaml) · [Markdown](K05/slide.md) · [PNG](K05/preview.png) |
| K06 | 解答・解説 | 正答と判断理由を対応させる | [YAML](K06/layout.yaml) · [Markdown](K06/slide.md) · [PNG](K06/preview.png) |
| K07 | よくある誤解 | つまずきやすい認識を具体例で修正する | [YAML](K07/layout.yaml) · [Markdown](K07/slide.md) · [PNG](K07/preview.png) |
| K08 | 段階的理解 | 基礎、単純な応用、複雑な応用の順に解説する | [YAML](K08/layout.yaml) · [Markdown](K08/slide.md) · [PNG](K08/preview.png) |
| K09 | 5W1H | 同じ事象を六つの問いから理解する | [YAML](K09/layout.yaml) · [Markdown](K09/slide.md) · [PNG](K09/preview.png) |
| K10 | FAQ | 頻出する問いと短い答えを対応させる | [YAML](K10/layout.yaml) · [Markdown](K10/slide.md) · [PNG](K10/preview.png) |
| K11 | ケーススタディ | 状況、対応、結果、教訓を一連で示す | [YAML](K11/layout.yaml) · [Markdown](K11/slide.md) · [PNG](K11/preview.png) |
| K12 | 分解学習 | 複雑な仕組みを要素と役割に分解する | [YAML](K12/layout.yaml) · [Markdown](K12/slide.md) · [PNG](K12/preview.png) |
| K13 | 因果関係 | 原因から中間事象を経て結果に至る関係を説明する | [YAML](K13/layout.yaml) · [Markdown](K13/slide.md) · [PNG](K13/preview.png) |
| K14 | 数式・図解 | 式の変数と図示された関係を対応させる | [YAML](K14/layout.yaml) · [Markdown](K14/slide.md) · [PNG](K14/preview.png) |
| K15 | キーポイント復習 | 重要事項を三つ程度に絞る | [YAML](K15/layout.yaml) · [Markdown](K15/slide.md) · [PNG](K15/preview.png) |

## N — ストーリーテリング

| ID | フォーマット | 使いどころ | テンプレート |
| --- | --- | --- | --- |
| N01 | 課題・解決策 | 課題と対応策を一対にする | [YAML](N01/layout.yaml) · [Markdown](N01/slide.md) · [PNG](N01/preview.png) |
| N02 | 課題・解決策・効果 | 施策が何をどのように改善するかを示す | [YAML](N02/layout.yaml) · [Markdown](N02/slide.md) · [PNG](N02/preview.png) |
| N03 | 背景・現状・課題 | 背景から検討すべき課題を導く | [YAML](N03/layout.yaml) · [Markdown](N03/slide.md) · [PNG](N03/preview.png) |
| N04 | Why / How / What | 目的を先に置き、方法と内容を伝える | [YAML](N04/layout.yaml) · [Markdown](N04/slide.md) · [PNG](N04/preview.png) |
| N05 | ストーリーボード | 利用者の行動をコマで追う | [YAML](N05/layout.yaml) · [Markdown](N05/slide.md) · [PNG](N05/preview.png) |
| N06 | 主張・根拠・具体例 | 主張の推論を明示し実例で支える | [YAML](N06/layout.yaml) · [Markdown](N06/slide.md) · [PNG](N06/preview.png) |
| N07 | 現状・理想・ギャップ | 理想との差分から検討対象を見せる | [YAML](N07/layout.yaml) · [Markdown](N07/slide.md) · [PNG](N07/preview.png) |
| N08 | エグゼクティブサマリー | 結論、根拠、決めてほしいことを一枚にまとめる | [YAML](N08/layout.yaml) · [Markdown](N08/slide.md) · [PNG](N08/preview.png) |
| N09 | ネクストアクション | 行動、担当者、期限を明示する | [YAML](N09/layout.yaml) · [Markdown](N09/slide.md) · [PNG](N09/preview.png) |
| N10 | Takeaways | 持ち帰るメッセージを短くまとめる | [YAML](N10/layout.yaml) · [Markdown](N10/slide.md) · [PNG](N10/preview.png) |
