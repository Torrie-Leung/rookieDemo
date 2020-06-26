function getNextElementSibling(ele){
  var el = ele;
  while(el = el.nextSibling){
    if(el.nodeType === 1){
      return el
    }
  }
  return null
}