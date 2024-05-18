// 就是一个不重复的字符串
// let定义symbol推断为symbol
let sym = Symbol(); //symbol

// const定义的会推断为unique symbol
const sym02 = Symbol(); //unique symbol

// let声明的symbol一定是symbol,然后复制给另一个const也是symbol
let sym03 = Symbol(); //symbol
// 类型为 symbol
const sym04 = sym03; // const sym04=symbol()

// 这里推断一定是US,赋值给let也是symbol
const sym05 = Symbol();
// 类型为 symbol
let sym06 = sym05;

// unique symbol的唯一性
// const sym07:unique symbol = Symbol();
// const sym08:unique symbol = Symbol();

// sym07 === sym08 // 报错
// sym08 === sym07 // 报错
