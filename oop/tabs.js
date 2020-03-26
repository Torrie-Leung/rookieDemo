let that
class Tabs{
  constructor(id){
    this.main = document.querySelector(id)
    this.lis = this.main.querySelectorAll('li')
    this.sections = this.main.querySelectorAll('section')
    this.add = this.main.querySelector('.addTab')
    this.ul = this.main.querySelector('.Navi ul:first-child')
    this.init()
    that = this
    
  }
  init(){
    for(let i = 0; i < this.lis.length; i++){
      this.lis[i].index = i
      this.lis[i].onclick = this.toggleTab
    }
    this.add.onclick = this.addTab
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
  addTab(){
    //create el
    let li = '<li><span>3</span></li>'
    that.ul.insertAdjacentHTML('beforeend',li)
    // insert el to parent el

  }
  rmvTab(){}
  editTab(){}
}

new Tabs('#tabs')