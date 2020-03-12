let user = {     // 一个对象
    name: "John",  // 键 "name"，值 "John"
    age: 30,       // 键 "age"，值 30
    "likes birds": true  // 多词属性名必须加引号
};

alert( user.name ); // 读取
user.isAdmin = true; //增加
delete user.age; // 删除
delete user["likes birds"];  // 方括号

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // 属性名是从 fruit 变量中得到的
};

alert( bag.apple ); // 5 如果 fruit="apple"

// "key" in object
alert( "age" in user ); // true，user.age 存在

for (let key in user) {
    // keys
    alert( key );  // name, age, isAdmin
    // 属性键的值
    alert( user[key] ); // John, 30, true
}

// 引用复制

// 常量对象
// 一个被 const 修饰的对象是 可以 被修改


// 复制合并
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// 把 permissions1 和 permissions2 的所有属性都拷贝给 user
Object.assign(user, permissions1, permissions2);
// 覆盖 name，增加 isAdmin
Object.assign(user, { name: "Pete", isAdmin: true });

// 在复制的时候应该检查 user[key] 的每一个值，如果它是一个对象，那么把它也复制一遍，这叫做深拷贝（deep cloning

// 垃圾回收是自动完成的，我们不能强制执行或是阻止执行。
// 当对象是可达状态时，它一定是存在于内存中的。
// 被引用与可访问（从一个根）不同：一组相互连接的对象可能整体都不可达。


// Symbol
// Symbol 比较特殊，它不会被自动转换 。
// Symbol.toString()  symbol.description 属性，只显示描述（description）

// 如果我们要在对象字面量 {...} 中使用 Symbol，则需要使用方括号把它括起来。
let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123 // 而不是 "id：123"
};

// Symbol 在 for…in 中会被跳过