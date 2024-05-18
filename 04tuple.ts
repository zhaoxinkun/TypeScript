// 关于元组
// 创建元组,全部声明类型
let arr: [string, number, boolean] = ["a", 123, true];

// 对比数组,类型的定义在[]外
let arr03: string[] = [];

// 可选参数
let arr02: [string, number, boolean?] = ["a", 123];

// 是否越界
let arr04: [string, string] = ["a", "b"];
// arr04[2] = "c"; // 报错

// 不设定界限
type NamedNums = [string, ...number[]];
const a: NamedNums = ["A", 1, 2];
const b: NamedNums = ["B", 1, 2, 3];
type Tuple = [...any[]];

// 成员名
type Color = [red: number, green: number, blue: number];

const c: Color = [255, 255, 255];
// 只读元组
type t = readonly [number, string];
let arr05: t = [123, "a"];

// 成员数量
// function f(point: [number, number]) {
//   if (point.length === 3) {
//     // 报错
//     // ...
//   }
// }

// 可选参数
// function f(point: [number, number?, number?]) {
//   if (point.length === 4) {
//     // 报错
//     // ...
//   }
// }

// 扩展运算符
const arr06 = [1, 2];

// function add(x: number, y: number) {
//   // ...
// }

// add(...arr06); // 报错

const arr07 = [1, 2, 3];
console.log(...arr07); // 正确
