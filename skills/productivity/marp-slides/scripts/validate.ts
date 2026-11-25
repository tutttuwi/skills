import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, sep } from 'node:path';
import { pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';
import puppeteer from 'puppeteer-core';
import { deckFrontmatter, resolveConfig } from './config.ts';
import { chromePath, fail, readDeck, render, sizes } from './shared.ts';

try {
  const { positionals, values } = parseArgs({
    allowPositionals: true,
    options: { config: { type: 'string' } },
  });
  if (positionals.length !== 1) {
    throw new Error('使い方: node scripts/validate.ts deck.md [--config presentation.yaml]');
  }

  const deck = readDeck(positionals[0]);
  if (values.config) {
    const config = resolveConfig(values.config);
    if (config.theme !== deck.directives.theme || config.aspect_ratio !== deck.size ||
        config.language !== deck.directives.lang) {
      throw new Error('設定 YAML とデッキの theme / size / lang が一致していません。');
    }
    const expected = deckFrontmatter(config).style;
    if (expected && (typeof deck.directives.style !== 'string' ||
        !deck.directives.style.startsWith(expected.trimEnd()))) {
      throw new Error('設定 YAML とデッキのブランド・モード・コントラストが一致していません。resolve.ts --frontmatter で更新してください。');
    }
  }

  const executablePath = chromePath();
  const work = mkdtempSync(join(tmpdir(), 'marp-validate-'));
  try {
    const html = join(work, 'deck.html');
    const base = pathToFileURL(dirname(deck.file) + sep).href;
    await render(deck.file, html, ['--template', 'bare', '--base-url', base]);
    const browser = await puppeteer.launch({ executablePath, headless: true });
    try {
      const page = await browser.newPage();
      await page.setRequestInterception(true);
      page.on('request', (request) => {
        if (/^(file|data|blob):/.test(request.url())) void request.continue();
        else void request.abort();
      });
      const [width, height] = sizes[deck.size];
      await page.setViewport({ width, height });
      await page.goto(pathToFileURL(html).href, { waitUntil: 'load' });
      const result = await page.evaluate(async (width, height) => {
        await document.fonts.ready;
        const selector = 'svg[data-marpit-svg] > foreignObject > section';
        const slides = [...document.querySelectorAll<HTMLElement>(selector)].filter((section) => {
          const layer = section.getAttribute('data-marpit-advanced-background');
          return layer === null || layer === 'content';
        });
        const htmlNamespace = 'http://www.w3.org/1999/xhtml';
        const errors = await Promise.all(slides.map(async (slide, index) => {
          const issues = new Set<string>();
          const { left, right, top, bottom } = slide.getBoundingClientRect();
          if (slide.offsetWidth !== width || slide.offsetHeight !== height) issues.add('寸法が一致しません');
          if (!slide.textContent?.trim() && !slide.querySelector('img, svg') &&
              !slide.closest('svg')?.querySelector('figure')) issues.add('内容が空です');

          function checkBounds(rect: DOMRect, label: string) {
            // Allow fractional pixels and glyph rounding.
            if (rect.width && rect.height &&
                (rect.left < left - 2 || rect.right > right + 2 || rect.top < top - 2 || rect.bottom > bottom + 2)) {
              issues.add('はみ出し ' + label);
            }
          }

          for (const element of slide.querySelectorAll('*')) {
            if (element.namespaceURI !== htmlNamespace && !(element instanceof SVGSVGElement)) continue;
            if (element.closest('.katex')) continue;
            if (getComputedStyle(element).visibility === 'hidden') continue;
            checkBounds(element.getBoundingClientRect(), element.tagName.toLowerCase());
            if (element instanceof HTMLImageElement && !element.naturalWidth) {
              issues.add('画像を読み込めません ' + element.getAttribute('src'));
            }
          }

          const walker = document.createTreeWalker(slide, NodeFilter.SHOW_TEXT);
          for (let node = walker.nextNode(); node; node = walker.nextNode()) {
            const parent = node.parentElement;
            const label = node.textContent?.trim();
            if (!parent || !label || parent.namespaceURI !== htmlNamespace ||
                parent.closest('.katex, script, style, template') ||
                getComputedStyle(parent).visibility === 'hidden') continue;
            const range = document.createRange();
            range.selectNodeContents(node);
            for (const rect of range.getClientRects()) checkBounds(rect, label.slice(0, 46));
          }

          const backgrounds = new Set<string>();
          const container = slide.closest('svg') ?? slide;
          for (const element of container.querySelectorAll('section, section *')) {
            if (element.namespaceURI !== htmlNamespace) continue;
            for (const match of getComputedStyle(element).backgroundImage.matchAll(/url\(["']?(.*?)["']?\)/g)) {
              backgrounds.add(match[1]);
            }
          }
          await Promise.all([...backgrounds].map(async (url) => {
            const image = new Image();
            image.src = url;
            try { await image.decode(); } catch { issues.add('背景画像を読み込めません ' + url); }
          }));
          return [...issues].map((issue) => `${index + 1}枚目: ${issue}`);
        }));
        return { count: slides.length, errors: errors.flat() };
      }, width, height);
      if (!result.count) throw new Error('レンダリングされたスライドがありません。');
      if (result.errors.length) throw new Error(result.errors.join('\n'));
      console.log(`${result.count}枚を検証しました (${width}×${height})。`);
    } finally {
      await browser.close();
    }
  } finally {
    rmSync(work, { recursive: true, force: true });
  }
} catch (error) {
  fail(error);
}
