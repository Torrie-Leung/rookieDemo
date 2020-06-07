const myMath = {
  PI: 3.141592653,
  max: function(){
    let max = arguments[0];
    for(let i = 0; i < arguments.length; i++){
      if(arguments[i] > max){
        max = arguments[i];
      }
    }
    return max;
  },
  min: function(){
    let min = arguments[0];
    for(let i = 0; i < arguments.length; i++){
      if(arguments[i] < min){
        min = arguments[i];
      }
    }
    return min;
  }
}

console.log({max:myMath.max(3,1,0,8)});
console.log({min:myMath.min(3,1,0,8)});