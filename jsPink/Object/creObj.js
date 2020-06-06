var obj = {
  uname: 'chimp',
  age: 38,
  salary: 2300,
  dissU: function(){
    console.log('ew~');
  }
}
console.log(obj['salary']);
obj.dissU();
// for in 遍历对象
for(var k in obj){
  console.log(k);
  console.log(obj[k]);
}