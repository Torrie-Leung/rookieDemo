function rever(arr){
  let newArr = [];
  for(let i = arr.length -1; i>= 0; i--){
    newArr[newArr.length] = arr[i]
  }
  return newArr;
}
let res = rever([4,1,9,8])
console.log(res);