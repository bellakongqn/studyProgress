/*
    元组（Tuple）合并了不同类型的对象
    当赋值或访问一个已知索引的元素时，会得到正确的类型
    也可以只赋值其中一项
    但是当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项
    当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型
*/
/*
    let tom: [string, number] = ['Tom', 25];

    tom[0] = 'Tom';
    tom[1] = 23;

    tom[0].slice(1);
    tom[1].toFixed(2);

    let bellaa: [string, number] = ['bella',23]
*/

let tom: [string, number];
tom = ['Tom', 25];
tom.push('male');