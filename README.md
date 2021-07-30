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

