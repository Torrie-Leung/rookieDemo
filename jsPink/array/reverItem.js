let arr = ['red','green','blue','pink'];
let revertArr = []

for(i = arr.length-1; i>=0; i--){
  revertArr[revertArr.length] = arr[i]
}
console.log({revertArr});