let that
class Tabs{
  constructor(id){
    this.main = document.querySelector(id)
    
    this.add = this.main.querySelector('.addTab')
    this.ul = this.main.querySelector('.Navi ul:first-child')
    this.fsec = this.main.querySelector('.tabsContent')
    this.init()
    that = this
    
  }
  updateNode(){
    this.lis = this.main.querySelectorAll('li')
    this.sections = this.main.querySelectorAll('section')
  }
  init(){
    this.updateNode()
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
    that.clearClass()
    //create el
    let li = '<li class="activeli"><span>new tab</span><span class="delBtn">✖️</span></li>'
    let section = '<section class="activeContent">new content</section>'
    // insert el to parent el
    that.ul.insertAdjacentHTML('beforeend',li)
    that.fsec.insertAdjacentHTML('beforeend',section)
    that.init()

  }
  rmvTab(){}
  editTab(){}
}

new Tabs('#tabs')