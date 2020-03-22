let arr = ['chimp','bender','mario']
arr.reverse()
console.log(arr);
// bubbling
let arr1 = [23,5,1,9,8]
arr1.sort()// [ 1, 23, 5, 8, 9 ]
console.log(arr1);
arr1.sort((a,b) => {
  return a-b
})
console.log(arr1);// [ 1, 5, 8, 9, 23 ]