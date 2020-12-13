module.exports = {
    publicPath: '',
    configureWebpack: {
      output: {
        filename: '[name].js',
        chunkFilename: '[name].js'
      }
    },
    css: {
      extract: {
        filename: '[name].css',
      },
    },
    // productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    // chainWebpack: config => {
    //     config.plugins.delete('preload')
    // }
  }
  