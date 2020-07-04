function addEventListener(ele,eventName,fn){
  //判断当前浏览器是否滋瓷ie
  if(ele.addEventListener){
    ele.addEventListener(eventName,fn)
  }else if(ele.attachEvent){
    ele.attachEvent('on'+ eventName, fn)
  }else{
    //都不支持就用坠船筒的方式
    ele['on'+eventName]=fn
  }
}