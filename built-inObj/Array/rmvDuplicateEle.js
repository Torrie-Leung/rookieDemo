// We can remove duplicate element in an array by using Temporary Array
const arr = ['chimp','bender','mario','toad','chimp','toad','luigi']

function uniqueEle(originalArr){
  let newARR = []
  for(let i = 0; i< originalArr.length; i++){
    if(newARR.indexOf(originalArr[i]) === -1){
      console.log(originalArr[i]);
      newARR.push(originalArr[i])
    }
  }
  return newARR
}
let uniqueArr = uniqueEle(arr)
console.log(uniqueArr);
console.log(arr.toString());
console.log(arr.join('-'));