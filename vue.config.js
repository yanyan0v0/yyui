/**
* @Date 2020-04-22
* @author liaoyanyan
* @description 项目配置
*/
const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
// const BASE_URL = process.env.NODE_ENV === 'production' ? '/system/' : '/test/'

module.exports = {
  // 打包输出目录
  //   outputDir: 'dist',
  // 项目基础路径
  // publicPath: BASE_URL,
  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  // 打包时不生成source map
  productionSourceMap: true,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/less/common.less')]
    }
  }
}