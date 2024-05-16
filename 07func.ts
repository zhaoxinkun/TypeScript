// 函数类型
// 定义函数返回值类型
let func = function (): string {
  return "123";
};

// 定义参数类型
// let func02 = function (name: string, age: number): string {};

// 箭头函数问题
let func04 = (name: string, age: number): string => {
  return `${name},今年${age}岁了`;
};

// 嵌套问题
function greet(fn: (a: string) => void): void {
  fn("world");
}
