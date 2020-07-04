function removeEventListener(ele,eventName,fn){
  if(ele.removeEventListener){
    ele.removeEventListener(eventName,fn)
  }else if(ele.detatchEvent){
    ele.detatchEvent('on'+eventName,fn)
  }else{
    ele['on'+eventName] = null
  }
}