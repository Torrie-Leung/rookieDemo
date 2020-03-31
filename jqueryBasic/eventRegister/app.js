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