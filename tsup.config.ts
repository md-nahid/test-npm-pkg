import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    button: 'src/button.tsx',
    input: 'src/input.tsx',
  },
  format: ['esm'],
  dts: true,
  clean: true,
  minify: true,
  sourcemap: false,
  treeshake: true,
  bundle: true,
  external: ['react', 'react-dom'],
});
