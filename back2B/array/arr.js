let myList = ['Medical','Consumption','Tech']

myList.forEach(function(value,index){
  console.log(`This is No.${index} ${value} fund.`);
})

// while
let times = 0;
while (times < 10) {
  console.log('tried it', times);
  times++
}

// for(setup,comparison,change)
for(var i = 0; i < myList.length; i++){
  // console.log('i is ',i);
  console.log(`you have ${myList[i]} in your basket`);
}