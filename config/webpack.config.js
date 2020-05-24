const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

const DevMode = process.env.Node_ENV === "development";

module.exports = {
  target: "web",
  entry: resolve(__dirname, "../src/index.js"),
  devtool: "source-map",
  resolve: {
    extensions: ["*", ".js"],
    modules: [resolve("node_modules"), resolve("src")],
  },
  devServer: {
    port: 3000,
    open: true,
    contentBase: resolve(__dirname, "../public/"),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        enforce: "pre",
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          emitError: false,
        },
      },
    ],
  },
  output: {
    path: resolve(__dirname, "../dist"),
    filename: DevMode ? "bundle.js" : "bundle.[contentHash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
