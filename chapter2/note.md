# Node.js的非阻塞I/O
* 理解非阻塞I/O的要点在于
    - 确定一个进行Input/Output的系统
    - 思考在I/O过程中 能不能进行其他I/O

# Node.js 异步编程

* 回调函数格式规范
    - error-firstcallback
    - Node-style-callback
* 第一个参数是error 后面的参数才是结果  


* 执行 then catch 会返回一个 新的Promise 该 Promise最终的状态根据 then 和 catch的回调函数的执行结果决定

* 如果回调函数 最终是 throw 该 Promise是 rejected状态
* 如果回调函数最终是 return 该Promise是resolved状态
* 如果回调函数最终return了一个Promise 该Promise会回调函数 return的 Promise状态保持一致