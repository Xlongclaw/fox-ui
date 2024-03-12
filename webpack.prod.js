const { merge } = require("webpack-merge");
const commonConfiguration = require("./webpack.common.js");

module.exports = merge(commonConfiguration, {
  mode: "production",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
