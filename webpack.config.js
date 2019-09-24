const path = require('path');

module.exports = {
  mode: 'development',  //development or production 来使产生的js是否被压缩
  entry: './src/index.js',        //webpack打包的入口文件
  module: {                        //加载不是js的模块的时候
    rules:[{                      //在rules里设置各种规则
        test: /\.(png|jpe?g|gif)$/i,           //如果我们的webpack打包遇到jpeg结尾的文件
        use:{
          // loader: 'file-loader', //我们就使用file-loader这个 加载来帮我们打包
          loader: 'url-loader',  //url-loader 可以实现file-loader实现的功能
          options: {
            name: '[name].[ext]',//placeholder 占位符
            outputPath: 'images/',
            limit: 2048     //url-loader 限制如果图片小于2kb 可以直接转化为字符串（base64）显示在页面        
          }    
        }
    },{                      //在rules里设置各种规则
      test: /\.css/,           //如果我们的webpack打包遇到jpeg结尾的文件
      use:['style-loader', 'css-loader']
  }]
  },
  output: {                 
    filename: 'bundle.js',         //打包好的翻译文件
    path: path.resolve(__dirname, 'dist')   //打包好的文件所放的目录
  }
}