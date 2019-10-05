window.onload = function(){
  const items = document.getElementsByName('items')
  const checkAllItems = document.getElementById('checkAllItems')
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

    checkAllItems.checked = true    
  })

  //cancel all btn
  btnClick('cancleAllBtn',function(){
    for(i = 0; i<items.length; i++){
      if(items[i].checked){
        items[i].checked = false
      }
    }
    checkAllItems.checked = false
  })

  //reverse selected btn
  btnClick('revBtn',function(){
    checkAllItems.checked = true
    for(i = 0; i<items.length; i++){
      items[i].checked = !items[i].checked
      if(!items[i].checked){
        checkAllItems.checked = false
        
      }
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
    //console.log(this === checkAllItems)
    for(i = 0; i<items.length; i++){
      items[i].checked = this.checked
    }
    
  })

  //track btn onchange
    for(i = 0; i<items.length; i++){
      items[i].onclick = function () {
        checkAllItems.checked = true
        for(j = 0; j<items.length; j++){
          if(!items[j].checked){
            
            checkAllItems.checked = false
            break
          }
        }
      }
    }

  
  
}