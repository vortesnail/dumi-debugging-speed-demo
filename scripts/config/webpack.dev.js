const webpack = require('webpack')
const { resolve } = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const common = require('./webpack.common.js')
const { SERVER_HOST, SERVER_PORT, PROJECT_PATH } = require('../constants')

const proxySetting = require('../../src/setProxy.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    app: resolve(PROJECT_PATH, './src/display.tsx'),
  },
  output: {
    filename: 'js/[name].js',
    path: resolve(PROJECT_PATH, './build'),
  },
  devServer: {
    host: SERVER_HOST,
    port: SERVER_PORT, // 默认是8080
    stats: 'errors-only', // 终端仅打印 error
    clientLogLevel: 'silent', // 日志等级
    compress: true, // 是否启用 gzip 压缩
    open: true, // 打开默认浏览器
    hot: true, // 热更新
    proxy: { ...proxySetting }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(PROJECT_PATH, './public/index.html'),
      filename: 'index.html',
      cache: false,
      minify: false
    }),
    new CopyPlugin({
      patterns: [
        {
          context: resolve(PROJECT_PATH, './public'),
          from: '*',
          to: resolve(PROJECT_PATH, './build'),
          toType: 'dir',
        },
      ],
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    minimize: false,
    minimizer: [],
    splitChunks: {
      chunks: 'all',
      name: true,
    },
  },
})
