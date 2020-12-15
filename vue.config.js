module.exports = {
  "publicPath": "",
  "configureWebpack": {
    "output": {
      "filename": "[name].js",
      "chunkFilename": "[name].js"
    }
  },
  "css": {
    "extract": {
      "filename": "[name].css",
      "chunkFilename": "[name].css"
    }
  },
  "transpileDependencies": [
    "vuetify",
  ],
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
}