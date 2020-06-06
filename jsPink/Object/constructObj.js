// constructor function first letter should be capital
function Stars(name,pro,level){
  this.name = name
  this.pro = pro
  this.level = level
  this.trick = function(trick){
    console.log(trick);
  }
}
var Bender = new Stars('Bender','Sarcasm',230) // 调用构造函数返回一个Object
console.log(typeof Bender);
console.log(Bender.pro);
Bender.trick('psst')

