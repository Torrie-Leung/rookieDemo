const TypeWriter = function (txtEle,words,waitTime = 3000) {
  this.txtEle = txtEle;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.waitTime = parseInt(waitTime, 10)  // parseInt(string,radix)
  this.type();
  this.isDeleting = false
}

//Type Method

//Init on DOM Load
document.addEventListener('DOMContentLoaded',init)

//Init App
function init() {
  const txtEle = document.querySelector('.txt-type')
  const words = JSON.parse(txtEle.getAttribute('data-words')) 
  const waitTime = txtEle.getAttribute('data-wait')
  //Init TypeWriter
  new TypeWriter(txtEle,words,waitTime)
}