// 函数类型
// 定义参数类型
let func = function (name: string, age: number) {};

// 定义函数返回值类型
let func01 = function (): string {
  return "123";
};

// 变量写法
// 写法一
const func02 = function (txt: string) {
  console.log("hello " + txt);
};

// 写法二
const func03: (txt: string) => void = function (txt) {
  console.log("hello " + txt);
};

// 箭头函数问题
let func04 = (name: string, age: number): string => {
  return `${name},今年${age}岁了`;
};

// 嵌套问题
function greet(fn: (a: string) => void): void {
  fn("world");
}
