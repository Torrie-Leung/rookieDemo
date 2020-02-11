
window.onload = function(){
  
  const box = document.querySelector("#编组-2");
  // const box = $("#path72")
  
  const TweenMax = new TimelineMax();
  box.addEventListener('onclick',function(){
    console.log('hi')
    TweenMax.to(box, 1, {x:100});
    TweenMax.to(box, 1, {x:0});
  })
}
