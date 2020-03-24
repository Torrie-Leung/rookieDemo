let str = 'holymolly'
console.log(str.replace('o','p'));
console.log(str.indexOf('o'));
while(str.indexOf('o') !== -1){
  str = str.replace('o','$')
}
console.log(str);
let str1 = 'ee,ff,33,55'
let str2 = str1.split(',')
console.log(str2);