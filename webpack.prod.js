const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  entry: './index.ts',
  context: path.resolve(__dirname, 'src'),
  optimization: {
    mangleExports: 'size',
    minimize: true,
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
});