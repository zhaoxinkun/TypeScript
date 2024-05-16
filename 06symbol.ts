// 就是一个不重复的字符串
// let定义symbol推断为symbol
let sym = Symbol(); //symbol

// const定义的会推断为unique symbol
const sym02 = Symbol(); //unique symbol

// let声明的symbol一定是symbol,然后复制给另一个const也是symbol
// let x = Symbol();  //symbol
// // 类型为 symbol
// const y = x;  // const y=symbol()

// 这里推断一定是US,赋值给let也是symbol
const x = Symbol();
// 类型为 symbol
let y = x;
