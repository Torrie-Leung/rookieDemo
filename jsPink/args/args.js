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