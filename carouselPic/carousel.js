window.onload = function () {
  //set imgList's width
  const imgList = document.getElementById('imgList')
  const imgArr = document.getElementsByTagName('img')
  imgList.style.width = imgArr.length * 245 + 'px'
  //set nav to the middle
  const navRect = document.getElementById('navRect')
  const outer = document.getElementById('outer')
  navRect.style.left = (outer.offsetWidth-navRect.offsetWidth)/2 + 'px'

  let index = 0
  const allA = document.getElementsByTagName('a')
  allA[index].style.backgroundColor = "khaki"

  //bind eventlistener function to all a
  for(let i = 0; i<allA.length; i++){
    allA[i].idx = i
    allA[i].onclick = function () {
      index = this.idx
      //imgList.style.left = -245*index + 'px'
      setRect()
      moveBox(imgList,'left',20,-245*index,function(){})
    }
  }
  autoChange()

  function setRect(){
    if(index >= imgArr.length-1){
      index = 0
      imgList.style.left = 0+'px'
    }
    for(let i = 0; i <allA.length; i++){
      allA[i].style.backgroundColor = ''
    }
    allA[index].style.backgroundColor = 'khaki'
  }

  function autoChange(){
    let timer =setInterval(function(){
      index++
      index %= imgArr.length
      //console.log(index,index %= imgArr.length)
      moveBox(imgList,'left',20,-245*index,function(){
        setRect()
      })
      
      
      
    },3000)
  }
}