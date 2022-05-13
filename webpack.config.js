const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const Dotenv = require('dotenv-webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const isDevelopment = !process.env.NODE_ENV !== 'production';

module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    app: './src/App.tsx',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{from: './public', to: './'}],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
    }),
    new Dotenv(),
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
    ...[isDevelopment && new ReactRefreshWebpackPlugin()].filter(Boolean),
  ],
  resolve: {
    modules: ['./node_modules'],
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/src'),
    },
    devMiddleware: {
      publicPath: 'https://localhost:8080/',
    },
    hot: 'only',
    host: 'localhost',
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /\.(js|jsx|tsx|ts)$/,
        include: path.resolve('src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
            },
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
  devtool: 'cheap-module-source-map',
};
