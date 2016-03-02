var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // build css files

module.exports = {
  devtool: 'source-map',
  devServer: {
    progress: true,
  },
  entry: [
    './app/index.js'
  ],
  output: { 
    path: path.resolve(__dirname, 'www'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      { 
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]'), 
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/main.css"),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      'TweenLite': 'gsap/src/uncompressed/TweenLite',
      'TimelineLite': 'gsap/src/uncompressed/TimelineLite',
      'CSSPlugin': 'gsap/src/uncompressed/plugins/CSSPlugin',
      'EasePack': 'gsap/src/uncompressed/easing/EasePack'
    }
  }
};