const http = require('http');
let reqData = '';
const req = http.request({
    'host': '127.0.0.1',
    'port': 3000,
    'method':'GET'
}, (res) => {
    res.on('data', (chunk) => {
        reqData += chunk;
    });
    res.on('end', () => {
        console.log(reqData);
        console.log('request end...');
    });
});
req.end();
req.on("error", function (err) {
    console.log(err.message);
});