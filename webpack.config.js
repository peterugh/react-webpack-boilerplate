var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // build css files

module.exports = {
  entry: './app/index.js',
  output: {
    path: __dirname,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'react-hot',
        include: __dirname,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        include: __dirname,
        query: {
          presets: [ 'es2015', 'react', 'stage-0' ]
        },
      },
      { 
        test: /\.css$/, 
        loader: 'style!css?modules&localIdentName=[local]___[hash:base64:5]',
        exclude: /node_modules/
      }
    ]
  }
};