const merge = require('webpack-merge')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': 'development'
    }),
    new FriendlyErrorsPlugin()
  ]
})