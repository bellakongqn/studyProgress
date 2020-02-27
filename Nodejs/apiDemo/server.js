var http = require('http')

var server = http.createServer((request, response)=>{
    // 回调函数接受request 和 response 对象
    // 获取Http请求的method 和 url
    console.log(request.method+":"+request.url)
    // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
    response.writeHead(200,{'Content-type':'text/html'})
    // 将HTTP响应的HTML内容写入response:
    response.end('Hello world!');
})

// 让服务器监听8080端口:
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');