import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { references, yaml } from './shared.ts';

export const brands = join(references, 'brands');
export const presets = join(references, 'presets');
export const modes = ['light', 'dark'] as const;
export const contrasts = ['standard', 'high'] as const;

const roles = ['paper', 'surface', 'ink', 'muted', 'accent', 'secondary', 'accent_surface',
  'line', 'high_accent', 'high_secondary'] as const;

function luminance(hex: string) {
  const rgb = [1, 3, 5].map((start) => {
    const s = Number.parseInt(hex.slice(start, start + 2), 16) / 255;
    return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}

export function resolvePalette(file: string, mode: string, contrast: string) {
  const definition = yaml(file);
  const colors = definition?.[mode];
  for (const role of roles) {
    if (typeof colors?.[role] !== 'string' || !/^#[0-9a-f]{6}$/i.test(colors[role])) {
      throw new Error(`${file} の ${mode}.${role} を #RRGGBB で指定してください。`);
    }
  }

  const high = contrast === 'high';
  const palette = {
    paper: colors.paper as string,
    surface: colors.surface as string,
    ink: colors.ink as string,
    muted: (high ? colors.ink : colors.muted) as string,
    accent: (high ? colors.high_accent : colors.accent) as string,
    'brand-secondary': (high ? colors.high_secondary : colors.secondary) as string,
    'brand-accent-surface': colors.accent_surface as string,
    line: colors.line as string,
  };
  const minimum = high ? 7 : 4.5;
  for (const foreground of ['ink', 'muted', 'accent', 'brand-secondary'] as const) {
    for (const background of ['paper', 'surface', 'brand-accent-surface'] as const) {
      const fg = luminance(palette[foreground]);
      const bg = luminance(palette[background]);
      const ratio = (Math.max(fg, bg) + 0.05) / (Math.min(fg, bg) + 0.05);
      if (ratio < minimum) {
        throw new Error(`${mode}/${contrast} の ${foreground} と ${background} のコントラスト ${ratio.toFixed(2)}:1 は ${minimum}:1 未満です。`);
      }
    }
  }
  return palette;
}

export function brandStyle(palette: ReturnType<typeof resolvePalette>) {
  const tokens = Object.entries(palette).map(([role, color]) => `  --${role}: ${color};`).join('\n');
  const components = readFileSync(join(references, 'brand-components.css'), 'utf8').trimEnd();
  return `section {\n${tokens}\n}\n${components}\n`;
}
