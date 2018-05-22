module.exports = {
  containerQuerySelector: "#root",
  webpackConfigPath: "cosmos.webpack.config.js",
  publicPath: "public",
  globalImports: ["./src/styles/global"],
  watchDirs: ["src"],
  // Optional: Add this when you start using proxies
  // proxiesPath: "src/cosmos.proxies",
};
