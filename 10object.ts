// 对象类型
// 自动推断;
const user = { name: "akun", age: 18, open: true };

// 嵌套对象
const user02 = {
  name: "akun",
  age: 18,
  open: true,
  lessons: [{ title: "linux" }, { title: "TS" }],
};
// user.lessons[0].title = 100;   //error

// 自主定义
let akun0001: object;
akun0001 = { name: "akun" };
akun0001 = {}; //使用字面量声明对象
akun0001 = []; //数组是对象
akun0001 = Object.prototype; //原型对象
// akun0001 = "akun"; //报错，改变了类型为字符串

// 不能省略
type MyObj = {
  x: number;
  y: number;
};

// const o1:MyObj = { x: 1 }; // 报错
// const o2:MyObj = { x: 1, y: 1, z: 1 }; // 报错
