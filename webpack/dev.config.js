const merge = require("webpack-merge");
const baseConfig = require("./base.config.js");

// config

module.exports = merge(baseConfig, {
  mode: "development",
});
