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

// check date gap
function calcDate(year,month,day){
  let totalDay = 0
  totalDay += day
  for(let i = 1; i < month; i++){
    switch(i){
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
          totalDay += 31
          break
      case 4:
      case 6:
      case 9:
      case 11:
          totalDay +=30
          break
      case 2:
        totalDay += 28
        if((year % 4===0 && year%100!==0) || year % 400 === 0){
          totalDay += 1
        }
        break
    }
  }
  return totalDay
}

console.log(calcDate(2020,3,30));