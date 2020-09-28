$(function(){
  // check all uncheck all
  //把全选按钮的状态赋值给商品中的按钮
  $(".checkAll").change(function(){
    $(".j-checkobx,.checkAll").prop("checked",$(this).prop("checked"))
    if($(this).prop("checked")) {
      getSum();
      $(".cart-item").addClass("check-bg")
    }else{
      clear();
      $(".cart-item").removeClass("check-bg")
    }
  })
  // 通过小复选框控制全选
  
  $(".j-checkobx").change(function(){
    var itemNum = $(".j-checkobx").length
    if($(".j-checkobx:checked").length === itemNum ){
      $(".checkAll").prop("checked",true) 
    }else{
      $(".checkAll").prop("checked",false) 
    }
    if($(this).prop("checked")){
      $(this).parents(".cart-item").addClass("check-bg")
    }else{
      $(this).parents(".cart-item").removeClass("check-bg")
    }
  })
  // 增减商品数量
  $(".increment").click(function(){
    var n = $(this).siblings(".itxt").val();
    n++;
    $(this).siblings(".itxt").val(n)
    var price = $(this).parents(".p-num").siblings(".p-price").html().substr(1);
    $(this).parent().parent().siblings(".p-sum").html("$"+(price*n).toFixed(2))
    getSum();
  })
  $(".decrement").click(function(){
    var n = $(this).siblings(".itxt").val();
    if(n == 1){
      return
    }
    n--;
    $(this).siblings(".itxt").val(n)
    var price = $(this).parents(".p-num").siblings(".p-price").html().substr(1);
    $(this).parent().parent().siblings(".p-sum").html("$"+(price*n).toFixed(2))
    getSum();
  })
  // 直接修改输入框数值
  $(".itxt").change(function(){
    var n = $(this).val()
    var price = $(this).parents(".p-num").siblings(".p-price").html().substr(1);
    $(this).parent().parent().siblings(".p-sum").html("$"+(price*n).toFixed(2));
    getSum();
  })

  // 首次打开页面调用
  // getSum();

  function getSum(){
    var count = 0;
    var bill = 0;
    $(".itxt").each(function(i,ele){
      count += parseInt($(ele).val());
    });
    $(".amount-sum em").text(count);
    $(".p-sum").each(function(i,ele){
      bill +=parseFloat($(ele).text().substr(1));
    })
    $(".price-sum em").text("$"+bill.toFixed(2));
  }
  function clear(){
    $(".amount-sum em").text('');
    $(".price-sum em").text("$");
  }

  // del product
  $(".del").click(function(){
    $(this).parents(".cart-item").remove()
    getSum()
  })

  $(".remove-product").click(function(){
    //删除小复选框选中
    $(".j-checkobx:checked").parents(".cart-item").remove();
    getSum();
  })
  $(".clear-all").click(function(){
    $(".cart-item").remove();
    getSum();
  })
  
});