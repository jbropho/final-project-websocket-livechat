const path = require('path'),
  webpack = require('webpack'),
  bundlePath = path.resolve(__dirname, '/dist');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['env'] }
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    publicPath: bundlePath,
    filename: 'bundle.js'
  }
};
