window.onload = function () {
  const box1 = document.querySelector('#box1')
  const btn2R = document.querySelector('#btn2R')
  const btn2L = document.querySelector('#btn2L')
  let timer

  btn2R.onclick = function() {
    clearInterval(timer)
    //create a timer
    timer =setInterval(function(){
      const oldV = parseInt(getStyle(box1,"left"))
      
      let newV = oldV + 13
      box1.style.left = newV + 'px'

      if (newV >400){
        newV = 400
      }

      if(newV == 400){
        clearInterval(timer)
      }
    },30)
  }

  btn2L.onclick = function() {
    clearInterval(timer)
    //create a timer
    timer =setInterval(function(){
      const oldV = parseInt(getStyle(box1,"left"))
      
      let newV = oldV - 13
      box1.style.left = newV + 'px'

      if (newV <0){
        newV = 0
      }

      if(newV == 0){
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