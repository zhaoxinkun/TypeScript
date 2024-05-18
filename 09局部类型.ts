function hello02(txt: string) {
  type message = string;
  let newTxt: message = "hello " + txt;
  return newTxt;
}

// const newTxt: message = hello("world"); // 报错
// 上面示例中，类型message是在函数hello()内部定义的，只能在函数内部使用。在函数外部使用，就会报错。
