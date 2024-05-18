// 百分之百不会有返回值，除非是异常

// function func0001(): never {
//    报错，因为不能有返回的终点，要么在这里抛出异常，要么直接无限循环
// }

function func0002(): never {
  throw "异常了"; //合法
}

// 无限循环函数
const sing = function (): never {
  while (true) {
    console.log("sing");
  }
};
