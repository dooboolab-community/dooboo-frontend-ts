const webpack = require('webpack');
const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: {
    app: './build/index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new DashboardPlugin(),
  ],
  resolve: {
    modules: [
      './node_modules',
    ],
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
  },
  devServer: {
    contentBase: __dirname + '/dist/',
    inline: true,
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 
          'style-loader',
          { 
            loader: 'css-loader',
            options: { 
              importLoaders: 1,
              modules: true,
            }
          },
          { 
            loader: 'postcss-loader', 
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-import')(),
                require('postcss-cssnext')(),
              ]
            }
          }
        ]
      }, 
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
  devtool: 'inline-source-map',
};
