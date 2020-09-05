$(function(){
// check all uncheck all
//把全选按钮的状态赋值给商品中的按钮
  $(".checkAll").change(function(){
    $(".j-checkobx").prop("checked",$(this).prop("checked")) 
  })
});