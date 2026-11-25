import { parseArgs } from 'node:util';
import { stringify } from 'yaml';
import { deckFrontmatter, resolveConfig } from './config.ts';
import { fail } from './shared.ts';

try {
  const { values, positionals } = parseArgs({
    allowPositionals: true,
    options: { frontmatter: { type: 'boolean' } },
  });
  if (positionals.length !== 1) {
    throw new Error('使い方: node scripts/resolve.ts presentation.yaml [--frontmatter]');
  }
  const config = resolveConfig(positionals[0]);
  if (values.frontmatter) {
    process.stdout.write('---\n' + stringify(deckFrontmatter(config), { blockQuote: 'literal' }) + '---\n');
  } else {
    process.stdout.write(stringify({ presentation: config }, { lineWidth: 0 }));
  }
} catch (error) {
  fail(error);
}
