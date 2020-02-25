const crypto = require('crypto');

// md5
const hash = crypto.createHash('md5');
// Hmac
const hmac = crypto.createHmac('sha256', 'secret-key');

// 可任意多次调用update():
hash.update('Hello, world!');
hmac.update('Hello, nodejs!');

console.log(hash.digest('hex'));
console.log(hmac.digest('hex'));