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
  },
  randomNum: function(min,max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random()*(max-min +1)) + min
    
  }
}
console.log(myMath.max(1,5,9));
console.log(myMath.min(10,5,9));
console.log(Math.random());
console.log(myMath.randomNum(1,100));
