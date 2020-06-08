function getRandom(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let res = getRandom(10,50)
console.log({res});
let squad = ['chimp','bender','callum','eddie','louise']
let idx = getRandom(0,squad.length-1)
console.log(squad[idx]);