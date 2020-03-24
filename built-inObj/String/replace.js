let str = 'holymolly'
console.log(str.replace('o','p'));
console.log(str.indexOf('o'));
while(str.indexOf('o') !== -1){
  str = str.replace('o','$')
}
console.log(str);