import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  minify: true,
  sourcemap: false,
  treeshake: true,
  bundle: true,
  external: ['react', 'react-dom'],
});
