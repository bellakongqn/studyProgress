### 解构赋值
1. 数组的解构赋值
从数组中提取值，按照对应位置，对变量赋值
let [a, b, c] = [1, 2, 3];
let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1 bar // 2 baz // 3

let [ , , third] = ["foo", "bar", "baz"];
third // "baz"

let [x, , y] = [1, 2, 3];
x // 1 y // 3

let [head, ...tail] = [1, 2, 3, 4];
head // 1 tail // [2, 3, 4]

let [x, y, ...z] = ['a'];
x // "a"  y // undefined z // []
结构不成功变量值为undefined

不完全解构 ：等号左边的模式，只匹配一部分的等号右边的数组
let [x, y] = [1, 2, 3];
x // 1 y // 2

let [a, [b], d] = [1, [2, 3], 4];
a // 1 b // 2 d // 4

等号的右边不是可遍历的结构 报错

默认值
let [foo = true] = [];

let [x = 1] = [undefined];
x // 1
let [x = 1] = [null];
x // null

let [x = 1, y = x] = [];     // x=1; y=1
let [x = 1, y = x] = [2];    // x=2; y=2
let [x = 1, y = x] = [1, 2]; // x=1; y=2
let [x = y, y = 1] = [];     // ReferenceError: y is not defined

2. 对象的结构赋值
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
foo // "aaa" bar // "bbb"
数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值

如果变量名与属性名不一致，必须写成下面这样。
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"

注意
如果要将一个已经声明的变量用于解构赋值，必须非常小心。
// 错误的写法
let x;
{x} = {x: 1}; // SyntaxError: syntax error
({x} = {x: 1});

3. 字符串的解构赋值
const [a, b, c, d, e] = 'hello';
a // "h" b // "e" c // "l" d // "l" e // "o"

let {length : len} = 'hello';
len // 5

4. 数值和布尔值的解构赋值
解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
let {toString: s} = 123;
s === Number.prototype.toString // true

let {toString: s} = true;
s === Boolean.prototype.toString // true

undefined和null无法转为对象，所以对它们进行解构赋值，都会报错
let { prop: x } = undefined; // TypeError
let { prop: y } = null; // TypeError

5. 函数参数的解构赋值
function add([x, y]){
  return x + y;
}
add([1, 2]); // 3

[[1, 2], [3, 4]].map(([a, b]) => a + b);  // [ 3, 7 ]

默认值
function move({x = 0, y = 0} = {}) {
  return [x, y];
}
move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]

上面代码是为函数move的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果
function move({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}
move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, undefined]
move({}); // [undefined, undefined]
move(); // [0, 0]