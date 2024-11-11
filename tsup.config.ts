import { defineConfig } from 'tsup';
import fs from 'fs';
import path from 'path';

function readFilesRecursively(directory: string) {
  const files: string[] = [];

  function read(directory: string) {
    const entries = fs.readdirSync(directory);

    entries.forEach((entry) => {
      const fullPath = path.join(directory, entry);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        read(fullPath);
      } else {
        files.push(fullPath);
      }
    });
  }

  read(directory);
  return files;
}

async function addDirectivesToChunkFiles(distPath = 'dist'): Promise<void> {
  try {
    const files = readFilesRecursively(distPath);

    for (const file of files) {
      /**
       * Skip files that are not chunk files
       * */
      const isIgnoreFile = !file.includes('chunk-');

      if (isIgnoreFile) {
        console.log(`⏭️ Directive 'use client'; has been skipped for ${file}`);
        continue;
      }

      const filePath = path.join('', file);

      const data = await fs.promises.readFile(filePath, 'utf8');

      const updatedContent = `"use client";${data}`;

      await fs.promises.writeFile(filePath, updatedContent, 'utf8');

      console.log(`💚 Directive 'use client'; has been added to ${file}`);
    }
  } catch (err) {
    console.error('⚠️ Something error:', err);
  }
}

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    accordion: 'src/components/accordion/index.ts',
    'action-icon': 'src/components/action-icon/index.ts',
    'advanced-checkbox': 'src/components/advanced-checkbox/index.ts',
    'advanced-radio': 'src/components/advanced-radio/index.ts',
    alert: 'src/components/alert/index.ts',
    announcement: 'src/components/announcement/index.ts',
    avatar: 'src/components/avatar/index.ts',
    badge: 'src/components/badge/index.ts',
    button: 'src/components/button/index.ts',
    checkbox: 'src/components/checkbox/index.ts',
    'checkbox-group': 'src/components/checkbox-group/index.ts',
    collapse: 'src/components/collapse/index.ts',
    drawer: 'src/components/drawer/index.ts',
    dropdown: 'src/components/dropdown/index.ts',
    empty: 'src/components/empty/index.ts',
    input: 'src/components/input/index.ts',
    box: 'src/components/layouts/box/index.ts',
    flex: 'src/components/layouts/flex/index.ts',
    grid: 'src/components/layouts/grid/index.ts',
    loader: 'src/components/loader/index.ts',
    modal: 'src/components/modal/index.ts',
    'multi-select': 'src/components/multi-select/index.ts',
    'number-input': 'src/components/number-input/index.ts',
    password: 'src/components/password/index.ts',
    'pin-code': 'src/components/pin-code/index.ts',
    popover: 'src/components/popover/index.ts',
    progressbar: 'src/components/progressbar/index.ts',
    'radial-progressbar': 'src/components/radial-progressbar/index.ts',
    radio: 'src/components/radio/index.ts',
    'radio-group': 'src/components/radio-group/index.ts',
    select: 'src/components/select/index.ts',
    stepper: 'src/components/stepper/index.ts',
    switch: 'src/components/switch/index.ts',
    table: 'src/components/table/index.ts',
    tabs: 'src/components/tabs/index.ts',
    textarea: 'src/components/textarea/index.ts',
    tooltip: 'src/components/tooltip/index.ts',
    typography: 'src/components/typography/index.ts',
    upload: 'src/components/upload/index.ts',
    'field-clear-button': 'src/components/field-clear-button.tsx',
    'field-error-text': 'src/components/field-error-text.tsx',
    'field-helper-text': 'src/components/field-helper-text.tsx',
    highlight: 'src/components/highlight.tsx',
  },
  format: ['esm'],
  dts: true,
  clean: true,
  minify: true,
  sourcemap: false,
  splitting: true,
  treeshake: true,
  bundle: true,
  minifyWhitespace: true,
  external: ['react', 'react-dom', 'tailwindcss'],
  onSuccess: async () => {
    await addDirectivesToChunkFiles();
  },
});
