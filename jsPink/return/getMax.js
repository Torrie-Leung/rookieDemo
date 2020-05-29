function getMax(n1,n2){
  if(n1 !== n2){
    return n1 > n2 ? n1 : n2
  }else{
    console.log('pls input 2 not identical numbers');
  }
  
}
console.log(getMax(2,7));