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
  info.innerHTML = "Total "+ imgSrc.data.length + ' pics'+'-'+[idx+1]
  prev.onclick = function () {
    idx--;
    if(idx<0){
      idx = imgSrc.data.length-1
    }
    img.src = "./images/" + imgSrc.data[idx]
    info.innerHTML = "Total "+ imgSrc.data.length + ' pics'+'-'+[idx+1]
  }

  next.onclick = function () {
    idx++;
    if(idx>imgSrc.data.length-1){
      idx = 0
    }
    img.src = "./images/" + imgSrc.data[idx]
    info.innerHTML = "Total "+ imgSrc.data.length + ' pics'+'-'+[idx+1]
  }
}