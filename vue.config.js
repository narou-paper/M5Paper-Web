const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  chainWebpack(config) {
    config.plugins.delete('prefetch');
    config.plugin('CompressionPlugin').use(CompressionPlugin);
  },
  publicPath: "",
  configureWebpack: {
    output: {
      filename: "[name].js",
      chunkFilename: "[name].js"
    }
  },
  css: {
    extract: {
      filename: "[name].css",
      chunkFilename: "[name].css"
    }
  },
  transpileDependencies: [
    "vuetify",
  ],
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
}