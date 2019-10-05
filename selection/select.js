window.onload = function(){
  function btnClick(idStr,fun){
    btn = document.getElementById(idStr)
    btn.onclick = fun
  }
  //select all btn
  btnClick('checkAllBtn',function(){
    //grab all items
    const items = document.getElementsByName('items')
    //console.log(items)
    for(i = 0; i<items.length; i++){
      items[i].checked = !items[i].checked
    }
  })

  //cancel all btn
  btnClick('cancleAllBtn',function(){
    const items = document.getElementsByName('items')
    for(i = 0; i<items.length; i++){
      if(items[i].checked){
        items[i].checked = false
      }
    }
  })
}