'use strict';
var path = require('path')
,   webpack = require('webpack');

module.exports = {
  entry: './src/client.jsx',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    modulesDirectories: [ 'node_modules', 'src' ],
    extensions: [ '', '.js', '.jsx' ]
  },
  plugins: [],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, 'src'),
      loader: 'babel'
    }]
  }
};
