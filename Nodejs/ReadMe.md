1.node -v
2.npm -v
3.node hello.js
4.'use strict' => node --use_strict calc.js
5.模块 一个js文件->一个模块 提高了代码的可维护性
6.模块对外输出变量 module.exports = variable; 输出的变量可以是任意对象、函数、数组等等
7.要引入其他模块输出的对象 var foo = require('other_module');
8.全局变量->javascript 函数闭包
9.Buffer  String 
  // Buffer -> String
    var text = data.toString('utf-8');
    console.log(text);
 // String -> Buffer
    var buf = Buffer.from(text, 'utf-8');
    console.log(buf);
10.同步异步
在fs模块中，提供同步方法是为了方便使用。那我们到底是应该用异步方法还是同步方法呢？

由于Node环境执行的JavaScript代码是服务器端代码，所以，绝大部分需要在服务器运行期反复执行业务逻辑的代码，必须使用异步代码，否则，同步代码在执行时期，服务器将停止响应，因为JavaScript只有一个执行线程。

服务器启动时如果需要读取配置文件，或者结束时需要写入到状态文件时，可以使用同步代码，因为这些代码只在启动和结束时执行一次，不影响服务器正常运行时的异步执行。
11.steam
每次传递的chunk是流的一部分数据。
12.pipe
就像可以把两个水管串成一个更长的水管一样，两个流也可以串起来。一个Readable流和一个Writable流串起来后，所有的数据自动从Readable流进入Writable流，这种操作叫pipe。
在Node.js中，Readable流有一个pipe()方法，就是用来干这件事的