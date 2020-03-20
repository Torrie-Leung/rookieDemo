const myMath = {
  PI: 3.141592653,
  max: function(){
    let max = arguments[0]
    for(let i = 1; i < arguments.length; i++ ){
      if(arguments[i] > max){
        max = arguments[i]
      }
    }
    return max
  },
  min: function(){
    let min = arguments[0]
    for(let i = 1; i < arguments.length; i++ ){
      if(arguments[i] < min){
        min = arguments[i]
      }
    }
    return min
  }
}
console.log(myMath.max(1,5,9));
console.log(myMath.min(10,5,9));
