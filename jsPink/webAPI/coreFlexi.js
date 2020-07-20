(function flexi(window, document){
  // 获取html根元素
  var docEl = document.documentElement
  // dpr物理像素比
  var dpr = window.devicePixelRatio || 1
  console.log(dpr);
  // adjust body font size
  function setBodyFontSize(){
    if(document.body){
      document.body.style.fontSize = (12 * dpr) + 'px'
    }else{
      // js文件引用在body前
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize();
}(window, document))