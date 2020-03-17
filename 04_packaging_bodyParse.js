var express = require('express');
var querystring = require('querystring');
var app = express();

// body-parse 其实就是在app.url(bodyParse.urlencoded())这里调用的时候就已经处理号了post请求的参数
// 并且将post请求发送的参数赋值给了req.body并指定了next(). 使下游的中间件可以通过req.body拿到。

app.use(function(req,res,next) {
  // 如何获取post请求的参数
  var bufferList = [];

  req.on('data',function(chunk) {
    bufferList.push(chunk);
  });

  req.on('end',function() {
    var result = Buffer.concat(bufferList);
    var str = result.toString(); //将所得到的buffer数据转换为字符串

     // result就是从浏览器发送过来的post请求的数据
        // 可能有两种形式 字符串形式和json的形式
        // 1. x-www-form-urlencoded：  拿到的数据 key=value&key=value
        // 2. application/json:        拿到的数据 {key: value, key: value}

    // 需要对两种形式进行处理，判断使哪一种.req.get(content-type)

    if (req.get('content-type').indexOf('json') != -1) {
      req.body = JSON.parse(str);
    }else if (req.get('content-type').indexOf('urlencoded') != -1) {

      req.body = querystring.parse(str); //得到js对象了  这s
    }else {
      req.body = {};
    }

    next()

  })


})



app.post('/index',function(req,res,next) {
  console.log(req.body)
})

app.listen(8888,function() {
  console.log('http://localhost:8888')
})