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

  //设置html元素的文字大小
  function setRemUnit(){
    var rem = docEl.clientWidth / 10 // 把整个屏幕划分10等分
    docEl.style.fontSize = rem + 'px'
  }
  setRemUnit()

  // reset rem unit on page size
  window.addEventListener('resize',setRemUnit)
  // pageshow是重新加载页面触发的事件 且兼容火狐
  window.addEventListener('pageshow',function(e){
    // 事件对象中的persisted来判断是否页面来自于缓存
    if(e.persisted){
      setRemUnit()
    }
  })

  // detect 0.5px 有些移动端浏览器不支持0.5px的写法
  if(dpr >= 2){
    var fakeBody = document.createElement('body')
    var testEle = document.createElement('div')
    testEle.style.border = '.5px solid transparent'
    fakeBody.appendChild(testEle)
    docEl.appendChild(fakeBody)
    if(testEle.offsetHeight === 1){
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}(window, document))