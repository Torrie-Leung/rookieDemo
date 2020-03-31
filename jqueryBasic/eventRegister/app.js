$('div').on({
  mouseenter: function(){
    $(this).css('background','skyblue')
  },
  click: function(){
    $(this).css('background','purple')
  },
  mouseleave: function(){
    $(this).css('background','none')
  }
})
$('div').on('mouseenter mouseout', function(){
  $(this).toggleClass('current')
})
// on 事件委派
$('ul').on('click','li',function(e){
  console.log(e.target.innerText);
})
$('ol').on('click','li',function(e){
  console.log(e.target.innerText);
})
let li = $('<li>new</li>')
$('ol').append(li)