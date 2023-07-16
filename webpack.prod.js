const path = require("path")
const base = require("./webpack.base")
const {merge} = require("webpack-merge")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CSSMinimizer = require("css-minimizer-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = merge(base, {
  mode: "production",
  output: {
    filename: 'js/[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  optimization: {
    minimizer: [
      new CSSMinimizer(),
      new TerserPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: "css/[name].[contenthash].bundle.css"}),
    new CleanWebpackPlugin()
  ]
})