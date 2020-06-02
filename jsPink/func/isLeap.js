function isLeapYear(year){
  let check = false;
  if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    check = true;
  }
  return check;
}

console.log(isLeapYear(2004));

function returnDay(year){
  return isLeapYear(year) ? 'Leap Year~ 29days in Feb' :'Normal Year~ 28 days in Feb'
}
let checkFebDay = returnDay(2020)
console.log({checkFebDay});