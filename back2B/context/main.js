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

$('li').on('click',function(){
  var currTimes = parseInt($(this).find('span').html())
  currTimes++;
  $(this).find('span').html(currTimes)
})

$('#self').on('click',function(){
  // redirect this to self
  let self = this
  $('#selfBlock').slideToggle(100,function(){
    $(self).toggleClass("active")
  })
})

//use bind to redirect
$('#bind').on('click',function(){
  $('#bindBlock').slideToggle(90,function(){
    $(this).toggleClass('active')
  }.bind(this))
})
console.log('all the walls go to hell')