window.onload = function () {
  const btn = document.getElementById('btn')
  const box = document.getElementById('box')
  btn.onclick = function () {
    //box.className = "b2"
    if(!hasClass(box,"b2")){
      addClass(box,"b2")
    }
    
    
  }
  function addClass(obj,cn){
    obj.className +=' '+cn
  }
  function hasClass(obj,cn){
    const reg = new RegExp("\\b"+cn+"\\b")

    return reg.test(obj.className)
  }
}