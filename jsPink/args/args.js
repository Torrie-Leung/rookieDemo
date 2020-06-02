// psuedo array: length,index,not includes some array function
function foo(){
  console.log(arguments);
  for(let i = 0; i < arguments.length; i++){
    console.log({argi: arguments[i]});
  }
  console.log({arg1: arguments[1]});
}
foo('crap','nosedive')
foo(3,2,1)

function getMax(){
  let max = arguments[0];
  for(let i = 0; i < arguments.length; i++){
    if(arguments[i] > max){
      max = arguments[i]
    }
  }
  return max;
}
let res = getMax(7,1,4,55,100)
console.log({max:res});