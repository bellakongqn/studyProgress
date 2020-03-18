/**
 * arr.splice(index[, deleteCount, elem1, ..., elemN]) => 返回被删除元素组成的数组 
 * 负向索引都是被允许的。它们从数组末尾计算位置 ！！！改变原数组
*/
let arrSplice = ["I", "study", "JavaScript"];
// 删除
arrSplice.splice(0,1)  // => 返回['I']
// 插入
arrSplice.splice(1,0,'bella','wyatt') // =>返回[]
// 编辑
arrSplice.splice(1,1,'bella','wyatt') // =>返回["study"]


/**
 * arr.slice([start], [end]) => 返回start->end区间数组 
 * 会返回一个新数组，将所有从索引 start 到 end（不包括 end）的数组项复制到一个新的数组
 * start 和 end 都可以是负数，在这种情况下，从末尾计算索引 ！！！！不改变原数组
 * 通常用于获取副本，以进行不影响原始数组的进一步转换
*/
let arrSlice = ["t", "e", "s", "t"];
// 复制
let newArr = arrSlice.slice(1,2) // =>返回['e']

let newArr1 = arrSlice.slice(1) // =>返回["e", "s", "t"]

/**
 * arr.concat(arg1, arg2...) => 返回连接后的新数组
 * ！！！！不改变原数组
*/
let arrConcat = [1, 2];
arrConcat.concat([3, 4]) // => [1,2,3,4]

/**
 *arr.forEach(function(item, index, array) {
 *   // ... do something with item
 *   }); ！！！不确定是否改变
 * 该函数的结果（如果它有返回）会被抛弃和忽略
 * oldArr.forEach((item,index)=>{
 *    oldArr[index] =2
 *  }) ！！！改变
*/
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
});

/**
 * indexOf/lastIndexOf 和 includes
 * arr.indexOf(item, from) 从索引 from 开始搜索 item，如果找到则返回索引，否则返回 -1
 * arr.lastIndexOf(item, from) 和上面相同，只是从右向左搜索。
 * arr.includes(item, from) 从索引 from 开始搜索 item，如果找到则返回 true（译注：如果没找到，则返回 false）
 * ！！！不改变原数组
*/
let arrSearch = [1, 0, false];
arrSearch.indexOf(0); // 1
arrSearch.indexOf(false); //返回 => 2
arrSearch.indexOf(3) // 返回=>-1
arrSearch.lastIndexOf(0); //返回=> 1
arrSearch.includes(1); // 返回=>true

/**
 * find 和 findIndex
 * let result = arr.find(function(item, index, array) {
 *   // 如果返回 true，则返回 item 并停止迭代
 *   // 对于 falsy 则返回 undefined
 * });
 * ！！！不改变原数组
*/

let usersFind = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];
let userFind = usersFind.find(item => item.id == 1); // 返回 => {id: 1, name: "John"}
let userFindIndex = usersFind.find(item => item.id == 1); // 返回 => 0

/**
 * filter
 * find 方法搜索的是使函数返回 true 的第一个（单个）元素 => 匹配多个 filter
 * let results = arr.filter(function(item, index, array) {
 *   // 如果 true item 被 push 到 results，迭代继续
 *   // 如果什么都没找到，则返回空数组
 *  });
*/
let usersFilter = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];

// 返回前两个用户的数组
let someUsersFilter = usersFilter.filter(item => item.id < 3); // => [{id: 1, name: "John"},{id: 2, name: "Pete"}]

/**
 * arr.map 方法是最有用和经常使用的方法之一。
 * 它对数组的每个元素都调用函数，并返回结果数组 ！！！改变原数组
 * let result = arr.map(function(item, index, array) {
 *  // 返回新值而不是当前元素
 * })
*/
let lengthMap = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length); // => [5,7,6]

/**
 * sort
 * !!!!改变原数组
*/
let arrSort = [ 1, 2, 15 ];
arrSort.sort( (a, b) => a - b ); // => [1,2,15]

/**
 * reverse !!!!改变原数组
 * 颠倒 arr 中元素的顺序
*/
let arrReverse = [1, 2, 3, 4, 5];
arrReverse.reverse();  // => [5,4,3,2,1]

/**
 * split 和 join
*/
let names = 'Bilbo, Gandalf, Nazgul';
let arr = names.split(', '); // =>['Bilbo', 'Gandalf', 'Nazgul']

let str = "test";
str.split('');  // =>   ["t", "e", "s", "t"]

/**
 * reduce/reduceRight
 * 当我们需要遍历一个数组时 — 我们可以使用 forEach，for 或 for..of。
 * 当我们需要遍历并返回每个元素的数据时 — 我们可以使用 map
 * let value = arr.reduce(function(accumulator, item, index, array) {
 * // ...
 * }, [initial]);
 * accumulator – 是上一个函数调用的结果，第一次等于 initial（如果提供了 initial 的话）
 * 如果没有初始值，那么 reduce 会将数组的第一个元素作为初始值，并从第二个元素开始迭代
 * item — 当前的数组元素。
 * index — 当前索引。
 * arr — 数组本身。
 * arr.reduceRight 和 arr.reduce 方法的功能一样，只是遍历为从右到左
*/
let arrReduce = [1, 2, 3, 4, 5];
let resultReduce = arr.reduce((sum, current) => sum + current, 0); // => 15

/**
 * Array.isArray
*/
Array.isArray({}) // => false
Array.isArray([]) // => true

/**
 * 数组方法备忘单：
添加/删除元素：
push(...items) — 向尾端添加元素，
pop() — 从尾端提取一个元素，
shift() — 从首端提取一个元素，
unshift(...items) — 向首端添加元素，
splice(pos, deleteCount, ...items) — 从 index 开始删除 deleteCount 个元素，并在当前位置插入 items。
slice(start, end) — 创建一个新数组，将从位置 start 到位置 end（但不包括 end）的元素复制进去。
concat(...items) — 返回一个新数组：复制当前数组的所有元素，并向其中添加 items。如果 items 中的任意一项是一个数组，那么就取其元素。

搜索元素：
indexOf/lastIndexOf(item, pos) — 从位置 pos 开始搜索 item，搜索到则返回该项的索引，否则返回 -1。
includes(value) — 如果数组有 value，则返回 true，否则返回 false。
find/filter(func) — 通过 func 过滤元素，返回使 func 返回 true 的第一个值/所有值。
findIndex 和 find 类似，但返回索引而不是值。

遍历元素：
forEach(func) — 对每个元素都调用 func，不返回任何内容。

转换数组：
map(func) — 根据对每个元素调用 func 的结果创建一个新数组。
sort(func) — 对数组进行原位（in-place）排序，然后返回它。
reverse() — 原位（in-place）反转数组，然后返回它。
split/join — 将字符串转换为数组并返回。
reduce(func, initial) — 通过对每个元素调用 func 计算数组上的单个值，并在调用之间传递中间结果。

其他：  – Array.isArray(arr) 检查 arr 是否是一个数组。

请注意，sort，reverse 和 splice 方法修改的是数组本身。

arr.some(fn)/arr.every(fn) 检查数组。
与 map 类似，对数组的每个元素调用函数 fn。如果任何/所有结果为 true，则返回 true，否则返回 false。

arr.fill(value, start, end) — 从索引 start 到 end，用重复的 value 填充数组

arr.copyWithin(target, start, end) — 将从位置 start 到 end 的所有元素复制到 自身 的 target 位置（覆盖现有元素）
*/