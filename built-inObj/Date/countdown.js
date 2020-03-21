function countDown(t){
  const nowTime = +new Date()
  const inputTime = +new Date(t)
  let timeInterval = (inputTime - nowTime)/1000 // millisecond transfers to second
  const d = parseInt(timeInterval/60/60/24)
  const h = parseInt(timeInterval/60/60%24)
  const m = parseInt(timeInterval/60%60)
  const s = parseInt(timeInterval%60)
  return `${d}天${h}时${m}分${s}秒`
}
console.log(countDown('2020-4-30 18:00'));