const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  publicPath: "",
  configureWebpack: {
    plugins: [
      new CompressionPlugin()
    ],
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