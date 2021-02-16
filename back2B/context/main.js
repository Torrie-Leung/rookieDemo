// context === this
var obj = {
  foo: function(){
    // console.log(this === window);
    console.log(this);
  }
}
// call,apply,bind
obj.foo() // false
//call takes infinite args
obj.foo.call(window) // true
// apply only takes 2 args 1st: the new context, 2nd: an array

$('body').on('click',obj.foo)