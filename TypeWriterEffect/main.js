// const TypeWriter = function (txtEle,words,waitTime = 3000) {
//   this.txtEle = txtEle;
//   this.words = words;
//   this.txt = '';
//   this.wordIndex = 0;
//   this.waitTime = parseInt(waitTime, 10)  // parseInt(string,radix)
//   this.type();
//   this.isDeleting = false
// }

// //Type Method
// TypeWriter.prototype.type = function(){
//   // console.log('hey')

//   //Current index of word
//   const current = this.wordIndex % this.words.length
//   //Get full text of current word
//   const fulltxt = this.words[current]
//   // console.log(fulltxt)

//   //Check if deleting
//   if(this.isDeleting){
//     //Remove char
//     this.txt = fulltxt.substring(0,this.txt.length - 1)
//   }else{
//     //Add char
//     this.txt = fulltxt.substring(0,this.txt.length + 1)
//   }

//   //Insert txt into element
//   this.txtEle.innerHTML = `<span class="txt">${this.txt}</span>`

//   //Initial Type Speed
//   let typeSpeed = 300
//   if(this.isDeleting){
//     typeSpeed /= 2
//   }

//   //if word is complete
//   if(!this.isDeleting && this.txt === fulltxt){
//     //Make a pause at end
//     typeSpeed = this.waitTime
//     //Set delete to true
//     this.isDeleting = true
//   }else if(this.isDeleting && this.txt === ""){
//     this.isDeleting = false
//     //Move to the next word
//     this.wordIndex ++
//     //Pause before start typing
//     typeSpeed = 500
//   }

//   setTimeout(() => this.type(),typeSpeed)
// }



//ES6 Class
class TypeWriter{
  constructor(txtEle,words,waitTime = 3000) {
    this.txtEle = txtEle;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.waitTime = parseInt(waitTime, 10)  // parseInt(string,radix)
    this.type();
    this.isDeleting = false
  }
  type(){
    //Current index of word
    const current = this.wordIndex % this.words.length
    //Get full text of current word
    const fulltxt = this.words[current]
    // console.log(fulltxt)

    //Check if deleting
    if(this.isDeleting){
      //Remove char
      this.txt = fulltxt.substring(0,this.txt.length - 1)
    }else{
      //Add char
      this.txt = fulltxt.substring(0,this.txt.length + 1)
    }

    //Insert txt into element
    this.txtEle.innerHTML = `<span class="txt">${this.txt}</span>`

    //Initial Type Speed
    let typeSpeed = 300
    if(this.isDeleting){
      typeSpeed /= 2
    }

    //if word is complete
    if(!this.isDeleting && this.txt === fulltxt){
      //Make a pause at end
      typeSpeed = this.waitTime
      //Set delete to true
      this.isDeleting = true
    }else if(this.isDeleting && this.txt === ""){
      this.isDeleting = false
      //Move to the next word
      this.wordIndex ++
      //Pause before start typing
      typeSpeed = 500
    }

    setTimeout(() => this.type(),typeSpeed)
  }
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