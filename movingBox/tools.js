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
      

      if (speed < 0 && newV < target || speed > 0 && newV > target){
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
    //getComputedStyle() gives the final used values ofall the CSS properties of an element.
    //read only, cannot be revised
    //getComputedStyle(element,psuedo)
    //the other way--getComputedStyle(element,psuedo.getPropertyValue('name') *kebab-case
    return getComputedStyle(obj,null)[name]
  }else{
    //cater for IE 8
    return obj.currentStyle[name]
  }
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