const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: './src/App.tsx',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
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
            query: {
              cacheDirectory: true,
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                [
                  '@babel/plugin-transform-runtime',
                  {
                    helpers: true,
                    regenerator: false,
                  },
                ],
              ],
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
};
