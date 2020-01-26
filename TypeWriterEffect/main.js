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
TypeWriter.prototype.type = function(){
  // console.log('hey')

  //Current index of word
  const current = this.wordIndex % this.words.length
  //Get full text of current word
  const fulltxt = this.words[current]
  // console.log(fulltxt)

  //Check if deleting
  if(this.isDeleting){
    //Remove char
    this.txt = fulltxt.substring(0,this.txt.length + 1)
  }else{
    //Add char
    this.txt = fulltxt.substring(0,this.txt.length + 1)
  }
  setTimeout(() => this.type(),500)
}
//Init on DOM Load
document.addEventListener('DOMContentLoaded',init)

//Init App
function init() {
  const txtEle = document.querySelector('.txt-type')
  const words = JSON.parse(txtEle.getAttribute('data-words')); 
  const waitTime = txtEle.getAttribute('data-wait')
  //Init TypeWriter
  new TypeWriter(txtEle,words,waitTime)
}