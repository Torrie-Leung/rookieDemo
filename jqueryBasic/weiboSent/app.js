$(function(){
  $('.btn').on('click',function(){
    let li = $('<li></li>')
    li.html($('.txt').val() + "<a href='javasript:;'>Delete</a>")
    $('ul').prepend(li)
    li.slideDown()
    $('.txt').val("")

  })
  // click to delete
  // event delegation
  $('ul').on('click','a',function(){
    // $(this).parent().slideUp().remove()
    $(this).parent().slideUp(function(){
      $(this).parent().remove()
    })
  })
})