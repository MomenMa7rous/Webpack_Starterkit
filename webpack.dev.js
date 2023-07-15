const path = require("path")
const base = require("./webpack.base")
const {merge} = require("webpack-merge")

module.exports = merge(base, {
  mode: "development",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
})