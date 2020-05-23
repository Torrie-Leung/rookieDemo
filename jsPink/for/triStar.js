let str = '';
let str1 = ''
for(let i = 1; i <= 10; i++){
  for(let j = i; j <= 10; j++){
    str += '🌟 '
  }
  if(i !== 10){
    str += '\n'
  }
}
for(let i = 1; i <= 10; i++){
  for(let j = 1; j <= i; j++){
    str1 += '🌟 '
  }
  str1 += '\n'
}
console.log(str)
console.log(str1)