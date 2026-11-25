import { dirname, join, resolve } from 'node:path';
import { brandStyle, brands, contrasts, modes, presets, resolvePalette } from './design.ts';
import { ids, layoutIds, purposes, sizes, themeIds, yaml } from './shared.ts';

function record(value: unknown, label: string): Record<string, unknown> {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(label + ' はマッピングで指定してください。');
  }
  return value as Record<string, unknown>;
}

function choices(value: unknown, allowed: readonly string[], label: string) {
  if (typeof value !== 'string' || !allowed.includes(value)) {
    throw new Error(`${label} は ${allowed.join(', ')} から選択してください。`);
  }
  return value;
}

function nonempty(value: unknown, label: string) {
  if (typeof value !== 'string' || !value.trim()) throw new Error(label + ' は空にできません。');
  return value;
}

export const renderers = [
  'markdown', 'html', 'css', 'svg', 'mermaid', 'd2', 'plantuml', 'graphviz',
  'excalidraw', 'vega-lite', 'echarts', 'katex', 'lucide', 'iconify', 'simple-icons', 'shiki', 'image',
] as const;

export function resolveConfig(file: string) {
  const input = record(record(yaml(file), '設定').presentation, 'presentation');
  const purpose = choices(input.purpose, ids(purposes, '.yaml'), 'purpose');
  const purposeDefaults = yaml(join(purposes, purpose + '.yaml'));
  const objective = input.objective === undefined ? undefined : nonempty(input.objective, 'objective');
  const presetId = input.preset === undefined ? undefined : choices(input.preset, ids(presets, '.yaml'), 'preset');
  const pages: { role: string; layout: string; emphasis: string }[] | undefined =
    presetId === undefined ? undefined : yaml(join(presets, presetId + '.yaml')).pages;

  let design: {
    brand: string | { file: string };
    mode: string;
    contrast: string;
    palette: ReturnType<typeof resolvePalette>;
  } | undefined;
  if (input.brand !== undefined || input.mode !== undefined || input.contrast !== undefined) {
    if (input.brand === undefined) throw new Error('モードとコントラストを選ぶには brand を指定してください。');
    const brand = typeof input.brand === 'string'
      ? choices(input.brand, ids(brands, '.yaml'), 'brand')
      : { file: nonempty(record(input.brand, 'brand').file, 'brand.file') };
    const mode = choices(input.mode, modes, 'mode');
    const contrast = choices(input.contrast ?? 'standard', contrasts, 'contrast');
    const brandFile = typeof brand === 'string'
      ? join(brands, brand + '.yaml')
      : resolve(dirname(file), brand.file);
    design = { brand, mode, contrast, palette: resolvePalette(brandFile, mode, contrast) };
  }

  const style = { ...purposeDefaults.style, ...(input.style === undefined ? {} : record(input.style, 'style')) };
  choices(style.information_density, ['very-low', 'low', 'low-medium', 'medium', 'medium-high', 'high'], 'style.information_density');
  choices(style.visual_density, ['low', 'medium', 'high', 'very-high'], 'style.visual_density');
  choices(style.typography, ['extra-large', 'large', 'medium', 'medium-small'], 'style.typography');
  nonempty(style.tone, 'style.tone');
  nonempty(style.text_amount, 'style.text_amount');

  function list(key: string, allowed?: readonly string[], defaults = purposeDefaults[key]) {
    const value = input[key] ?? defaults;
    if (!Array.isArray(value)) throw new Error(key + ' は配列で指定してください。');
    return value.map((entry) => allowed ? choices(entry, allowed, key) : nonempty(entry, key));
  }

  return {
    purpose,
    ...(objective !== undefined && { objective }),
    ...(presetId !== undefined && { preset: presetId, pages }),
    ...(design ?? {}),
    theme: choices(input.theme ?? (design ? 'modern' : purposeDefaults.theme), themeIds(), 'theme'),
    audience: nonempty(input.audience ?? purposeDefaults.audience, 'audience'),
    language: nonempty(input.language ?? 'ja', 'language'),
    aspect_ratio: choices(input.aspect_ratio ?? '16:9', Object.keys(sizes), 'aspect_ratio'),
    style,
    narrative: purposeDefaults.narrative,
    preferred_layouts: list('preferred_layouts', layoutIds(),
      pages?.length ? pages.map(({ layout }) => layout) : purposeDefaults.preferred_layouts),
    preferred_renderers: list('preferred_renderers', renderers),
    avoid: list('avoid'),
  };
}

export function deckFrontmatter(config: ReturnType<typeof resolveConfig>) {
  return {
    marp: true,
    theme: config.theme,
    size: config.aspect_ratio,
    lang: config.language,
    paginate: true,
    ...(config.palette && { style: brandStyle(config.palette) }),
  };
}
