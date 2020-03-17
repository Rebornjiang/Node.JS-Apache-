// 实现php study功能
var path = require('path');
var express = require('express');

var app = express();

// 只响应index。html  anoceanofsky.css没有响应回来
// app.get('/index.html',function(req,res) {
//   res.sendFile(path.join(__dirname,'index.html'))
// })

//use 将路径指定‘/’ 相当于任何请求都会进行处理。
// app.use(function(req,res) {
//   res.sendFile(path.join(__dirname,req.path));
// });

//托管静态资源
app.use(express.static('public'))
//对路径是有要求的  托管的静态资源文件夹不能够包含处理路由规则的文件。


app.listen(8888,function() {
  console.log('http://localhost:8888')
})