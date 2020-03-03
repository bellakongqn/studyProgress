Set
.size => 成员总数
.add => 返回set本身
.delete => true|false
.has(value) => true|false
.clear => 清除所有成员，没有返回值

1.数组去重
  - [...new Set(array)]
  - Array.from方法可以将 Set 结构转为数组
    Array.from(new Set(array))
.keys() => 返回键名的遍历器
.values() => 返回键值的遍历器
.entries() => 返回键值对的遍历器
.forEach() => 使用回调函数遍历每个成员

keys() === values() Set结构没有键名
entries()=> 'red':'red'

遍历
let set = new Set(['red', 'green', 'blue']);
for (let x of set) {
  console.log(x);
}

let set = new Set([1, 4, 9]);
set.forEach((value, key) => console.log(key + ' : ' + value))

let set = new Set(['red', 'green', 'blue']);
let arr = [...set];

set = new Set([...set].map(x => x * 2));
set = new Set([...set].filter(x => (x % 2) == 0));
