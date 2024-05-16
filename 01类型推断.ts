//这里的内容就是如果你没有主动声明类型的话，ts会自动进行推断

// 字符串
// let akun = "akun.com"; //string
// // akun = 18; // error

// 数值
// let akun = 100; //let akun : number
// akun = "akun.com"; //error
// akun = 100.1;
// akun = -101;

// 布尔类型
// let state = true;
// state=18  //error

// 数组
// const akun = ["akun.com", "akun001"]; //const akun : string[]
// hd.push(100); //因为类型不允许，所以报错

//定义union联合类型
// const akun = ["akun.com", "akun001", 100]; //const akun :(string|number)[]
// akun.push(100, "kunkun"); //数组允许数值、字符串类型，所以编译通过

// 对象类型
// const user = { name: "akun", age: 18, open: true };

// 添加不存在的属性报错
// const user = { name: "akun", age: 18, open: true };
// user.city = "杭州";

// 复杂对象类型
// const user = {
//   name: "akun",
//   age: 18,
//   open: true,
//   lessons: [{ title: "linux" }, { title: "TS" }],
// };
// user.lessons[0].title = 100;   //error

// 函数类型，什么都不限制
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum("a", 3)); //结果为 a3

// 限制参数;
// function sum(a: number, b: number) {
//   return a + b;
// }
// console.log(sum("a", 3));   //error

//限制返回值
// function sum(a: number, b: number): string {
//   return a + b;
// }
// console.log(sum("a", 3));
