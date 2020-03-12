// 原始类型的方法

// 数字类型 

/*
// 科学计数法
1e3 = 1 * 1000
1e-6 = 0.000001;

十六进制0x 二进制0b 八进制0o
alert( 0xff ); // 255

toString(base)
num.toString(base) 返回带有给定 base 的进制中 num 的字符串表示。

let num = 255;
alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

123456..toString(36)  (123456).toString(36)
*/

/*
数值修约
向下舍入 : Math.floor
向上舍入 : Math.ceil
四舍五入 : Math.round
舍弃小数点 : Math.trunc
保留小数几位 : toFixed() // 结果是字符串
*/

/**
 * 不精确计算
 * 结果四舍五入
 * let sum = 0.1 + 0.2;
    alert( +sum.toFixed(2) ); // 0.3

    暂时存为整数
    alert( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3
    alert( (0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001
 */

 /**
  * Infinity - Infinity  NaN isNaN
  * isNaN(value) 将其参数转换为数字，然后测试它是否为 NaN
  * isFinite(value) 将其参数转换为数字，如果是常规数字，则返回 true，而不是 NaN / Infinity / -Infinity
  */

  /**
   * parseInt()
   * parseFloat()
   * parseInt(str, radix)` 的第二个参数
   * parseInt('0xff', 16) =>255
   */

   /**
    * 其他数学函数
    * Math.random()
    * Math.max(a, b, c...) / Math.min(a, b, c...)
    * Math.pow(n, power) 返回 n 的 power 次幂，即 npower
    */


    // 字符串
    /**
     * 单引号 双引号 反引号
     * 字符串长度 .length
     * 
     * 访问字符
     * 要获取在 pos 位置的一个字符，可以使用方括号 [pos] 或者调用 str.charAt(pos) 方法。第一个字符从零位置开始
     * str[0] str.charAt(0)
     * 
     * 改变大小写
     * toUpperCase() toLowerCase()
     * 
     * 查找子字符串
     * indexOf('str',1) //从1开始 indexOf('str')
     * lastIndexOf('str',1)
     * includes('str')
     * "Widget".startsWith("Wid")
     * "Widget".endsWith("get")
     * 
     * 获取子字符串
     * str.slice(start [, end]) 没有第二个参数，slice 会一直运行到字符串末尾
     * str.substring(start [, end])  这与 slice 几乎相同，但它允许 start 大于 end 不支持负参数（不像 slice），它们被视为 0
     * str.substr(start [, length]) 第一个参数可能是负数，从结尾算起
     * 方法                 	选择方式……	                            负值参数
        slice(start, end)	    从 start 到 end（不含 end）	允许
        substring(start, end)	start 与 end 之间（包括 start 和 end）	负值代表 0
        substr(start, length)	从 start 开始获取长为 length 的字符串	允许 start 为负数
     * 
     * 比较字符串
     */