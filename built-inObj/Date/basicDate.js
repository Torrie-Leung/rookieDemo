const datee = new Date()
const date1 = new Date('2020/3/20')
const date3 = +new Date()

console.log(datee.getFullYear());
console.log(date1);
console.log(datee.getMonth());
console.log(datee.getDay());
console.log(datee.getHours());
console.log(datee.valueOf());
console.log(datee.getTime());

const y = datee.getFullYear()
const m = datee.getMonth() + 1
const date = datee.getDate()
const day = datee.getDay()
const weekArr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']

console.log(`今天是 ${y}年${m}月${date}日${weekArr[day]}`);

function getTimer(){
  const time = new Date()
  let h = time.getHours()
  h = h < 10 ? '0'+ h : h
  let m = time.getMinutes()
  m = m < 10 ? '0'+ m : m
  let s = time.getSeconds()
  s = s < 10 ? '0'+ s : s
  return `${h}:${m}:${s}`
}
console.log(getTimer());
console.log(date3);