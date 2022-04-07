module.exports = {
    // pages: {
    //   index: {
    //     //入口
    //     entry: 'src/main.js',
    //   },
    // },
    publicPath: './',
    outputDir: undefined,
    assetsDir: undefined,
    runtimeCompiler: undefined,
    productionSourceMap: undefined,
    parallel: undefined,
    css: undefined,
    lintOnSave: false, //关闭语法检查
    //开启代理服务器（方式一）
    /* devServer: {
    proxy: 'http://localhost:5000'
  }, */
    //开启代理服务器（方式二）
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8081',
                pathRewrite: {'^/api': ''},
                ws: true, //用于支持websocket
                changeOrigin: true //用于控制请求头中的host值
            }
        }
    }
}