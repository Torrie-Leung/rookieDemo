window.onload = function () {
  //set imgList's width
  const imgList = document.getElementById('imgList')
  const imgArr = document.getElementsByTagName('img')
  imgList.style.width = imgArr.length * 245 + 'px'
  //set nav to the middle
  const navRect = document.getElementById('navRect')
  const outer = document.getElementById('outer')
  navRect.style.left = (outer.offsetWidth-navRect.offsetWidth)/2 + 'px'
}