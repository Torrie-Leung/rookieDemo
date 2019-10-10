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

  
}