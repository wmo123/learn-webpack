const path = require('path');
const webpack = require('webpack');
// 生成html模版
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 生产打包文件前先清空dist目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  
  // 多入口文件配置,一个数组
  // entry: ['./src/index.js', './src/base.js'],
  // 一个字符串，单入口
  // entry: './src/index.js', // 入口
  // 一个对象，多入口
  // webpack的工作原理：先找到每个入口（entry），然后从各个入口分别出发，找到依赖的模块（module），
  // 然后生成一个代码块（chunk），最后把chunk写到文件系统中（Assets资源）
  // entry: {
  //   index: './src/index.js',
  //   base: './src/base.js',
  //   vendor: 'jquery', // 公共的第三方资源库（需要npmanzhuang）
  // },

  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'), // 输出的文件夹，只能是绝对路径

    // filename: 'bundle.js' // 打包后的文件名
    // name是入口的名字，默认是main
    filename: '[name].[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 转换文件的匹配规则

        // css-loader 用来解析处理css文件中的url路径
        // style-loader 可以把css文件变成style标签插入head中
        // 多个loader有顺序要求，从右往左写，因为转换时从右往左转换
        loader: ['style-loader', 'css-loader'],

      },

      // file-loader 解析图片地址，将图片从源位置拷贝到目标位置
      // 可以处理任意的二进制文件， bootstrap中的字体文件
      // url-loader 在文件比较小时，可以把文件直接变成base64字符串内嵌到页面中
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            // loader: 'file-loader',
            loader: 'url-loader',
            options: {
              esModule: false ,
              outputPath: './images',
              limits: 10
            }
          }
        ]
        
      },
      {
        test: /\.(html|html)/,
        loader: 'html-withimg-loader',
      }
    ]
  },
  plugins: [ // 插件实例引入无先后顺序
    // 自动加载模块，而不必到处 import 或 require 
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    // 每次构建前，先清空dist文件夹
    new CleanWebpackPlugin(), 

    // 此插件可以自动产生html文件
    // 生成多个html文件，配置chunks，指定写入的代码块
    new HtmlWebpackPlugin({
      template: './src/index.html', // 指定产出的html模版
      filename: 'index.html', // 产出的文件名
      chunks: ['main','vendor'], // 在产出的html文件中引入哪些代码块，对应entry的入口名字
      // title: '欢迎大家',
      hash: true,
      minify: {
        // collapseWhitespace: true
      }
    }),
    // new HtmlWebpackPlugin({
    //   template: './src/index.html', // 指定产出的html模版
    //   filename: 'base.html', // 产出的文件名
    //   chunks: ['base', 'vendor'], // 在产出的html文件中引入哪些代码块，对应entry的入口名字
    //   title: '欢迎大家',
    //   hash: true,
    //   minify: {
    //     // collapseWhitespace: true
    //   }
    // })
  ],
  // 配置静态文件服务器，用来预览打包后项目
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: 'localhost',
    compress: true,
    port: 9000
  }
  // mode: 'development'




}