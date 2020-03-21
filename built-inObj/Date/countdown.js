function countDown(t){
  const nowTime = +new Date()
  const inputTime = +new Date(t)
  let timeInterval = (inputTime - nowTime)/1000 // millisecond transfers to second
  let d = parseInt(timeInterval/60/60/24)
  d = d < 10 ? '0'+ d : d
  let h = parseInt(timeInterval/60/60%24)
  h = h < 10 ? '0'+ h : h
  let m = parseInt(timeInterval/60%60)
  m = m < 10 ? '0'+ m : m
  let s = parseInt(timeInterval%60)
  s = s < 10 ? '0'+ s : s
  return `${d}天${h}时${m}分${s}秒`
}
console.log(countDown('2020-4-30 18:00'));