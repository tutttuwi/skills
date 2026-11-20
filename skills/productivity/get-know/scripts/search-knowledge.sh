#!/usr/bin/env bash
set -euo pipefail

# ナレッジ (Markdown) をすばやく探す補助スクリプト。読み取り専用。
#
# 使い方:
#   search-knowledge.sh search <dir> <keyword>...   キーワードで検索し、関連度順に表示
#   search-knowledge.sh list   <dir> [N]            新しい順に N 件 (既定 10) 表示
#   search-knowledge.sh links  <dir> <file>         ファイルが参照する [[リンク]] と、参照しているファイルを表示
#
# 環境変数:
#   LIMIT  search の最大表示件数 (既定 10)
#
# 関連度の点数 (大文字小文字は区別しない):
#   ファイル名に含む +3 / タイトルかタグに含む +3 / 本文に含む +1 (1 語につき最大 +5)
#   さらに、ヒットしたキーワードの種類ごとに +2。

SEP=$'\037'

usage() {
  sed -n '5,13p' "$0" | sed 's/^# \{0,1\}//' >&2
  exit 2
}

# ファイルから「タイトル、タグ、要約の先頭行」を SEP 区切りで出す
meta() {
  awk '
    NR == 1 && /^---[ \t]*$/ { fm = 1; next }
    fm == 1 && /^---[ \t]*$/ { fm = 2; next }
    fm == 1 && /^title:/ { sub(/^title:[ \t]*/, ""); title = $0 }
    fm == 1 && /^tags:/ { sub(/^tags:[ \t]*/, ""); tags = $0 }
    fm != 1 && title == "" && /^# / { sub(/^# /, ""); title = $0 }
    fm != 1 && /^## 要約/ { insum = 1; next }
    insum == 1 && /^[ \t]*$/ { next }
    insum == 1 && /^#/ { insum = 0 }
    insum == 1 && summary == "" { summary = $0; insum = 0 }
    END { printf "%s\037%s\037%s", title, tags, summary }
  ' "$1"
}

list_files() {
  find "$1" -type f -name '*.md' -not -path '*/.git/*' | sort
}

show() { # file score matched total
  local f=$1 score=$2 matched=$3 total=$4 title tags summary
  IFS="$SEP" read -r title tags summary < <(meta "$f") || true
  if [ -n "$score" ]; then
    printf '[点数 %s | %s/%s語] %s\n' "$score" "$matched" "$total" "$f"
  else
    printf '%s\n' "$f"
  fi
  [ -n "${title:-}" ] && printf '  タイトル: %s\n' "$title"
  [ -n "${tags:-}" ] && printf '  タグ: %s\n' "$tags"
  [ -n "${summary:-}" ] && printf '  要約: %s\n' "$summary"
  return 0
}

cmd_search() {
  [ $# -ge 2 ] || usage
  local dir=$1
  shift
  [ -d "$dir" ] || { echo "ディレクトリがありません: $dir" >&2; exit 1; }
  local total=$# limit=${LIMIT:-10} rows="" f base title tags summary score matched kw hit n
  while IFS= read -r f; do
    base=$(basename "$f")
    IFS="$SEP" read -r title tags summary < <(meta "$f") || true
    score=0
    matched=0
    for kw in "$@"; do
      hit=0
      if printf '%s' "$base" | grep -qiF -- "$kw"; then score=$((score + 3)); hit=1; fi
      if printf '%s %s' "${title:-}" "${tags:-}" | grep -qiF -- "$kw"; then score=$((score + 3)); hit=1; fi
      n=$(grep -ciF -- "$kw" "$f" || true)
      if [ "${n:-0}" -gt 0 ]; then
        score=$((score + (n > 5 ? 5 : n)))
        hit=1
      fi
      matched=$((matched + hit))
    done
    if [ "$matched" -gt 0 ]; then
      score=$((score + matched * 2))
      rows+="${score}${SEP}${matched}${SEP}${f}"$'\n'
    fi
  done < <(list_files "$dir")

  if [ -z "$rows" ]; then
    echo "見つかりませんでした: $*"
    return 0
  fi
  printf '%s' "$rows" | sort -t "$SEP" -k1,1nr -k3,3r | head -n "$limit" |
    while IFS="$SEP" read -r score matched f; do
      show "$f" "$score" "$matched" "$total"
    done
}

cmd_list() {
  [ $# -ge 1 ] || usage
  local dir=$1 limit=${2:-10} f
  [ -d "$dir" ] || { echo "ディレクトリがありません: $dir" >&2; exit 1; }
  list_files "$dir" | sort -r | head -n "$limit" | while IFS= read -r f; do
    show "$f" "" "" ""
  done
}

cmd_links() {
  [ $# -eq 2 ] || usage
  local dir=$1 file=$2 name
  [ -f "$file" ] || { echo "ファイルがありません: $file" >&2; exit 1; }
  name=$(basename "$file" .md)
  echo "## このファイルが参照している"
  grep -o '\[\[[^]]*\]\]' "$file" | sed 's/^\[\[//; s/\]\]$//; s/[#|].*//' | sort -u | sed 's/^/- /' || true
  echo
  echo "## このファイルを参照している"
  grep -rlF --include='*.md' -- "[[$name" "$dir" | grep -vxF -- "$file" | sort | sed 's/^/- /' || true
}

[ $# -ge 1 ] || usage
sub=$1
shift
case "$sub" in
  search) cmd_search "$@" ;;
  list) cmd_list "$@" ;;
  links) cmd_links "$@" ;;
  *) usage ;;
esac
