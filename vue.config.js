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
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: "src/subpage/main.ts"
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
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/styles/var.scss";`
      }
    }
  },
  productionSourceMap: false,
  baseUrl: './',
  outputDir: 'docs'
  // devServer: {
  //   port: 8081,
  //   proxy: {
  //     "/api": {
  //       target: "http://....",
  //       changeOrigin: true
  //     },
  //   }
  // }
};
