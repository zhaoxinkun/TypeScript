// 断言
// 签名
type T = "a" | "b" | "c";
let foo01 = "a";

// let bar: T = foo01; // 报错

// 对象多余属性
// let obj0: { x: number} = { x: 100,y:200 }; //error
// 方法一
let obj02: { x: number } = { x: 100, y: 200 } as { x: number };
// 方法二
let obj03: { x: number } = { x: 100, y: 200 } as { x: number; y: number };

// let和const的区别
// let是会被推断为一个类型的
let s = "javascript"; //:string
const s2 = "javaScript";
console.log(s);
console.log(s2);

let s03 = "JavaScript";
const s04 = "JavaScript";

type Lang = "JavaScript" | "TypeScript" | "Python";

function setLang(language: Lang) {
  /* ... */
}

// setLang(s03); // 报错
setLang(s04); // 合法

// const声明最窄变量值
let akun = "akun01"; //:string
const akun02 = "akun02";
let akun03 = "akun01" as const; //变成值类型 :akun01

// 对象转化为只读属性
let obj04 = { name: "akun" } as const;
// obj04.name = "hhhh"; //error

// 数组问题
let a = "akun";
let b = 100;
// let的时候是类型
let obj05: { a; b } = { a: "akun", b: 200 }; //{string.number}
// 也可以更改
let f02 = obj05[1];
f02 = "akun";
console.log(obj05);

// 断言函数
// 基本断言函数
// 类型是unknowm,返回值是void
function isstring(val: unknown): void {
  if (typeof val !== "string") throw new Error("no a string");
}
// s是字符串类型,然后作为参数放进isstring函数中,进行判断,如果是number的话就会报错
// function toUpper(x: string | number) {
//   isstring(x);
//   return x.toUpperCase(); //error
// }
// 合法的
function toUpper(x: string) {
  isstring(x);
  return x.toUpperCase(); //error
}

// 新写法
// function isString(value: unknown): asserts value is string {
//   if (typeof value !== "string") throw new Error("Not a string");
// }

// 非法的
function isString(value: unknown): asserts value is string {
  if (typeof value !== "number") throw new Error("Not a number");
}
