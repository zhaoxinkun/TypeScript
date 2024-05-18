// 函数类型
// 自动推断
let akun = () => "akun"; //sting

let akun2: Function;
akun2 = () => "akun.com";
console.log(akun());

function hello(txt: string): void {
  console.log("hello " + txt);
}

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

// 可选参数
function func04(a: number, b: string, c?: number) {
  console.log(a + b + c);
}
func04(2, "hello"); //合法
func04(2, "hello", 123); //合法

// 参数默认值
function func06(a: number, b: string, c = 100) {
  console.log(a + b + c);
}
func06(123, "hello"); //合法

// 参数签名
// 没有签名
let addUser = (user: { name: string; age: number }): void => {
  console.log("添加用户");
};

let updateUser = (user: { name: string; age: number }): void => {
  console.log("更新用户");
};

updateUser({ name: "akun", age: 18 });

// 进行了签名
type useType = { name: string; age: number };

let addUser01 = (user: useType) => {};
let updateUser01 = (user: useType) => {};

// 箭头函数问题
let func05 = (name: string, age: number): string => {
  return `${name},今年${age}岁了`;
};

// 嵌套问题
function greet(fn: (a: string) => void): void {
  fn("world");
}
