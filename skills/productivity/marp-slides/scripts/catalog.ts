import { copyFileSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { parseArgs } from 'node:util';
import { resolveConfig, renderers } from './config.ts';
import { brands, contrasts, modes, presets, resolvePalette } from './design.ts';
import { chromePath, fail, ids, layoutIds, layouts, purposes, readDeck, render, themeIds, themes, yaml } from './shared.ts';

function readCatalog() {
  const layoutsByTheme = new Map<string, { directory: string; body: string }[]>();
  const layoutOrder = readFileSync(join(layouts, 'index.md'), 'utf8');
  const allLayouts = layoutIds();
  if (!allLayouts.length) throw new Error('レイアウトが登録されていません。');
  for (const id of allLayouts) {
    const directory = join(layouts, id);
    const definition = yaml(join(directory, 'layout.yaml'));
    const file = join(directory, definition.template);
    const { directives, size } = readDeck(file);
    if (size !== '16:9' || directives.theme !== definition.preview_theme || definition.id !== id ||
        definition.template !== 'slide.md' || definition.preview !== 'preview.png' ||
        !definition.selection_rules?.suitable_for?.length || !definition.selection_rules?.unsuitable_for?.length ||
        !definition.renderers?.length || definition.renderers.some((entry: typeof renderers[number]) => !renderers.includes(entry))) {
      throw new Error(id + ' の YAML とテンプレートを確認してください。');
    }
    readFileSync(join(directory, definition.stylesheet));
    if (!layoutOrder.includes(`(${id}/layout.yaml)`)) throw new Error(id + ' が一覧にありません。');
    const deck = readFileSync(file, 'utf8').split(/^---[ \t]*\r?$/m);
    if (deck.length !== 3 || !deck[2].trim()) throw new Error(id + ' のテンプレートを1ページにしてください。');
    const body = deck[2].trim().replaceAll('../cover.svg', './cover.svg');
    const entries = layoutsByTheme.get(directives.theme) ?? [];
    entries.push({ directory, body });
    layoutsByTheme.set(directives.theme, entries);
  }
  return layoutsByTheme;
}

function checkPreviews(catalog: ReturnType<typeof readCatalog>) {
  const images = [
    ...[...catalog.values()].flat().map(({ directory }) => join(directory, 'preview.png')),
    ...themeIds().map((id) => join(themes, 'previews', id + '.png')),
  ];
  for (const file of images) {
    const png = readFileSync(file);
    if (png.length < 24 || png.toString('hex', 0, 8) !== '89504e470d0a1a0a' ||
        png.readUInt32BE(16) !== 640 || png.readUInt32BE(20) !== 360) {
      throw new Error(file + ' の PNG は 640×360 にしてください。');
    }
  }
}

async function buildPreviews(catalog: ReturnType<typeof readCatalog>) {
  const browser = chromePath();
  const work = mkdtempSync(join(tmpdir(), 'marp-layouts-'));
  try {
    copyFileSync(join(layouts, 'cover.svg'), join(work, 'cover.svg'));
    for (const [theme, entries] of catalog) {
      const file = join(work, theme + '.md');
      const markdown = ['---', 'marp: true', 'theme: ' + theme, 'size: 16:9', 'lang: ja', '---', '',
        entries.map(({ body }) => body).join('\n\n---\n\n'), ''].join('\n');
      writeFileSync(file, markdown);
      await render(file, join(work, theme + '.png'), ['--images', 'png', '--image-scale', '0.5'], browser);
      const images = readdirSync(work).filter((name) =>
        name.startsWith(theme + '.') && name.endsWith('.png')).sort();
      if (images.length !== entries.length) throw new Error(theme + ' の PNG 枚数が一致しません。');
      entries.forEach(({ directory }, index) => copyFileSync(join(work, images[index]), join(directory, 'preview.png')));
    }
    const sample = readFileSync(join(layouts, 'L03', 'slide.md'), 'utf8');
    for (const theme of themeIds()) {
      const file = join(work, 'theme-' + theme + '.md');
      const output = join(work, 'theme-' + theme + '.png');
      writeFileSync(file, sample.replace(/^theme: .*$/m, 'theme: ' + theme));
      await render(file, output, ['--image', 'png', '--image-scale', '0.5'], browser);
      copyFileSync(output, join(themes, 'previews', theme + '.png'));
    }
  } finally {
    rmSync(work, { recursive: true, force: true });
  }
}

try {
  const { values } = parseArgs({ options: { check: { type: 'boolean' } } });
  const catalog = readCatalog();
  const purposeIds = ids(purposes, '.yaml');
  const work = mkdtempSync(join(tmpdir(), 'marp-purposes-'));
  try {
    const config = join(work, 'presentation.yaml');
    for (const id of purposeIds) {
      writeFileSync(config, 'presentation:\n  purpose: ' + id + '\n');
      const preset = resolveConfig(config);
      if (!Array.isArray(preset.narrative) || !preset.narrative.length ||
          !preset.preferred_layouts.length || !preset.preferred_renderers.length) {
        throw new Error(id + ' の目的定義が不足しています。');
      }
    }
  } finally {
    rmSync(work, { recursive: true, force: true });
  }
  for (const id of themeIds()) {
    const css = readFileSync(join(themes, id + '.css'), 'utf8');
    if (!css.includes('/* @theme ' + id + ' */')) throw new Error(id + ' の @theme が一致しません。');
  }
  const knownLayouts = layoutIds();
  for (const id of ids(presets, '.yaml')) {
    const preset = yaml(join(presets, id + '.yaml'));
    if (preset.id !== id || !preset.name || !Array.isArray(preset.pages) ||
        (id !== 'flexible' && !preset.pages.length) ||
        preset.pages.some((page: { role: string; layout: string; emphasis: string }) =>
          !page.role || !page.emphasis || !knownLayouts.includes(page.layout))) {
      throw new Error(id + ' の資料プリセットが不正です。');
    }
  }
  for (const id of ids(brands, '.yaml')) {
    const file = join(brands, id + '.yaml');
    for (const mode of modes) {
      for (const contrast of contrasts) resolvePalette(file, mode, contrast);
    }
  }
  if (!values.check) await buildPreviews(catalog);
  checkPreviews(catalog);
  console.log(`${purposeIds.length}目的、${ids(presets, '.yaml').length}プリセット、${ids(brands, '.yaml').length}ブランド（全モード・コントラスト）、${themeIds().length}テーマ、${knownLayouts.length}レイアウトを検証しました。`);
} catch (error) {
  fail(error);
}
