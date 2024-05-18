// 函数没有返回值
function func001(): void {
  console.log("没有返回值"); //合法
  // return 123//不合法
}

// 类型
let akun001: void = undefined;
// let akun002: void = null;

function func002(): void {}
let akun003 = func002();
console.log(akun003); //unfined

// 总的来说，不配置的情况下，可以是nulll，undfined和错误
