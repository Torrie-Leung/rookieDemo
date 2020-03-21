let arr = new Array(2)
console.log(arr) // [ <2 empty items> ] 2 stands for arr'length
let ar = []
console.log(ar instanceof Array);// true
console.log(Array.isArray(ar));// true only support IE9+

function reverse(arrr){
  if(arrr instanceof Array){
    let newArr = []
    for(let i = arrr.length - 1; i >= 0; i--){
      newArr[newArr.length] = arrr[i]
    }
    return newArr
  }else {
    return 'error: please input an array'
  }
}
console.log(reverse([1,4,8,9]));//[ 9, 8, 4, 1 ]
console.log(reverse(1,2,4));//error: please input an array