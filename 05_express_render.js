var express = require('express');
var path = require('path');
var app =  express();
// 在express中使用模板进行渲染  需要一样引入包:需要引入两个包  --》 多引入一个express-art-template
// 引文express框架支持很多模板引擎渲染。需要告知express你使用的模板引擎
app.engine('html',require('express-art-template'));
// app.engine('art',require('express-art-template'));//第一个参数跟需要渲染的文件后缀对应起来就行了
//模板引擎默认回去views文件夹中找文件，也可也自己指定app.set('views',路径) 路径到渲染文件的上级目录
app.set('views',path.join(__dirname,'views'))
app.get('/',function(req,res,next) {

  var obj = {
    msg:"Hello World"
  }

  res.render('index.html',obj);
})


app.listen(8888,function() {
  console.log('http://localhost:8888')

})