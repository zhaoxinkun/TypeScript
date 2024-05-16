// 数组类型
// 不定义类型，推断为never
let array = [];

// 定义类型
// 字符串类型数组
let array02: string[] = [];
array02.push("hello");

// 联合类型
let array03: (string | number)[] = [];
array03.push("hello");
array03.push(123456);

// 延迟类型,已经废弃了
// const arr = [];
// arr // 推断为 any[]

// arr.push(123);
// arr // 推断类型为 number[]

// arr.push('abc');
// arr // 推断类型为 (string|number)[]

// 只读数组
// const arr = [0, 1];
// arr[0] = 2;

// const arr02:readonly number[] = [0, 1];

// arr02[1] = 2; // 报错
// arr02.push(3); // 报错
// delete arr[0]; // 报错

// 多维数组
var multi: number[][] = [
  [1, 2, 3],
  [23, 24, 25],
];
