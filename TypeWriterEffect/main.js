const TypeWriter = function (txtEle,words,waitTime = 3000) {
  this.txtEle = txtEle;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.waitTime = parseInt(waitTime, 10)  // parseInt(string,radix)
  this.type();
  this.isDeleting = false
}