const path = require("path");
var config = require("./webpack.config");
var WebpackShellPlugin = require("webpack-shell-plugin");
var nodeExternals = require("webpack-node-externals");

config.entry = "./spec/all-test.js";
config.output = {
  filename: "testBundle.js",
  path: path.resolve(__dirname, "dist")
};
config.plugins = [
  new WebpackShellPlugin({
    onBuildExit: "mocha -c ./dist/testBundle.js --exit"
  })
];

module.exports = config;
