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
    this.rmv = this.main.querySelectorAll('.delBtn')
  }
  init(){
    this.updateNode()
    for(let i = 0; i < this.lis.length; i++){
      this.lis[i].index = i
      this.lis[i].onclick = this.toggleTab
      this.rmv[i].onclick = this.rmvTab
    }
    this.add.onclick = this.addTab
  }
  toggleTab(){
    // console.log(this.index);
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
  rmvTab(e){
    e.stopPropagation()
    let idx = this.parentNode.index
    console.log(idx);
    that.lis[idx].remove()
    that.sections[idx].remove()
    that.init()
    if(document.querySelector('.activeli')) return
    idx--
    that.lis[idx]  && that.lis[idx].click()
  }
  editTab(){}
}

new Tabs('#tabs')