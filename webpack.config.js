var webpack = require('webpack');

var config = {
  entry: './src',
  output: {
    path: './server/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  }
};
module.exports = config;