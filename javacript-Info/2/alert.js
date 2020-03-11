/**
 * 多行注释
 */
'use strict';



// 变量
let admin ,name;
name = 'John'
admin = name

// 星球
let ourPlanetName = "Earth";
// 当前访问者
let currentUserName = "John";

// 大写 常量不会变
const BIRTHDAY = '18.04.1982';
// 小写 一年一变 let 
// let age = someCode(BIRTHDAY);

// number string boolean null undefined bigInt symbol   object

// Number  => 整数|浮点数 + - * / Infinity=> ∞ -Infinity=> - ∞ NaN
let number = 123

// BigInt  2^53或小于 -2^53 尾部的 "n" 表示这是一个 BigInt 类型
const bigInt = 1234567890123456789012345678901234567890n;
// alert(admin)

// String

let str = "Hello"; // 双引号
let str2 = 'Single quotes are ok too';  // 单引号
let phrase = `can embed another ${str}`; // 反引号  扩展  变量和表达式包装在 ${…} 

// Boolean true 和 false

let nameFieldChecked = true;
let ageFieldChecked = false; 
let isGreater = 4 > 1;

// null

let age = null;

// undefined 变量已被声明，但未被赋值

let x;
// alert(x); // 弹出 "undefined"

// object Symbol

// type of 运算符返回参数的类型
typeof null // "object"  (2) !!!错误 null 不是object

// 类型转换

String(1)  // 字符串转换
Number('124') // 数字转换 '/' 自动转换
Boolean(1) // 布尔转换 非空 为true

// 运算符 一元运算符 二元运算符 运算元
// + - * / %  ** ++ --
// & | ^ ~ << >> >>>

// 值得比较
// > < >= <= == === !=

// 交互 alert prompt confirm
alert("Hello");

let ageSec = prompt('How old are you?', 100);
// alert(`You are ${ageSec} years old!`);

let isBoss = confirm("Are you the boss?");
// alert( isBoss );

// 条件运算符 if ? : 

// 逻辑运算符 || && ！

// 循环 while for do..while 循环首先执行循环体，然后检查条件，当条件为真时，重复执行循环体 
// break; continue;

// switch
/**
 * switch(x) {
        case 'value1':  // if (x === 'value1')
            ...
            [break]

        case 'value2':  // if (x === 'value2')
            ...
            [break]

        default:
            ...
            [break]
    }
 */


//  函数声明
//  函数表达式
/**
 *  函数是值。它们可以在代码的任何地方被分配，复制或声明。
    如果函数在主代码流中被声明为单独的语句，则称为“函数声明”。
    如果该函数是作为表达式的一部分创建的，则称其“函数表达式”。
    在执行代码块之前，内部算法会先处理函数声明。所以函数声明在其被声明的代码块内的任何位置都是可见的。
    函数表达式在执行流程到达时创建。
    在大多数情况下，当我们需要声明一个函数时，最好使用函数声明，因为函数在被声明之前也是可见的。这使我们在代码组织方面更具灵活性，通常也会使得代码可读性更高。
 */

// 箭头函数
// ()=>{}