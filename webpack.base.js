const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/js/main.js",
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /(\.(png|jpg|gif|woff|woff2|eot|ttf|otf|mp4|ico|svg|webp|jpeg|pdf))$/,
        type: "asset/resource",
        generator: {
          filename: 'assets/[name]-[hash][ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
}