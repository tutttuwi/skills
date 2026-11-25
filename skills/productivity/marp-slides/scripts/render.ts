import { mkdirSync, mkdtempSync, readdirSync, renameSync, rmSync } from 'node:fs';
import { dirname, basename, extname, join } from 'node:path';
import { parseArgs } from 'node:util';
import { chromePath, fail, readDeck, render } from './shared.ts';

async function renderPreviews(file: string, directory: string, stem: string, browser: string) {
  const staging = mkdtempSync(join(directory, '.' + stem + '-render-'));
  try {
    await render(file, join(staging, stem + '.png'), ['--images', 'png'], browser);
    const isSlide = (name: string) => name.startsWith(stem + '.') &&
      /^(?:[0-9]{3,}\.)?png$/.test(name.slice(stem.length + 1));
    const current = new Set(readdirSync(staging).filter(isSlide));
    if (!current.size) throw new Error('PNG の出力がありません。');
    const previews = join(directory, stem + '-previews');
    mkdirSync(previews, { recursive: true });
    for (const name of current) renameSync(join(staging, name), join(previews, name));
    for (const entry of readdirSync(previews, { withFileTypes: true })) {
      if (entry.isFile() && isSlide(entry.name) && !current.has(entry.name)) rmSync(join(previews, entry.name));
    }
    console.log(`${current.size}枚の PNG を保存しました ${previews}`);
  } finally {
    rmSync(staging, { recursive: true, force: true });
  }
}

try {
  const { positionals, values } = parseArgs({
    allowPositionals: true,
    options: { format: { type: 'string', default: 'pdf,png' } },
  });
  if (positionals.length !== 1) {
    throw new Error('使い方: node scripts/render.ts deck.md [--format html,pdf,png,pptx]');
  }

  const formats = [...new Set(values.format.split(',').map((item) => item.trim()))];
  if (formats.some((item) => !['html', 'pdf', 'png', 'pptx'].includes(item))) {
    throw new Error('--format には html,pdf,png,pptx を指定できます。');
  }

  const { file } = readDeck(positionals[0]);
  const directory = dirname(file);
  const stem = basename(file, extname(file));
  const browser = formats.some((format) => format !== 'html') ? chromePath() : undefined;
  for (const format of formats) {
    if (format === 'png') {
      await renderPreviews(file, directory, stem, browser!);
    } else {
      await render(file, join(directory, stem + '.' + format), format === 'html' ? [] : ['--' + format],
        format === 'html' ? undefined : browser);
    }
  }
} catch (error) {
  fail(error);
}
