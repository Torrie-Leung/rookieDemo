let newArr = [];
let oldArr = [1,5,0,77,0,3,0,7,99]
for(let i = 0; i < oldArr.length; i++){
  if(oldArr[i] !== 0){
    newArr[newArr.length] = oldArr[i];
    
  }
}
console.log({newArr});