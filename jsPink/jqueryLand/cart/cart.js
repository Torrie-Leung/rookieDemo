$(function(){
  // check all uncheck all
  //把全选按钮的状态赋值给商品中的按钮
  $(".checkAll").change(function(){
    $(".j-checkobx,.checkAll").prop("checked",$(this).prop("checked")) 
  })
  // 通过小复选框控制全选
  
  $(".j-checkobx").change(function(){
    var itemNum = $(".j-checkobx").length
    if($(".j-checkobx:checked").length === itemNum ){
      $(".checkAll").prop("checked",true) 
    }else{
      $(".checkAll").prop("checked",false) 
    }
  })
  // 增减商品数量
  $(".increment").click(function(){
    var n = $(this).siblings(".itxt").val();
    n++;
    $(this).siblings(".itxt").val(n)
  })
  $(".decrement").click(function(){
    var n = $(this).siblings(".itxt").val();
    if(n == 1){
      return
    }
    n--;
    $(this).siblings(".itxt").val(n)
  })
});