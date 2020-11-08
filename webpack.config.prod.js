const path = require('path');
const manifest = require('./dist/manifest.json');
const { GenerateSW } = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const pwaPlugin = new WebpackPwaManifest(manifest);
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/App.tsx',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new Dotenv({ systemvars: true }),
    pwaPlugin,
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 5000000,
      exclude: [/\.(?:png|jpg|jpeg|svg)$/],
      runtimeCaching: [{
        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 10,
          },
        },
      }],
    }),
  ],
  resolve: {
    modules: ['./node_modules', './functions'],
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: [/node_modules/],
      },
      {
        test: /\.(png|jp(e*)g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
          },
        ],
      },
    ],
  },
};
