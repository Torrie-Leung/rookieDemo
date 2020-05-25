for(let i = 1; i <= 5; i++){
  if(i ===3 ){
    // 退出第3次循环
    continue;
  }
  console.log(`hit you ${i} times!`)
}
// 1~100之间除了能整除7之外的数的和
let sum = 0;
for(let i = 1; i <= 100; i++){
  if( i % 7 == 0){
    continue;
  }
  sum += i;
}
console.log({sum})

let triS = 0;
for(let i = 1; i <= 100; i++){
  if(i == 3 || i % 10 == 3){
    triS += i;
    continue;
  }
}
console.log({triS})