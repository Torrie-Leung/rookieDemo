const DrZsHoliday = ['1stOct','2ndOct','3rdOct','4thOct','5thOct','6thOct','7thOct']
for(i = 0; i<DrZsHoliday.length; i++){
  eatFishJing(i)
}
function eatFishJing(i){
  if(i<3){
    console.log('国庆节第'+(i+1)+'天，'+'老赵在吃劲仔小鱼')
  }
  if(i>=3){
    console.log('国庆节第'+(i+1)+'天，'+'老赵还在吃劲仔小鱼')
  }
  
}







window.onload = function () {
  const imgSrc = {
    "data" :[
      "01.jpeg",
      "02.jpeg",
      "03.jpeg",
      "04.jpeg",
      "05.jpeg",
      "06.jpeg",
      "07.jpeg",
      "08.jpeg",
      "09.jpeg",
      ]
  }
  const prev = document.getElementById('prev')
  const next = document.getElementById('next')
  const img = document.getElementsByTagName('img')[0]
  let idx = 0
  const info = document.getElementById('info')
  info.innerHTML = "Total "+ imgSrc.data.length + ' pics'+'-'+[idx+1]+'.jpeg'
  prev.onclick = function () {
    idx--;
    if(idx<0){
      idx = imgSrc.data.length-1
    }
    img.src = "./images/" + imgSrc.data[idx]
    info.innerHTML = "Total "+ imgSrc.data.length + ' pics'+'-'+[idx+1]+'.jpeg'
  }

  next.onclick = function () {
    idx++;
    if(idx>imgSrc.data.length-1){
      idx = 0
    }
    img.src = "./images/" + imgSrc.data[idx]
    info.innerHTML = "Total "+ imgSrc.data.length + ' pics'+'-'+[idx+1]+'.jpeg'
  }
}