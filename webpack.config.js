const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const reactReduxPkg = require("react-redux/package.json");

module.exports = {
  externals: [
    ...Object.keys(reactReduxPkg.dependencies || {}),
    ...Object.keys(reactReduxPkg.peerDependencies || {}),
    ...Object.keys(reactReduxPkg.peerDependenciesMeta || {}),
  ],
  plugins: [new BundleAnalyzerPlugin()],
};
