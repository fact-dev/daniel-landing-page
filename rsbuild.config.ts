import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginBabel } from '@rsbuild/plugin-babel';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [
    pluginReact(),
    pluginBabel({
      babelLoaderOptions: (_, { addPresets }) => {
        addPresets([['@babel/preset-react', { runtime: 'automatic' }]]);
      },
    }),
  ],
  output: {
    distPath: { root: 'dist', js: 'static/js', css: 'static/css' },
  },
  server: {
    // Força os caminhos do index.html a começarem com '/'
    publicDir: {
      name: './public',
    },
  },
  tools: {
    bundlerChain: (chain, { CHAIN_ID }) => {
      chain.module
        .rule(CHAIN_ID.RULE.JS)
        .use(CHAIN_ID.USE.SWC)
        .after(CHAIN_ID.USE.BABEL)
        .loader('@wyw-in-js/webpack-loader');
    },
  },
});
