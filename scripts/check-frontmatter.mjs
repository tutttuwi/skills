// 全 SKILL.md の frontmatter を `yaml` でパースして検証する。
// `skills` インストーラと同じパーサを使うので、インストール時に
// スキップされるスキルをここで先に落とせる。
// 検証内容: frontmatter があること / YAML として正しいこと /
// name と description が空でないこと / name がディレクトリ名と一致すること /
// name が小文字英数字とハイフンのみであること / description が 1024 文字以内であること。
import { readFileSync, readdirSync } from "node:fs";
import { basename, dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { parseDocument } from "yaml";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function* skillFiles(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules") continue;
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* skillFiles(path);
    else if (entry.name === "SKILL.md") yield path;
  }
}

const NAME_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;

const failures = [];
let count = 0;

for (const file of skillFiles(join(root, "skills"))) {
  count += 1;
  const where = relative(root, file);
  const match = readFileSync(file, "utf8").match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) {
    failures.push(`${where}: frontmatter ブロックがありません`);
    continue;
  }
  const doc = parseDocument(match[1], { strict: true, uniqueKeys: true });
  if (doc.errors.length > 0) {
    failures.push(`${where}: ${doc.errors[0].message.split("\n")[0]}`);
    continue;
  }
  const data = doc.toJS();
  for (const key of ["name", "description"]) {
    if (typeof data?.[key] !== "string" || data[key].trim() === "") {
      failures.push(`${where}: \`${key}\` がありません`);
    }
  }
  if (typeof data?.name === "string") {
    if (data.name !== basename(dirname(file))) {
      failures.push(
        `${where}: name "${data.name}" がディレクトリ名 "${basename(dirname(file))}" と一致しません`,
      );
    }
    // OpenCode / Agent Skills 仕様: 小文字英数字とハイフン、64 文字以内
    if (!NAME_PATTERN.test(data.name) || data.name.length > 64) {
      failures.push(
        `${where}: name "${data.name}" は小文字英数字とハイフンのみ (64 文字以内、先頭末尾と連続のハイフン不可) にしてください`,
      );
    }
  }
  if (typeof data?.description === "string" && data.description.length > 1024) {
    failures.push(`${where}: description が 1024 文字を超えています`);
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  console.error(
    `\n${failures.length} 件の SKILL.md frontmatter エラー。": " を含む値や YAML の記号で始まる値はクォートしてください。`,
  );
  process.exit(1);
}
console.log(`SKILL.md ${count} 件の frontmatter はすべて有効です。`);
