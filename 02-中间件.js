//所谓的中间件：就像是自来水厂将水从厂里供给到每位居民用户的家里一样。水到家里中间需要经过沉淀，过滤，明矾
//等等的步骤，这些步骤就是中间件。其中水一直从水源处流到居民家里，他是经过增加和更改，但是本身是一直
// 不变的。
// express中的中间件 ：浏览器请求，到服务器响应这个过程就像水从水源处到打客人家里一样。
//其中req于res就相当于水一样，我们可能会对他有很多的加功处理。这些加功处理就是中间件。

//中间件的意义：可以使代码的逻辑更加清晰，相同请求和路径为一条支线，
// 可以个req于res增加方法，下游是可以访问得到的。但是需要上游指定next()。

var express = require('express');

var app = express();

app.get('/index',function(req,res,next) {
  var obj = {name:'reborn',age:18};
  next()
});

app.get('/index',function(req,res,next) {
  res.send(obj)

})

app.listen(8888,function() {
  console.log("http://localhost:8888")
})