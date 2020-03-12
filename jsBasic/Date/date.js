function repairZero(val){
  return val<10 ? '0'+val: val
}
function fmtWeekDay(day){
  return '星期'+'日一二三四五六'[day]
}
let date = new Date()
let str = ``
str += `${date.getFullYear()}-${repairZero(date.getMonth()+1)}-${date.getDate()} ${repairZero(date.getHours())}:${repairZero(date.getMinutes())}:${repairZero(date.getSeconds())}`
console.log(str)

console.log(fmtWeekDay(date.getDay()))