let that
class Tabs{
  constructor(id){
    this.main = document.querySelector(id)
    this.lis = this.main.querySelectorAll('li')
    this.sections = this.main.querySelectorAll('section')
    this.init()
    that = this
    
  }
  init(){
    for(let i = 0; i < this.lis.length; i++){
      this.lis[i].index = i
      this.lis[i].onclick = this.toggleTab
    }
  }
  toggleTab(){
    console.log(this.index);
    that.clearClass()
    this.className = 'activeli'
    that.sections[this.index].className = 'activeContent'
  }
  clearClass(){
    for(let i = 0; i < this.lis.length; i++){
      this.lis[i].className = ''
      this.sections[i].className = ''
    }
  }
  addTab(){}
  rmvTab(){}
  editTab(){}
}

new Tabs('#tabs')