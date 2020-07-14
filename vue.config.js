
const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './', // 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
  outputDir: 'dist', // 运行时生成的生产环境构建文件的目录(默认'dist'，构建之前会被清除)
  assetsDir: 'assets', // 静态资源目录(js、css、img、fonts)，相对outputDir的目录(默认'')
  indexPath: 'index.html', // 指定生成index.html的输出路径(相对outputDir)也可以是绝对路径
  lintOnSave: true, // 是否开启ESlint（保存时检查）
  productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
  pages: {
    // pages里配置的路径和文件名在你的文档目录必须存在，否则启动服务会报错
    index: {
      // 除了 entry 之外都是可选的
      entry: 'src/main.js', // page的主入口
      template: 'public/index.html', // 模板来源
      filename: 'index.html', // 在 dist/index.html 的输出
      // title在template中使用：<title><%=htmlWebpackPlugin.options.title%></title>
      // title: '华设财富',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
      // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
    }
  },
  css: {
    // extract: true, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps
    loaderOptions: {}, // css预设器配置项
    requireModuleExtension: true

  },
  devServer: {
    // 环境配置
    host: 'localhost',
    port: 8080,
    https: false, // 是否开启https
    hot: true, // 是否配置热更新
    open: true, // 配置自动启动浏览器
    proxy: {
      // 配置多个代理跨域(配置一个 proxy: 'http://localhost:4000' )
      '/api': {
        target: 'http://test.hwasbank.com:8017/hclub-service',
        ws: true, // 是否跨域
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  },
  chainWebpack: (config) => {
    const imagesRule = config.module.rule('images');// 配置图片压缩
    imagesRule
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 6144 }));
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('base', resolve('baseConfig'))
      .set('public', resolve('public'));
    /* 修改图片的处理 */
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        name: '[path][name].[ext]',
        outputPath: 'images/'
      });
  },

  pluginOptions: {
    // 第三方插件配置
    // ...
  }
};
