var express = require('express');
var body_parse = require('body-parse');

var app = express();

// body_parse 是可以直接获取post请求参数，但是有前提是需要下载body-parse
app.url(body_parse.urlencoded())

app.get('/index',function(req,res,next) {
  req.body
})

app.listen(8889,function() {
  console.log('http://localhost:8888')
})