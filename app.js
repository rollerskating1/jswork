const express = require('express')
const app = express()
const bodyParser = require("body-parser")

app.use(express.static('.'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('../uploads'))
const multer = require('multer');
var storage = multer.diskStorage({
  destination:function (req,file,cb){
    cb(null,'../uploads')
  },
  filename: function (req,file,cb){
    cb(null,'../uploads')
  },
  filename:function(req,file,cb){
    var fileFormat = (file.originalname).split(".");
    cb(null,file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1] );
  }
});
let upload = multer({storage:storage})
app.post('/upload',upload.single('file'),function(req,res,next){
  var file=req.file;
  console.log("original file name is "+file.originalname);
  console.log("file name is" + file.filename);
  res.json('/'+file.filename);
})
app.post('/formBuilder', function (req, res) {
    console.log(req.body)
    res.send(req.body)
  })

  let ajaxData = []
  let count =0
  app.post('/ajax',function(req,res){
    let sno = req.body.sno
    let name = req.body.name
    let content = req.body.content
    let comment = {
      id:count + 1,
      sno:sno,
      user: name,
      time:new Date().toLocaleString(),
      content:content
    }
    console.log(comment)
    ajaxData.push(comment)
    count = ajaxData.length
    res.json(ajaxData)
  })

  app.get('/ajax',function(req,res){
    let page = req.query.page?Math.max(req.query.page,1):1
    let size = 5
    let maxpage = Math.ceil(ajaxData.length/size)
    result={data:ajaxData.slice((page-1)*size,page*size),
    maxPage:maxpage}
    res.json(result)
  })
  
app.listen(8080, () => console.log('node express 服务器已启动，监听端口：8080'))

const openDefaultBrowser = function (url) {
  var exec = require('child_process').exec;
  switch (process.platform) {
    case "darwin":
      exec('open ' + url);
      break;
    case "win32":
      exec('start ' + url);
      break;
    default:
      exec('xdg-open ', [url]);
  }
}
openDefaultBrowser('http://localhost:8080')
var ws = require("nodejs-websocket")
let id=0
var server = ws.createServer(function (conn){
  id++
  conn.name = "p"+id
  broadcast(server,'有新人加入。')
  conn.on("text",function(str){
    if(str.slice(0,9)=='nickname|'){
      conn.name=str.split('|')[1]
      broadcast(server,conn.name+'上线了。')
      return
    }
    broadcast(server,conn.name+':'+str)
  })
  conn.on('connect',function(){
    conn.name = "name"
  })
  conn.on("close",function(code,reason){
    console.log("Connection closed")
  })
}).listen(8081,()=>console.log('socket server listening on:8081'))
function broadcast(sever,msg){
  server.connections.forEach(function(conn){
    conn.sendText(msg)
  })
}
