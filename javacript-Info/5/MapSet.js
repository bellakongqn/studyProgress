/**
 * Map
 * Map 是一个带键的数据项的集合，就像一个 Object 一样。 但是它们最大的差别是 Map 允许任何类型的键（key）
 * new Map() － 创建 map。
 * map.set(key, value) － 根据键存储值。
 * map.get(key) － 根据键来返回值，如果 map 中不存在对应的 key，则返回 undefined。
 * map.has(key) － 如果 key 存在则返回 true，否则返回 false。
 * map.delete(key) － 删除指定键的值。
 * map.clear() － 清空 map。
 * map.size － 返回当前元素个数。
*/
let map = new Map();
map.set('1', 'str1');   // 字符串键
map.set(1, 'num1');     // 数字键
map.set(true, 'bool1'); // 布尔值键
// 还记得普通的 Object 吗? 它会将键转化为字符串
// Map 则会保留键的类型，所以下面这两个结果不同：
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'
alert( map.size ); // 3

// 对象作为建
let john = { name: "John" };
// 存储每个用户的来访次数
let visitsCountMap = new Map();
// john 是 Map 中的键
visitsCountMap.set(john, 123);
alert( visitsCountMap.get(john) ); // 123

/**
 * Map 迭代
 * map.keys() － 遍历并返回所有的键
 * map.values() － 遍历并返回所有的值
 * map.entries() － 遍历并返回所有的实体 for..of 在默认情况下使用的就是这个
*/

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
]);
// 遍历所有的键
for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // cucumber, tomatoes, onion
}
// 遍历所有的值
for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
}
// 遍历所有的实体 [key, value]
for (let entry of recipeMap) {
    alert(entry); // cucumber,500 (and so on)
}

/**
 * Object.entries：从对象创建 Map
*/
// 键值对 [key, value] 数组
let map = new Map([
    ['1',  'str1'],
    [1,    'num1'],
    [true, 'bool1']
]);
alert( map.get('1') ); // str1

let obj = {
    name: "John",
    age: 30
};
let map = new Map(Object.entries(obj));
alert( map.get('name') ); // John

/**
 * Set  “值的集合”（没有键），它的每一个值只能出现一次
 * new Set(iterable) － 创建一个 set，如果提供了一个 iterable 对象（通常是数组），将会从数组里面复制值到 set 中。
 * set.add(value) － 添加一个值，返回 set 本身
 * set.delete(value) － 删除值，如果 value 在这个方法调用的时候存在则返回 true ，否则返回 false。
 * set.has(value) － 如果 value 在 set 中，返回 true，否则返回 false。
 * set.clear() － 清空 set。
 * set.size － 返回元素个数
*/

/**
 * Set 迭代
 * 我们可以使用 for..of 或 forEach 来遍历 Set
*/

/**
 * WeakMap and WeakSet
 * WeakMap 是类似于 Map 的集合，它仅允许对象作为键，并且一旦通过其他方式无法访问它们，便会将它们与其关联值一同删除。
 * WeakSet 是类似于 Set 的集合，它仅存储对象，并且一旦通过其他方式无法访问它们，便会将其删除。
 * 它们都不支持引用所有键或其计数的方法和属性。仅允许单个操作。
 * WeakMap 和 WeakSet 被用作“主要”对象存储之外的“辅助”数据结构。一旦将对象从主存储器中删除，如果该对象仅被用作 WeakMap 或 WeakSet 的键，那么它将被自动清除。
*/