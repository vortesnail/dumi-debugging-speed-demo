const { resolve } = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const glob = require('glob')
// const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const common = require('./webpack.common.js')
const { PROJECT_PATH, shouldOpenAnalyzer } = require('../constants')
const pkg = require('../../package.json')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'none',
  entry: {
    app: resolve(PROJECT_PATH, './src/index.umd.tsx'),
  },
  output: {
    filename: `${pkg.name}.min.js`,
    path: resolve(PROJECT_PATH, './dist/umd'),
    library: pkg.name,
    libraryTarget: 'umd',
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM',
    'antd': 'antd',
  },
  plugins: [
    // new CleanWebpackPlugin(),
    // new PurgeCSSPlugin({
    //   paths: glob.sync(`${resolve(PROJECT_PATH, './src')}/**/*.{tsx,scss,less,css}`, { nodir: true }),
    //   whitelist: ['html', 'body']
    // }),
    new webpack.BannerPlugin({
      raw: true,
      banner: '/** @preserve Powered by spark-design (https://github.com/vortesnail/react-ts-quick-starter) */',
    }),
    shouldOpenAnalyzer && new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: '127.0.0.1',
      analyzerPort: 8888,
    }),
    new MiniCssExtractPlugin({
      filename: `${pkg.name}.min.css`,
      ignoreOrder: false,
    }),
  ].filter(Boolean),
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: { pure_funcs: ['console.log'] },
        }
      }),
      new OptimizeCssAssetsPlugin()
    ].filter(Boolean),
  },
})
