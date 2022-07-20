/// <reference types="vitest" />
/// <reference types="vite/client" />

import {VitePWA} from 'vite-plugin-pwa';
import babel from 'vite-plugin-babel';
import {defineConfig} from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({
      babelConfig: {
        babelrc: false,
        configFile: false,
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
        plugins: [
          VitePWA({
            injectRegister: 'auto',
          }),
          [
            '@emotion',
            '@babel/plugin-transform-runtime',
            'babel-plugin-fbt',
            {
              // We can also provide the fbt enum manifest directly as a JS variable
              // fbtEnumManifest: require('./.enum_manifest.json'),
              fbtEnumPath: path.join(__dirname, '.enum_manifest.json'),
            },
          ],
          'babel-plugin-fbt-runtime',
        ],
      },
    }),
  ],
});
