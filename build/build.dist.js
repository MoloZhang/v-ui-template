import {
  projectRoot, plugins, output, external,
} from './build.config';

const input = `${projectRoot}/index.js`;

const basePlugins = [
  plugins.alias,
  plugins.vue,
  plugins.resolve,
  plugins.commonjs,
];

export default [
  {
    input,
    output: {
      format: 'esm',
      file: 'dist/index.js',
      globals: output.globals,
    },
    plugins: [
      ...basePlugins,
      plugins.postcss(),
    ],
    external: external.vue,
  },
  {
    input,
    output: {
      format: 'iife',
      file: 'dist/index.min.js',
      exports: 'named',
      name: output.name,
      globals: output.globals,
    },
    plugins: [
      ...basePlugins,
      plugins.postcss(),
      plugins.terser,
    ],
    external: external.vue,
  },
  {
    input,
    output: {
      format: 'esm',
      file: 'dist/index.sep.js',
      globals: output.globals,
    },
    plugins: [
      ...basePlugins,
      plugins.postcss({
        minimize: false,
        extract: 'index.css',
      }),
    ],
    external: external.vue,
  },
  {
    input,
    output: {
      format: 'iife',
      file: 'dist/index.sep.min.js',
      exports: 'named',
      name: output.name,
      globals: output.globals,
    },
    plugins: [
      ...basePlugins,
      plugins.postcss({
        extract: 'index.min.css',
      }),
      plugins.terser,
    ],
    external: external.vue,
  },
];