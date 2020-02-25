1.node -v
2.npm -v
3.node hello.js
4.'use strict' => node --use_strict calc.js
5.模块 一个js文件->一个模块 提高了代码的可维护性
6.模块对外输出变量 module.exports = variable; 输出的变量可以是任意对象、函数、数组等等
7.要引入其他模块输出的对象 var foo = require('other_module');
8.全局变量->javascript 函数闭包