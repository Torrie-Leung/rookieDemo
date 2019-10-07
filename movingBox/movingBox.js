window.onload = function () {
  const box1 = document.querySelector('#box1')
  const btn2R = document.querySelector('#btn2R')

  btn2R.onclick = function() {
    //create a timer
    let timer =setInterval(function(){
      const oldV = parseInt(getStyle(box1,"left"))
      
      let newV = oldV + 10
      box1.style.left = newV + 'px'

      if(newV == 400){
        clearInterval(timer)
      }
    },30)
  }

  function getStyle(obj,name){
    if(window.getComputedStyle){
      return getComputedStyle(obj,null)[name]
    }else{
      //cater for IE 8
      return obj.currentStyle[name]
    }
  }
}