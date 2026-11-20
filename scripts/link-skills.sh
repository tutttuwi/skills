#!/usr/bin/env bash
set -euo pipefail

# このリポジトリのスキルを、各エージェントのローカルスキルディレクトリへ
# シンボリックリンクする。リンクなので `git pull` だけで最新になる。
# スキルを追加・削除・改名したら再実行する。
#
# 使い方:
#   scripts/link-skills.sh [--dry-run] [target ...]
#
# target (省略時は claude と agents):
#   claude  ~/.claude/skills   Claude Code (ここだけを読む)
#   agents  ~/.agents/skills   Codex, Cursor, OpenCode ほか Agent Skills 互換ツール
#   cursor  ~/.cursor/skills   Cursor 専用 (agents と併用すると重複して見える可能性あり)
#   codex   ~/.codex/skills    Codex の旧ディレクトリ (非推奨)
#   opencode ~/.config/opencode/skills  OpenCode 専用 (通常は不要)
#   all     上の全部
#
# 既定の claude + agents で Claude Code / Codex / Cursor / OpenCode を賄える。
# Cursor と OpenCode は ~/.agents/skills と ~/.claude/skills の両方を読む。
#
# `deprecated/` と `misc/` はリンク対象外。`in-progress/` はリンクする
# (実際に使って確かめるための場所なので)。
#
# 安全策: リンク先に「シンボリックリンクではない同名の実体」がある場合は
# 削除せず警告してスキップする (他で入れたスキルを壊さないため)。

REPO="$(cd "$(dirname "$0")/.." && pwd)"

dest_for() {
  case "$1" in
    claude) echo "$HOME/.claude/skills" ;;
    agents) echo "$HOME/.agents/skills" ;;
    cursor) echo "$HOME/.cursor/skills" ;;
    codex)  echo "$HOME/.codex/skills" ;;
    opencode) echo "$HOME/.config/opencode/skills" ;;
    *) return 1 ;;
  esac
}

dry_run=0
targets=()
for arg in "$@"; do
  case "$arg" in
    --dry-run) dry_run=1 ;;
    all) targets+=(claude agents cursor codex opencode) ;;
    -h|--help) sed -n '3,24p' "$0"; exit 0 ;;
    *)
      if ! dest_for "$arg" >/dev/null; then
        echo "error: 不明な target です: $arg (claude / agents / cursor / codex / opencode / all)" >&2
        exit 1
      fi
      targets+=("$arg")
      ;;
  esac
done
if [ "${#targets[@]}" -eq 0 ]; then
  targets=(claude agents)
fi

names=()
srcs=()
while IFS= read -r -d '' skill_md; do
  src="$(dirname "$skill_md")"
  names+=("$(basename "$src")")
  srcs+=("$src")
done < <(find "$REPO/skills" -name SKILL.md -not -path '*/node_modules/*' -not -path '*/deprecated/*' -not -path '*/misc/*' -print0)

if [ "${#names[@]}" -eq 0 ]; then
  echo "リンク対象のスキルがありません。"
  exit 0
fi

# 同名スキルが複数バケットにあると後勝ちで上書きされてしまうので止める。
dups="$(printf '%s\n' "${names[@]}" | sort | uniq -d)"
if [ -n "$dups" ]; then
  echo "error: スキル名が重複しています:" >&2
  echo "$dups" >&2
  exit 1
fi

for target in "${targets[@]}"; do
  DEST="$(dest_for "$target")"

  # DEST 自体がこのリポジトリ内へのシンボリックリンクだと、リンクが
  # リポジトリの skills/ に書き戻されてしまうので中断する。
  if [ -L "$DEST" ]; then
    resolved="$(cd "$DEST" && pwd -P)"
    case "$resolved" in
      "$REPO"|"$REPO"/*)
        echo "error: $DEST はこのリポジトリ内へのシンボリックリンクです ($resolved)。" >&2
        echo "rm \"$DEST\" してから再実行してください (実ディレクトリとして作り直します)。" >&2
        exit 1
        ;;
    esac
  fi

  [ "$dry_run" -eq 1 ] || mkdir -p "$DEST"

  for i in "${!names[@]}"; do
    name="${names[$i]}"
    src="${srcs[$i]}"
    link="$DEST/$name"

    if [ -e "$link" ] && [ ! -L "$link" ]; then
      echo "skip   $name ($DEST に同名の実体があります。退避してから再実行してください)" >&2
      continue
    fi

    if [ "$dry_run" -eq 1 ]; then
      echo "would link $name -> $src ($target: $DEST)"
    else
      ln -sfn "$src" "$link"
      echo "linked $name -> $src ($target: $DEST)"
    fi
  done
done
