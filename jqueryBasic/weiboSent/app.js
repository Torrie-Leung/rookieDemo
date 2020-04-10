$(function(){
  $('.btn').on('click',function(){
    let li = $('<li></li>')
    li.html($('.txt').val() + "<a href='javasript:;'>Delete</a>")
    $('ul').prepend(li)
    li.slideDown()
  })
})