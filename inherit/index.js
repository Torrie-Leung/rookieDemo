// es5 inheritance
function Root(){
  this.name = 'root1'
}

function Branch(){
  Root.call(this) // call 方法把Root中作用域指定到Branch里来
  this.type = 'branch1'
}

console.log(new Branch);