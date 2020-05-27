let arr = [];
for(let i = 0; i < 10; i++){
  arr[i] = i + 1;
}
console.log({arr});

let newArr = [];
let oldArr = [1,5,77,3,7,99] // pick out the number bigger than 10
let j = 0;
for(let i = 0; i < oldArr.length; i++){
  if(oldArr[i] > 10){
    newArr[j] = oldArr[i];
    j++;
  }
}