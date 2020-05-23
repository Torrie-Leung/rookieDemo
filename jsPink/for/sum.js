let sum = 0;
let itemNum = 100;
let avg = 0;
for(let i = 0; i <= itemNum; i++){
  sum += i;
}
avg = sum/itemNum;
console.log({sum});
console.log({avg});

let even = 0;
let odd = 0;
for(let i = 1; i <= itemNum; i++){
  if(i % 2 == 0){
    even += i;
  }else{
    odd += i;
  }
}
console.log({evenSum:even})
console.log({oddSum:odd})