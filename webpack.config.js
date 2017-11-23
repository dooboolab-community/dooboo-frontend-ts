const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: './build/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/',
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
              modules: true
            },
          },
          { 
            loader: 'postcss-loader', 
            options: {
              ident: 'postcss',
              plugins: (loader) => [
                require('postcss-import')({ root: loader.resourcePath }),
                require('postcss-cssnext')(),
              ]
            }
          },
        ],
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
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
  devtool: 'inline-source-map'
};
