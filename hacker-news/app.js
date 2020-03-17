// 实现hackernews 需求：1.创建一个服务器 2.制订路由规则 3.完成每个页面的路由规则的内容 

var express = require('express')
var fs = require('fs')
var path = require('path')
var bodyParser = require('body-parser')
var app = express()


//路由规则制定
app.engine('html',require('express-art-template'))
// index路由规则
app.get('/',function(req,res) {
    res.redirect("/index.html")
})
app.get('/index.html',function(req,res) {
    // 获取data数据.
    fs.readFile(path.join(__dirname,'data.json'),'utf8',function(err,data) {
        var renderData = JSON.parse(data);
        
        res.render('index.html',{list:renderData})
    })
})

//详情页路由处理
app.use('/details',function(req,res) {
    //获取对应的id，渲染对应的参数；
    fs.readFile(path.join(__dirname,'data.json'),'utf8',function(err,data) {
        var renderData = JSON.parse(data)
        //根据id找到对应的数据
        var targetData = renderData.find(function(v,i) {
            return v.id == req.query.id;
        })

        res.render('details.html',{item:targetData})
    })
})


//处理提交页面
app.get('/submit',function(req,res) {
    
    res.sendFile(path.join(__dirname,'views','/submit.html'))
})

// 处理添加功能
app.use(bodyParser.urlencoded())
app.post('/add',function(req,res) {
    
    
    
    var result = req.body
    fs.readFile(path.join(__dirname,'data.json'),'utf8',function(err,dataList) {
        dataList = JSON.parse(dataList)
        result.id = dataList[dataList.length - 1].id + 1;
        dataList.push(result)

        fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(dataList),function(err) {
            res.redirect('/index.html');
        })
    })
})

//处理静态资源路由
// app.use('/resources',function(req,res) {
//     res.sendFile(path.join(__dirname,req.originalUrl))
// })
app.use(express.static('resources'))

app.listen(8888,function() {
    console.log('http://localhost:8888')

})