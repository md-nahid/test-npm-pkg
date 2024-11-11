import { defineConfig } from 'tsup';
// import fs from 'fs';
// import path from 'path';

// function readFilesRecursively(directory: string) {
//   const files: string[] = [];

//   function read(directory: string) {
//     const entries = fs.readdirSync(directory);

//     entries.forEach((entry) => {
//       const fullPath = path.join(directory, entry);
//       const stat = fs.statSync(fullPath);

//       if (stat.isDirectory()) {
//         read(fullPath);
//       } else {
//         files.push(fullPath);
//       }
//     });
//   }

//   read(directory);
//   return files;
// }

// async function addDirectivesToChunkFiles(distPath = 'dist'): Promise<void> {
//   try {
//     const files = readFilesRecursively(distPath);

//     for (const file of files) {
//       /**
//        * Skip files that are not chunk files
//        * */
//       const isIgnoreFile = !file.includes('chunk-');

//       if (isIgnoreFile) {
//         console.log(`⏭️ Directive 'use client'; has been skipped for ${file}`);
//         continue;
//       }

//       const filePath = path.join('', file);

//       const data = await fs.promises.readFile(filePath, 'utf8');

//       const updatedContent = `"use client";${data}`;

//       await fs.promises.writeFile(filePath, updatedContent, 'utf8');

//       console.log(`💚 Directive 'use client'; has been added to ${file}`);
//     }
//   } catch (err) {
//     console.error('⚠️ Something error:', err);
//   }
// }

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    accordion: 'src/components/accordion/index.ts',
    // 'accordion-header': 'src/components/accordion/accordion-header.tsx',
    // 'accordion-body': 'src/components/accordion/accordion-body.tsx',
    // 'action-icon': 'src/components/action-icon/action-icon.tsx',
    // 'advanced-checkbox':
    //   'src/components/advanced-checkbox/advanced-checkbox.tsx',
    // 'advanced-radio': 'src/components/advanced-radio/advanced-radio.tsx',
    // alert: 'src/components/alert/alert.tsx',
    // announcement: 'src/components/announcement/announcement.tsx',
    // avatar: 'src/components/avatar/avatar.tsx',
    // badge: 'src/components/badge/badge.tsx',
    // button: 'src/components/button/button.tsx',
    // checkbox: 'src/components/checkbox/checkbox.tsx',
    // 'checkbox-group': 'src/components/checkbox-group/checkbox-group.tsx',
    // collapse: 'src/components/collapse/collapse.tsx',
    // drawer: 'src/components/drawer/drawer.tsx',
    // dropdown: 'src/components/dropdown/dropdown.tsx',
    // 'dropdown-trigger': 'src/components/dropdown/dropdown-trigger.tsx',
    // 'dropdown-menu': 'src/components/dropdown/dropdown-menu.tsx',
    // 'dropdown-item': 'src/components/dropdown/dropdown-item.tsx',
    // empty: 'src/components/empty/empty.tsx',
    // input: 'src/components/input/input.tsx',
    // box: 'src/components/layouts/box/box.tsx',
    // flex: 'src/components/layouts/flex/flex.tsx',
    // grid: 'src/components/layouts/grid/grid.tsx',
    // 'grid-col': 'src/components/layouts/grid/grid-col.tsx',
    // loader: 'src/components/loader/index.ts',
    // modal: 'src/components/modal/modal.tsx',
    // 'multi-select': 'src/components/multi-select/multi-select.tsx',
    // 'number-input': 'src/components/number-input/number-input.tsx',
    // password: 'src/components/password/password.tsx',
    // 'pin-code': 'src/components/pin-code/pin-code.tsx',
    // popover: 'src/components/popover/popover.tsx',
    // 'popover-trigger': 'src/components/popover/popover-trigger.tsx',
    // 'popover-content': 'src/components/popover/popover-content.tsx',
    // progressbar: 'src/components/progressbar/progressbar.tsx',
    // 'radial-progressbar':
    //   'src/components/radial-progressbar/radial-progressbar.tsx',
    // radio: 'src/components/radio/radio.tsx',
    // 'radio-group': 'src/components/radio-group/radio-group.tsx',
    // select: 'src/components/select/select.tsx',
    // stepper: 'src/components/stepper/stepper.tsx',
    // step: 'src/components/stepper/step.tsx',
    // switch: 'src/components/switch/switch.tsx',
    // table: 'src/components/table/table.tsx',
    // tabs: 'src/components/tabs/index.ts',
    // textarea: 'src/components/textarea/textarea.tsx',
    // tooltip: 'src/components/tooltip/tooltip.tsx',
    // typography: 'src/components/typography/index.ts',
    // upload: 'src/components/upload/file-input.tsx',
    // 'field-clear-button': 'src/components/field-clear-button.tsx',
    // 'field-error-text': 'src/components/field-error-text.tsx',
    // 'field-helper-text': 'src/components/field-helper-text.tsx',
    // highlight: 'src/components/highlight.tsx',
  },
  format: ['esm'],
  dts: true,
  clean: true,
  minify: true,
  sourcemap: false,
  // splitting: true,
  treeshake: true,
  bundle: true,
  // minifyWhitespace: true,
  external: ['react', 'react-dom', 'tailwindcss'],
  // onSuccess: async () => {
  //   await addDirectivesToChunkFiles();
  // },
});
