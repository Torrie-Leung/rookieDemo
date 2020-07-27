function animate(obj,target,callback){
  //保证当前有且只有1个定时器在运行
  clearInterval(obj.timer)
  //js可给不同对象添加属性，自己专门用自己的定时器
  obj.timer = setInterval(function(){
    //步长写进定时器中
    // step要为整数
    var step = (target - obj.offsetLeft) / 10
    step = step > 0 ? Math.ceil(step) : Math.floor(step)
    if(obj.offsetLeft == target){
      // 停止动画 本质是停止定时器
      clearInterval(obj.timer)
      // callback写到定时器结束后
      if(callback){
        // 调用callback
        callback()
      }
    }
    // 匀速动画： 盒子当前位置 + 固定值
    // 缓动动画： 盒子当前位置 + 变化值（目标位置-当前位置）/ 10
    obj.style.left = obj.offsetLeft + step + 'px'
  },30)
}