function countDown(n){
  for(let i = n; i > 0; i-- ){
    console.log(i)
  }
  console.log('Hooray~')
}
// countDown(3)

// recursive func
function recursiveCountDown(n){
  if(n <= 0){
    console.log('Hooray~ I did a recursion~~')
    return
  }
  console.log(n)
  recursiveCountDown(n-1)
}
recursiveCountDown(3)