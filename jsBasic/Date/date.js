function repairZero(val){
  return val<10 ? '0'+val: val
}
let date = new Date()
let str = ``
str += `${date.getFullYear()}-${repairZero(date.getMonth()+1)}-${date.getDate()} ${repairZero(date.getHours())}:${repairZero(date.getMinutes())}:${repairZero(date.getSeconds())}`
console.log(str)