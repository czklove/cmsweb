const path = require('path');

const resolve= dir => path.join(__dirname, dir);

const BASE_UER =  process.env.NODE_ENV === 'prodution' ? '/iview-admin' : '/static/';

module.exports = {
    lintOnSave: false, //是否开启lint在保存的时候
    publicPath: BASE_UER,
    chainWebpack: config => {
      config.resolve.alias
        .set('@', resolve('src'))
        .set('_c',resolve('src/components'))
    },
    //打包不生成.map 文件
    productionSourceMap: false,
    devServer: {
      port: 8081,
      hotOnly: true,
      disableHostCheck: true,
      proxy: {
        '/api': {
          target: 'http://localhost:26180/', // 设置你调用的接口域名和端口号
          changeOrigin: true,     // 跨域
        }
      },
    }
}



