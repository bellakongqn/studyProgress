var http = require('http')
var fs = require("fs")

var server = http.createServer((request,response)=>{
    var url = request.url
    if(url==='/'){
        fs.readFile('./index.html',(err,data)=>{
            if(!err){
                response.writeHead(200,{'Content-type':'text/html;charset=UTF-8'})
                response.end(data)
            }else{
                throw(err)
            }
        })
    }else if(url === '/data'){
        fs.readFile('./data.json', (err, data)=>{
            if(!err){
                response.writeHead(200, {"Content-Type": "application/json"});
                response.end(data);
            }else{
                throw err;
            }
        })
    }else{
        console.log('路径错误')
    }
})
    

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');