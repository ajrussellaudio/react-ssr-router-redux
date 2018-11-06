const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const browserConfig = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.BROWSER': true
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};

const serverConfig = {
  entry: path.resolve(__dirname, 'server', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['css-loader/locals']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BROWSER': false
    })
  ]
};

module.exports = [browserConfig, serverConfig];
