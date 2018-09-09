const path = require("path");
var nodeExternals = require("webpack-node-externals");
module.exports = {
  entry: "./src/index.js",
  target: "node",
  mode: "development",
  devtool: "source-map",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
