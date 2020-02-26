const http = require('http')

http.createServer((request,response)=>{
    request.on('data',(chunk)=>{
        console.log('data:'+chunk);
    })

    request.on('end',()=>{
        console.log(request.method)
        console.log(JSON.stringify(request.headers))
        console.log('recive request end')
    })

    request.on('close',()=>{
        console.log('recive request close');
    })

    response.writeHead(200,{"Content-type":"text-plain;charset:UTF8"});
    response.end('hello Node.js')
}).listen(3000);

console.log("Server Run");