const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
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
    new CopyPlugin({
      patterns: [
        { from: './public', to: './' },
      ],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
    }),
    new Dotenv({ systemvars: true }),
    new WebpackPwaManifest({
      name: 'dooboo',
      short_name: 'dooboo',
      orientation: 'any',
      display: 'standalone',
      start_url: '/',
      description: 'dooboo web service',
      background_color: '#414d6b',
      theme_color: '#414d6b',
      icons: [
        {
          src: path.resolve('assets/icon192.png'),
          size: '192x192',
        },
        {
          src: path.resolve('assets/icon.png'),
          size: '512x512',
        },
      ],
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
        include: path.resolve('src'),
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
