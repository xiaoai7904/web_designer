const webpack = require('webpack');

function dateFormat(date, format) {
  var dateTime = new Date(date);
  var o = {
    'M+': dateTime.getMonth() + 1, //month
    'd+': dateTime.getDate(), //day
    'h+': dateTime.getHours(), //hour
    'm+': dateTime.getMinutes(), //minute
    's+': dateTime.getSeconds(), //second
    'q+': Math.floor((dateTime.getMonth() + 3) / 3), //quarter
    S: dateTime.getMilliseconds() //millisecond
  };
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (dateTime.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }
  return format;
}

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  chainWebpack: config => {
    config.plugin('provide').use(webpack.ProvidePlugin, [
      {
        $: 'jquery',
        jquery: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }
    ]);

    config.plugin('MonacoWebpackPlugin').use(require('monaco-editor-webpack-plugin'));
    
    const date = dateFormat(new Date().getTime(), 'yyyyMMddhhmm');
    config.output.filename(`js_${date}/[name].[hash:8].js`).chunkFilename(`js_${date}/[name].[hash:8].js`);
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/var.scss";`
      }
    }
  },
  lintOnSave: false,
  productionSourceMap: false,
  baseUrl: './',
  outputDir: 'docs',
  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.1.199:7001",
        changeOrigin: true
      },
    }
  }
};
