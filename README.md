#### 学习webpack基础

- 初始化： npm init 产生package.json文件
  src：源文件
  dist：目标文件

- 安装webpack
可以本地安装，也可以全局安装，推荐本地安装  
```
npm i webpack webpack-cli -D

```
webpack: webpack的核心包；
webpack-cli: webpack的可执行文件；

ps: webpack-cli中的执行文件安装在 ``node_modules/.bin``目录下，不能直接在命令行执？？？？
解决方案：
 1. npx 可以直接运行 ``node_modules/.bin``目录下的命令；
 2. 通过配置``package.json`` 下的脚本script ``"build":"webpack"``;
 ```
 "scripts": {
    "build": "webpack --mode development"
  },
 ```
 --mode: 工作模式
 取值： development:开发环境，打包出来更加全面
        production:生产环境，打包出来更小，加密相关

- 添加配置文件
webpack.config.js 导出一个对象
module.exports = {
  
}

- 引入图片
```
npm i file-loader url-loader -D
```
| ``file-loader``: 解析图片地址，把图片从源位置拷贝到目标位置，可以处理任意的二进制文件， bootstrap中的字体文件
| ``url-loader``: 在文件比较小时，可以把文件直接变成base64字符串内嵌到页面中
配置loader：
```
{
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            // loader: 'file-loader',
            loader: 'url-loader',
            options: {
              esModule: false ,
              outputPath: './images', // 文件在目标文件位置
              limits: 10
            }
          }
        ]
        
      },
```

引入图片的三种方式：
- 背景图片；
- js模块加载方式（require）；
- html标签方式 <img src="./img/1.png" /> 
```
  npm i html-withimg-loader -D
  {
    test: /\.(html|html)/,
    loader: 'html-withimg-loader',
  }

```


