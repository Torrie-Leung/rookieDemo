window.onload = function(){
  const items = document.getElementsByName('items')
  function btnClick(idStr,fun){
    btn = document.getElementById(idStr)
    btn.onclick = fun
  }
  //select all btn
  btnClick('checkAllBtn',function(){
    //grab all items
    
    //console.log(items)
    for(i = 0; i<items.length; i++){
      items[i].checked = !items[i].checked
    }
  })

  //cancel all btn
  btnClick('cancleAllBtn',function(){
    for(i = 0; i<items.length; i++){
      if(items[i].checked){
        items[i].checked = false
      }
    }
  })

  //reverse selected btn
  btnClick('revBtn',function(){
    for(i = 0; i<items.length; i++){
      items[i].checked = !items[i].checked
    }
  })
  //submit btn
  btnClick('submitBtn',function(){
    for(i = 0; i<items.length; i++){
      if(items[i].checked){
        console.log(items[i].value)
      }
    }
  })

  //Select all/or not
  btnClick('checkAllItems',function(){
    for(i = 0; i<items.length; i++){
      items[i].checked = checkAllItems.checked
    }
  })

  
}