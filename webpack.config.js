const path = require("path");
var nodeExternals = require("webpack-node-externals");

let mode;
if (process.env.NODE_ENV && process.env.NODE_ENV.charAt(0) == "p") {
  mode = "production";
} else {
  mode = "development";
}
console.log("building for: ", mode);
module.exports = {
  entry: "./src/index.ts",
  target: "node",
  mode: mode,
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
    extensions: [".ts", ".js", "json"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
