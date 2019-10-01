window.onload = function () {
  waterfall()
}

function waterfall(){
  let onePin = get();
  let iPinW = onePin[0].offsetWidth;
  let num =Math.floor(document.documentElement.clientWidth/iPinW) 
  console.log(num)
  const parent = document.getElementById('main')
  console.log(parent.style)
  parent.style.cssText = 'width:'+iPinW*num+'px;margin:0 auto;';
  let pinHArr= []
  for(let i = 0; i<onePin.length; i++){
    let pinH = onePin[i].offsetHeight
    if(i<num){
      pinHArr[i] = pinH
    }else{
      
      let minH = Math.min.apply(null,pinHArr)
      let minHIndex = getMinHIndex(pinHArr,minH)
      onePin[i].style.position = 'absolute'
      onePin[i].style.top = minH + 'px'
      onePin[i].style.left = onePin[minHIndex].offsetLeft+'px'
      pinHArr[minHIndex]+=onePin[i].offsetHeight
      console.log(pinHArr[minHIndex])
    }
  }
}

function get(){
  let obj = document.getElementById('main').getElementsByClassName('pin');
  let pinArr = [];
  for(let i = 0; i< obj.length; i++){
    pinArr.push(obj[i]);
  }
  console.log(pinArr[0])
  return pinArr
}

function getMinHIndex(arr,minH){
  for(let i = 0; i<arr.length;i++){
    if(arr[i]==minH){
      return i
    }
  }
}

