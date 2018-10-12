#模块与包管理工具
依赖关系                                        定义
命名空间       纠结的编程体验       -->          标识
代码组织                                        引用
# Commonjs规范
modules     binary
packages    console          unit test......
system      encodings
filesystems sockets
不同于jQuery，Commonjs是一套规范
规范与实现互为促进
Node.js/Couchdb  <-->Commonjs规范
# 模块的分类
核心模块     http fs path...
文件模块     var util=require('./util.js);
第三方模块   var promise=require('./bluebird');
#模块的流程
创建模块        teacher.js
导出模块        exports.add=function(){}
加载模块        var teacher=require('./teacher.js');
使用模块        teacher.add('Scott');
#url网址解析
1. parse是用来解析地址的，解析成一个对象
2. Url {
  protocol: 'https:',//底层指定的协议
  slashes: true,//是否有协议的双斜线
  auth: null,
  host: 'www.imooc.com:8080',//http的IP地址或域名
  port: '8080',//端口
  hostname: 'www.imooc.com',//主机名
  hash: null,//hash值
  search: null,//查询字符串参数
  query: null,//发送给http服务的数据
  pathname: '/video/6710',//访问资源路径名
  path: '/video/6710',//路径
  href: 'https://www.imooc.com:8080/video/6710'//立解析的超链接
}
#querystring参数小处理
1. 参数序列化
querystring.stringify({name:'Laitou',course:['java','node'],from:''})
结果'name=Laitou&course=java&course=node&from='
querystring.stringify({name:'Laitou',course:['java','node'],from:''},',');
结果'name=Laitou,course=java,course=node,from='
querystring.stringify({name:'Laitou',course:['java','node'],from:''},',',':');
结果'name:Laitou,course:java,course:node,from:'
2. querystring反序列化
querystring.parse('name=Laitou&course=java&course=node&from=')
结果{
    name:'Laitou',
    course:['java','node'],
    from:''
}
querystring.parse('name=Laitou,course=java,course=node,from=',',')
结果{
    name:'Laitou',
    course:['java','node'],
    from:''
}
querystring.parse('name=Laitou,course=java,course=node,from=')
结果{name=Laitou,course=java,course=node,from='}
querystring.parse('name:'Laitou',course:['java','node'],from:''},',',':')
结果{
    name:'Laitou',
    course:['java','node'],
    from:''
}
3. querystring转意反转意
querystring.escape('<哈哈>')
结果一串不认识的数如'%3C%E'类似
querystring.unescape('一串不认识的字符串')
结果'<哈哈>'
#http知识
1. http客户端发起请求，创建端口
http服务器在端口监听客户端请求
http服务器像客户端但会状态和内容
2. 请求方法
GET//获取读取数据
POST//向指定的资源提交数据
PUT//更新，向指定的资源上传一个内容
DELETE//请求服务器删除标识的资源
HEAD//向服务器发送指定资源的请求
TRACE
OPTIONS
3. 状态码
200//请求成功
400//语法错误
401//请求没有授权
403//服务器收到请求拒绝服务，可能还是没有全新啊
404//没找到，请求资源不存在或者输错url地址
500//服务器端发生一个不可预期的错误
503//服务器端当前还不能处理请求，可能过段时间才能处理
#HTTP概念阶段
什么是回调？
回调是异步编程最基本的方法，对nodejs来说需要按顺序执行异步逻辑时，一般采用后续传递的方式，也就是将后续逻辑封装在回调函数中作为起始函数参数逐层去嵌套，通过这种方式来让程序按照我们期望的方式走完整个流程
什么时同步/异步？
同步指代码依次执行，异步指代码不按顺序执行，‘跳过’执行，待其他某些代码执行完后，再来执行
什么是I/O?
什么时单线程/多线程？
单线程可以比作一个一个的谈女朋友，多线程指谈女朋友是脚踏多只船
什么时阻塞/非阻塞？
阻塞可以比作打电话没接通不停的等待，直到接通为止，非阻塞可以比作打点话把电话挂了想干啥干啥
什么是事件？
什么是事件驱动？什么是基于事件驱动的回调？
为了某个事件注册了回调函数，但是回调函数不是马上执行，只有当这个事件发生了的时候才会调用这个回调函数，这种函数的注册方式成为事件驱动这种注册回调是基于事件驱动的回调，如果这些回调和I/O操作有关，那么可以看作基于回调异步I/O
什么是事件循环？
循环事件导致其他事件随时间在视频输出中重复。它们控制排序，但是不执行图像处理。
循环事件始终为带有单个子事件的父事件。子事件本身也可以是带有子事件的父事件。任一类型的事件都可以是循环事件的子事件，包括其他循环事件。
#http源码解读
什么是作用域？
在JavaScript中变量的作用域，并非和C、Java等编程语言似得，在变量声明的代码段之外是不可见的，我们通常称为块级作用域，然而在JavaScript中使用的是函数作用域（变量在声明它们的函数体以及这个函数体嵌套的任意函数体都是有定义的）
什么是上下文？

