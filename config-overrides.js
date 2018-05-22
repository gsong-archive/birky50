const path = require("path");
const fs = require("fs");

const rewireBabelLoader = require("react-app-rewire-babel-loader");
const { rewireEmotion } = require("react-app-rewire-emotion");

// helpers

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = function override(config, env) {
  config = rewireBabelLoader.include(
    config,
    resolveApp("node_modules/react-cosmos-flow/")
  );

  if (env === "development") {
    config = rewireEmotion(config, env, { autoLabel: true, sourceMap: true });
  }

  if (env === "production") {
    config = rewireEmotion(config, env, { hoist: true });
  }

  return config;
};
