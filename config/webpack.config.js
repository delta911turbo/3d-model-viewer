const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const DevMode = process.env.Node_ENV === "development";

module.exports = {
  target: "web",
  entry: resolve(__dirname, "../src/index.js"),
  devtool: "source-map",
  resolve: {
    extensions: ["*", ".js"],
    modules: [resolve("node_modules"), resolve("src")],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env"],
          plugins: [
            "@babel/plugin-proposal-optional-chaining",
            "@babel/plugin-transform-async-to-generator",
            [
              "@babel/plugin-transform-runtime",
              {
                regenerator: true,
              },
            ],
          ],
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
    path: DevMode ? resolve(__dirname, "../dist/build") : resolve(__dirname, "../build"),
    filename: DevMode ? "bundle.js" : "bundle.[contentHash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
