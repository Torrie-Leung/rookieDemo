function f1(){
  var num = 123;
  function f2(){
    console.log(num);
  }
  f2()
}
var num = 456;
f1(); // 123