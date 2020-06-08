function getRandom(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let res = getRandom(10,50)
console.log({res});