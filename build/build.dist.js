import { defineConfig } from 'rollup';
import {
  projectRoot, plugins, output, external, treeshake,
} from './build.config';

const input = `${projectRoot}/index.js`;

const basePlugins = [
  plugins.alias,
  plugins.vue,
  plugins.resolve,
  plugins.commonjs,
  plugins.json,
];

const baseExternal = external.vue;

export default defineConfig([
  {
    input,
    treeshake,
    output: {
      format: 'esm',
      file: 'dist/index.js',
      globals: output.globals,
    },
    plugins: [
      ...basePlugins,
    ],
    external: baseExternal,
  },
  {
    input,
    treeshake,
    output: {
      format: 'iife',
      file: 'dist/index.min.js',
      exports: 'named',
      name: output.name,
      globals: output.globals,
    },
    plugins: [
      ...basePlugins,
      plugins.terser,
    ],
    external: baseExternal,
  },
]);
