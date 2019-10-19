window.onload = function () {
  const btn = document.getElementById('btn')
  const rbtn = document.getElementById('rbtn')
  const tglbtn = document.getElementById('tglbtn')
  const box = document.getElementById('box')
  btn.onclick = function () {
    //box.className = "b2"
    if(!hasClass(box,"b2")){
      addClass(box,"b2")
    }
    
    
  }
  rbtn.onclick = function () {
    rmvClass(box,"b2")
    
  }
  tglbtn.onclick= function () {
    tglClass(box,"b2")
  }
  function addClass(obj,cn){
    obj.className +=' '+cn
  }
  function hasClass(obj,cn){
    const reg = new RegExp("\\b"+cn+"\\b")

    return reg.test(obj.className)
  }
  function rmvClass(obj,cn){
    const reg = new RegExp("\\b"+cn+"\\b")
    obj.className = obj.className.replace(reg,'')
  }
  function tglClass(obj,cn){
    if(hasClass(obj,cn)){
      rmvClass(obj,cn)
    }else{
      addClass(obj,cn)
    }
  }
}