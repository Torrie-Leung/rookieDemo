// es5 inheritance
function Root(num){
  this.name = 'root1';
  this.num = num
  this.motion = function(){
    console.log(this.num);
  }
}


function Branch(){
  Root.call(this) // call 方法把Root中作用域指定到Branch里来,只能继承属性值
  this.type = 'branch1'
}

// console.log(new Branch);
// Branch.digHole(1)

// prototype
function BranchPro(){
  this.type = 'branchpro'
}
BranchPro.prototype = new Root(3)
console.log(new BranchPro);

function User(name,age){
  this.name = name;
  this.age = age;
  this.display = function(){
    console.log(this.name + ' '+this.age +'year-old');
  }
}
let passerby = new User('passerby',35)
passerby.display();