const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/components/app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.(css)$/, use: ["style-loader", "css-loader"] },
      { test: /\.(jpg|png)$/, use: ["url-loader"] },
    ],
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
};