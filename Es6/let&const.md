1. 不存在变量提升
let 声明的变量一定要在声明后使用，否则报错
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;

2. 暂时性死区
存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错
var tmp = 123;
if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}

在let声明该变量之前，都是不可用的=》暂时性死区
“暂时性死区”也意味着typeof不再是一个百分之百安全的操作
typeof x; // ReferenceError
let x;
如果一个变量根本没有被声明，使用typeof反而不会报错。
typeof undeclared_variable // "undefined"

3. 不允许重复声明
不允许在相同作用域内，重复声明同一个变量

4. 块级作用域
- 内层变量可能会覆盖外层变量
- 用来计数的循环变量泄露为全局变量

5. const
常量的值就不能改变
对象数组-》
obj.name = 'hha' =>🆗
arr.push('11') =>🆗
