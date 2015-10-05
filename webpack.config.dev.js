'use strict';
var path = require('path')
,   webpack = require('webpack')
,   productionConfig = require('./webpack.config.prod');

Object.assign = require('object-assign');

module.exports = Object.assign(productionConfig, {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/client.jsx'
  ],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, 'src'),
      loader: 'babel'
    }]
  }
});
