import { accessSync, constants, readFileSync, readdirSync, statSync } from 'node:fs';
import { delimiter, extname, join, resolve } from 'node:path';
import { marpCli } from '@marp-team/marp-cli';
import { parse } from 'yaml';

export const references = resolve(import.meta.dirname, '../references');
export const layouts = join(references, 'layouts');
export const themes = join(references, 'themes');
export const purposes = join(references, 'purposes');

export function yaml(file: string) {
  return parse(readFileSync(file, 'utf8'));
}

export function ids(directory: string, extension: string): string[] {
  return readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(extension))
    .map((entry) => entry.name.slice(0, -extension.length))
    .sort();
}

export function themeIds(): string[] {
  return ids(themes, '.css').filter((id) => id !== 'base');
}

export function layoutIds(): string[] {
  return readdirSync(layouts, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^[A-Z][0-9]{2}$/.test(entry.name))
    .map((entry) => entry.name)
    .sort();
}

export const sizes = { '16:9': [1280, 720], '4:3': [960, 720] } as const;

export function readDeck(path: string) {
  const file = resolve(path);
  if (extname(file).toLowerCase() !== '.md') throw new Error('入力には .md ファイルを指定してください。');
  const source = readFileSync(file, 'utf8');
  const header = source.match(/^\uFEFF?---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/);
  const directives = header ? parse(header[1]) : null;
  if (directives?.marp !== true) throw new Error('フロントマターに marp: true を指定してください。');
  if (!themeIds().includes(directives.theme)) {
    throw new Error('フロントマターに登録済みの theme を指定してください。候補 ' + themeIds().join(', '));
  }
  const size = directives.size ?? '16:9';
  if (!Object.hasOwn(sizes, size)) throw new Error('size には 16:9 または 4:3 を指定してください。');
  return { file, directives, size: size as keyof typeof sizes };
}

export function chromePath(): string {
  const candidates = process.env.CHROME_PATH || process.env.BROWSER_PATH
    ? [resolve(process.env.CHROME_PATH || process.env.BROWSER_PATH!)]
    : [
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        '/Applications/Chromium.app/Contents/MacOS/Chromium',
        join(process.env.LOCALAPPDATA ?? 'C:/Users/Public', 'Google/Chrome/Application/chrome.exe'),
        join(process.env.ProgramFiles ?? 'C:/Program Files', 'Google/Chrome/Application/chrome.exe'),
        ...String(process.env.PATH ?? '').split(delimiter).filter(Boolean).flatMap((directory) =>
          ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser', 'chrome', 'chrome.exe']
            .map((name) => join(directory, name))),
      ];
  const browser = candidates.find((candidate) => {
    try {
      accessSync(candidate, constants.X_OK);
      return statSync(candidate).isFile();
    } catch {
      return false;
    }
  });
  if (!browser) throw new Error('Chrome または Chromium の実行ファイルを CHROME_PATH に指定してください。');
  return browser;
}

export async function render(file: string, output: string, options: string[] = [], browser?: string) {
  const args = [
    '--no-config-file', '--html', '--theme-set', themes,
    ...(browser ? ['--browser', 'chrome', '--browser-path', browser, '--allow-local-files'] : []),
    ...options, '-o', output, '--', file,
  ];
  const code = await marpCli(args);
  if (code !== 0) throw new Error(`Marp の出力に失敗しました (exit ${code})。`);
}

export function fail(error: unknown) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
