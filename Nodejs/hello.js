'use strict';

var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

function hello() {
    console.log('Hello, world!');
}

module.exports = {
    hello: hello,
    greet: greet
};


// 全局变量
/*
    var s = 'Hello';
    var name = 'world';
    console.log(s + ' ' + name + '!');
*/

// 函数闭包将全局变量=>局部变量
/*
    (function () {
        // 读取的hello.js代码:
        var s = 'Hello';
        var name = 'world';

        console.log(s + ' ' + name + '!');
        // hello.js代码结束
    })();
*/

// module.exports vs exports

/*
    exports.hello = hello;
    exports.greet = greet;
*/