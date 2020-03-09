interface Person {
    name:string;
    age?:number; // 可选
    [propName:string]:any; // 任意 string number 是any子集
}

let toms: Person = {
    name: 'Tom',
    age: 25
};


let wyatt: Person = {
    name: 'wyatt',
};

let bella: Person = {
    name:'bella',
    age:20,
    sex:'male'
}