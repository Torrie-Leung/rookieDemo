window.onload = function () {
  //set imgList's width
  const imgList = document.getElementById('imgList')
  const imgArr = document.getElementsByTagName('img')
  imgList.style.width = imgArr.length * 245 + 'px'
}