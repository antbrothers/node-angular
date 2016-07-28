
var  express=require('express');
var app=express();
var mongoose=require('mongoose');

var database=require('./config/database');
var morgan=require('morgan');
var bodyParser=require('body-parser');                        //获取 post提交的数据 并把变量存入req.body
var methodOverride=require('method-override');

mongoose.connect(database.localUrl);                          //链接数据库

app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/node_modules'));

app.use(morgan('dev'));                                       //记录请求输出到控制台
app.use(bodyParser.urlencoded({'extended':true}));            //解析application/x-www-form-urlencoded
app.use(bodyParser.json());                                   //解析json数据格式
app.use(bodyParser.json({type:'application/vnd.api+json'}));  //解析application/vnd.api+json as json

app.use(methodOverride('X-HTTP-Method-Override'));

//设置路由
require('./app/routes.js')(app);
require('./app/register.js')(app);

//监听服务端口
var port=process.env.PORT || 3030;
app.listen(port);

console.log("应用程序的端口号是:"+port);



