const webpack = require('webpack');
const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: {
    app: './src/index.tsx',
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
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['react', 'env', 'stage-0'] },
          },
          {
            loader: 'ts-loader',
          },
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.js(x?)$/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['react', 'env', 'stage-0'] },
          },
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.css$/,
        use: [ 
          'style-loader',
          { 
            loader: 'css-loader',
            options: { 
              importLoaders: 1,
              // module: true,
              // you can remove the comment in above code if you wanna uglify css classnames to scope to specific component
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
          },
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
};
