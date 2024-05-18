// 数组类型
// 不定义类型，推断为never
let array = [];

// 定义类型
// 字符串类型数组
let array02: string[] = [];
array02.push("hello");

// 数值类型数组
let array03: number[] = [];
array03.push(123);

// 联合类型
let array04: (string | number)[] = [];
array04.push("hello");
array04.push(123456);

// 延迟类型,已经废弃了
const array05 = [];
array05; // 以前会推断为 any[] 现在是never类型

// arr.push(123);
// arr // error

// arr.push('abc');
// arr // error

// 只读数组
// const arr = [0, 1];
// arr[0] = 2;

const array06: readonly number[] = [0, 1];

// array06[1] = 2; // 报错
// array06.push(3); // 报错
// delete array06[0]; // 报错

let array07: number[] = [0, 1];
let array08: readonly number[] = array07; // 正确

// array07 = array08; // 报错
// array08 = array07; //正确

// 多维数组
var multi: number[][] = [
  [1, 2, 3],
  [23, 24, 25],
];
