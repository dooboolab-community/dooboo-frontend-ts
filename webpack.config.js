const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: './build/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      './node_modules',
    ],
    extensions: ['.js', 'jsx'],
  },
  devServer: {
    contentBase: __dirname + '/dist/',
    inline: true,
    host: 'localhost',
    port: 8080,
  },
  module: {
    rules: [
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
      {
        test: /\.jsx?$/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['react', 'env', 'stage-0'] },
        }],
        exclude: [/node_modules/]
      }
    ]
  },
  devtool: 'inline-source-map'
};
