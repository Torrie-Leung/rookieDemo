let timer = null
timer = setTimeout(getTime, 1000)
let timeZone = document.getElementById('showTime')
function getTime(){
  clearTimeout(timer)
  let date = new Date()
  let yy = date.getFullYear()
  let mm = date.getMonth() + 1
  mm = mm < 10 ? '0' + mm : mm
  let dt = date.getDate()
  dt = dt < 10 ? '0' + dt : dt
  let h = date.getHours()
  h = h < 10 ? '0' + h : h
  let m = date.getMinutes()
  m = m < 10 ? '0' + m : m
  let s = date.getSeconds()
  s = s < 10 ? '0' + s : s
  timeZone.innerHTML = `Time: ${yy}-${mm}-${dt} ${h}:${m}:${s}`
  timer = setTimeout(getTime, 1000)
}

getTime()