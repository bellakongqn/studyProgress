### 字符串的扩展
1. for...of 遍历
for (let codePoint of 'foo') {
  console.log(codePoint)
}
// "f" // "o" // "o"
2. 模板字符串
`${name}`

3. indexOf() includes(), startsWith(), endsWith()
includes()：返回布尔值，表示是否找到了参数字符串。
startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。

let s = 'Hello world!';
s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true

这三个方法都支持第二个参数，表示开始搜索的位置。
let s = 'Hello world!';
s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false

4. repeat()
repeat方法返回一个新字符串，表示将原字符串重复n次
'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // ""

5. padStart() padEnd()
padStart()用于头部补全，padEnd()用于尾部补全
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'

6. trimStart()，trimEnd()
trimStart()消除字符串头部的空格，trimEnd()消除尾部的空格 返回的都是新字符串，不会修改原始字符串
const s = '  abc  ';
s.trim() // "abc"
s.trimStart() // "abc  "
s.trimEnd() // "  abc"