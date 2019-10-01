window.onload = function () {
  waterfall()
  const dataImg ={
    "data" :[
      {src:"01.jpeg"},
      {src:"02.jpeg"},
      {src:"03.jpeg"},
      {src:"04.jpeg"},
      {src:"05.jpeg"},
      {src:"06.jpeg"},
      {src:"07.jpeg"},
      {src:"08.jpeg"},
      ]
  }
}

function waterfall(){
  let pinArr = get();
  //get item's width
  let iPinW = pinArr[0].offsetWidth;
  //the number of displaying column = pageWidth/itemWidth
  let num =Math.floor(document.documentElement.clientWidth/iPinW) 
  const parent = document.getElementById('main')
  parent.style.cssText = 'width:'+iPinW*num+'px;margin:0 auto;';

  let pinHArr= []
  
  for(let i = 0; i<pinArr.length; i++){
    let pinH = pinArr[i].offsetHeight
    //console.log(pinH)
    if(i<num){
      pinHArr[i] = pinH
      //console.log(pinHArr)
    }else{
      //第一行的最小高度
      let minH = Math.min.apply(null,pinHArr)
      //第一行的最小高度index
      let minHIndex = getMinHIndex(pinHArr,minH)
      //console.log(i+"-"+minHIndex)
      pinArr[i].style.position = 'absolute'
      pinArr[i].style.top = minH + 'px'
      pinArr[i].style.left = pinArr[minHIndex].offsetLeft+'px'
      //console.log(pinHArr[minHIndex])
      pinHArr[minHIndex]+=pinArr[i].offsetHeight
      
      
    }
  }
  
  
}

function get(){
  let obj = document.getElementById('main').getElementsByClassName('pin');
  let pinArr = [];
  for(let i = 0; i< obj.length; i++){
    pinArr.push(obj[i]);
  }
  return pinArr
}

function getMinHIndex(arr,minH){
  for(let i = 0; i<arr.length;i++){
    if(arr[i]==minH){
      return i
    }
  }
}

function checkScroll(){
  const aPin = document.getElementsByTagName('pin')
  const lastPinH = aPin[aPin.length - 1].offsetTop - (Math.floor(aPin[aPin.length - 1].offsetHeight/2))
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  const documentH = document.documentElement.clientHeight
  return(lastPinH<scrollTop+documentH)?true:false
}
