const originalArr = [1500,2300,2000,800,5500,1999]
let newArr = []
for(let i = 0; i < originalArr.length; i++){
  if(originalArr[i] < 2000){
    newArr.push(originalArr[i])
  }
}
console.log(newArr);