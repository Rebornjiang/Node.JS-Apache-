// 框架 ：应用程序的逻辑是由框架控制 -- 》还不能够理解
// 库：有许多的方法供我们使用.

// express框架的使用方法 ：1.引包 2.创建express的实例 3.监听一个端口 4.路由规则

var express = require('express');

//创建一个express实例
var app = express();

// 制定处理路由规则
app.get('/',function(req,res) {
  res.send('你好');
})
//express中有3中注册路由的方法
//1.  app.METHOD(路径，function（req,res){})  --method可以是任何请求方式 
//    特点：请求的地址必须和路由指定的地址一致，请求方式必须和路由监听的方式一直
//2. app.all (路径,function(req,res){}) ---- 任何请求方式都可以
//    特点：请求的地址必须和路由指定的地址一致，请求方式可以是任意的方式
//3. app.user(路径,function(req,res) {}) -----
//    特点：请求的地址只要是以 路径地址开头的 地址都可以，请求方式必须和路由监听的方式一直 
//    /resource/index.html  && /resource/details.css   都可以

//监听一个端口
app.listen(8888,function() {
  console.log('http://localhost:8888')
})