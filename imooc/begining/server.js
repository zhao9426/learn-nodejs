/* var http=require('http');//加载http模块，这个模块有javascript编写，职责是创建web服务器处理http相关的任务
//通过createServer创建服务器,这种方式是链式调用
http.createServer(function(req,res){//给createServer传递进来一个匿名函数，req请求体res响应体
    res.writeHead(200,{'Content-Type':'text/plain'});//同时返回状态码、文本类型，200表示成功
    res.end('Hello Node.js\n');//给客户端返回信息
}).listen(1337,'127.0.0.1');//通过listen在1337窗口监听请求，就能受到任何来自端口的请求，监听后nodejs就调用匿名函数
console.log('Server running at http://127.0.0.1:1337/'); */

var http=require('http');//加载http模块，这个模块有javascript编写，职责是创建web服务器处理http相关的任务
//通过createServer创建服务器,这是普通的声明和调用方式
var server=http.createServer(function(req,res){//给createServer传递进来一个匿名函数，req请求体res响应体
    res.writeHead(200,{'Content-Type':'text/plain'});//同时返回状态码、文本类型，200表示成功
    res.end('Hello Node.js\n');//给客户端返回信息
})
server.listen(1337,'127.0.0.1');//通过listen在1337窗口监听请求，就能受到任何来自端口的请求，监听后nodejs就调用匿名函数
console.log('Server running at http://127.0.0.1:1337/');