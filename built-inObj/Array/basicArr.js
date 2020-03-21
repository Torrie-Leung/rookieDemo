let arr = new Array(2)
console.log(arr) // [ <2 empty items> ] 2 stands for arr'length
let ar = []
console.log(ar instanceof Array);// true

function reverse(arrr){
  if(arrr instanceof Array){
    let newArr = []
    for(let i = arrr.length - 1; i >= 0; i--){
      newArr[newArr.length] = arrr[i]
    }
    return newArr
  }
}
console.log(reverse([1,4,8,9]));