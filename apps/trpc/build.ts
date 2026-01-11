import cleanPlugin from '@shellicar/build-clean/esbuild';
import * as esbuild from 'esbuild';

const watch = process.argv.includes('--watch');

const ctx = await esbuild.context({
  entryPoints: ['src/functions/*.ts'],
  bundle: true,
  platform: 'node',
  target: 'node22',
  format: 'esm',
  outdir: 'dist',
  entryNames: 'functions/[name]',
  chunkNames: 'chunks/[name]-[hash]',
  outExtension: { '.js': '.mjs' },
  packages: 'external',
  sourcemap: true,
  minify: false,
  splitting: true,
  plugins: [cleanPlugin({ destructive: true })],
});

if (watch) {
  await ctx.watch();
  console.log('Watching for changes...');
} else {
  await ctx.rebuild();
  await ctx.dispose();
}
