function getArrMax(arr){
  let max = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i]
    }
  }
  return max
}
let res = getArrMax([11,2,77])
console.log({res});