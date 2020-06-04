function f1(){
  var a = b = c = 9; // equals to var a = 9; b = 9; c = 9 b和c直接赋值 没有var声明 都当全局变量看
  console.log({a});
  console.log({b});
  console.log({c});
}
f1();
console.log({c});// 9
console.log({b}); // 9
console.log(a); // error