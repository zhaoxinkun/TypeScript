// 枚举类型

// 声明枚举类型,你对第一个怎么设,后边的就是在他的基础上进行递增,这是不设置的时候
enum SexType {
  Boy, //0
  Girl, //1
}
// 声明的话,要是字符串都是字符串,要是数值都是数值,必须全部声明,或者全部no
enum SexType02 {
  Boy = "男", //0
  Girl = "", //1
}
// 使用
const ak = {
  name: "akun",
  sex: SexType02.Boy,
};

console.log(ak); //{ name: 'akun', sex: 0 }

// 不允许同名的问题
// 编译前
// enum Color {
//   Red, // 0
//   Green, // 1
//   Blue, // 2
// }

// 编译后
let Color = {
  Red: 0,
  Green: 1,
  Blue: 2,
};
console.log(ak);

// 推荐使用场景
enum Operator {
  ADD, //0
  DIV, //1
  MUL, //2
  SUB, //3
}

function compute(op: Operator, a: number, b: number) {
  switch (op) {
    case Operator.ADD:
      return a + b;
    case Operator.DIV:
      return a / b;
    case Operator.MUL:
      return a * b;
    case Operator.SUB:
      return a - b;
    default:
      throw new Error("wrong operator");
  }
}

compute(Operator.ADD, 1, 3); // 4

// bug
enum Bool {
  No,
  Yes,
}

function foo(noYes: Bool) {
  // ...
}

// foo(33); // TypeScript 5.0 之前不报错,类型"33"的参数不能赋给类型boolean的参数

// enum成员的值
// enum Color {
//   Red,
//   Green,
//   Blue,
// }

// // 等同于
// enum Color {
//   Red = 0,
//   Green = 1,
//   Blue = 2,
// }

// 也可以是小数
// enum Color02 {
//   Red = 90,
//   Green = 0.5,
//   Blue = 7n, // 报错
// }

// // 成员值递增
// enum Color {
//   Red = 7,
//   Green, // 8
//   Blue, // 9
// }

// // 成员值递增或者
// enum Color {
//   Red, // 0
//   Green = 7,
//   Blue, // 8
// }

// 所有的值都是只读属性
// enum Color03 {
//   Red,
//   Green,
//   Blue,
// }

// Color03.Red = 4; // 报错

enum Foo {
  A,
}

enum Foo {
  B = 1,
}

enum Foo {
  C = 2,
}

console.log(Foo); //{ '0': 'A', '1': 'B', '2': 'C', A: 0, B: 1, C: 2 }

// 字符串枚举 .所有成员值，都必须显式设置
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// 混合枚举类型
enum Enum {
  One = "One",
  Two = "Two",
  Three = 3,
  Four = 4,
}

enum MyEnum {
  One = "One",
  Two = "Two",
}

function f(arg: MyEnum) {
  return "arg is " + arg;
}

// f("One"); // 报错
f(MyEnum.One); //合法

// keyof关键字
enum MyEnum01 {
  A = "a",
  B = "b",
}

// 'A'|'B'
type Foo01 = keyof typeof MyEnum01;
