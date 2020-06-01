function isLeapYear(year){
  let check = false;
  if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    check = true;
  }
  return check;
}

console.log(isLeapYear(2004));