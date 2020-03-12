function repairZero(val){
  return val<0 ? '0'+val: val
}
let date = new Date()
let str = ``
str += `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${repairZero(date.getMinutes())}:${repairZero(date.getSeconds())}`
console.log(str)