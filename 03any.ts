// let akun: string | boolean | number;
// akun = "akun";
// akun = true;
// akun = 100;

// let akun: any;

// //以下赋值不会报错
// akun = "akun";
// akun = 1999;
// akun = true;
// akun = [];
// akun = {};
// akun = class {};

// 数组中
// let akun: any[] = ["akun.com", "akun", 2010, true];

// 泛型
// let akun: Array<any> = ["akun.com", "akun", 2010, true];

// 对象
// let akun: {
//   name: any;
//   year: any;
// };
// //以下设置都不会报错
// akun = { name: "akun", year: 2010 };
// akun = { name: 2010, year: "akun" };

// //添加或使用不存的属性或者方法
// let akun: any;
// akun.get(); //不会报错

// 示例
// class akun {
//   constructor() {}
//   get = () => "akun";
// }

// const obj: any = new akun();
// console.log(obj.get());  //akun

// // obj.show(); //error

// // 打开配置 noImplicitAny=true
// function sum(a, b) {
//   return a + b;
// } //error

// //这种没有赋值的情况是不会报错的
// var x; // 不报错
// let y; // 不报错
