window.onload = function () {
  const box1 = document.querySelector('#box1')
  const btn2R = document.querySelector('#btn2R')
  const btn2L = document.querySelector('#btn2L')
  //let timer

  btn2R.onclick = function() {
    moveBox(box1,'left',13,400)
  }

  btn2L.onclick = function() {
    moveBox(box1,'left',13,0)
    moveBox(box2,'width',13,800,function(){
      moveBox(box2,'height',13,400)
    })
  }

  function moveBox(obj,attr,speed,target,callback){
    clearInterval(obj.timer)
    const current = parseInt(getStyle(obj,attr))
    if(current > target){
      speed = -speed
    }

    //create a timer
    obj.timer =setInterval(function(){
      const oldV = parseInt(getStyle(obj,attr))
      
      let newV = oldV + speed
      

      if (speed<0&&newV <target || speed>0&&newV > target){
        newV = target
      }
      obj.style[attr] = newV + 'px'
      if(newV == target){
        clearInterval(obj.timer)
        callback && callback()
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