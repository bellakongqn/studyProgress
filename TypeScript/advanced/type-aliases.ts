// 类型别名 用来给一个类型起个新名字 一般用于联合类型

type UnionType = string | number;

function getName(n: UnionType): UnionType {
    return n;
}

