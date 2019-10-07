window.onload = function () {
  const box1 = document.querySelector('#box1')
  const btn2R = document.querySelector('#btn2R')
  const btn2L = document.querySelector('#btn2L')
  let timer

  btn2R.onclick = function() {
    moveBox(box1,13,400)
  }

  btn2L.onclick = function() {
    moveBox(box1,13,0)
  }

  function moveBox(obj,speed,target){
    clearInterval(timer)
    const current = parseInt(getStyle(obj,'left'))
    if(current > target){
      speed = -speed
    }

    //create a timer
    timer =setInterval(function(){
      const oldV = parseInt(getStyle(obj,"left"))
      
      let newV = oldV + speed
      

      if (speed<0&&newV <target || speed>0&&newV > target){
        newV = target
      }
      obj.style.left = newV + 'px'
      if(newV == target){
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