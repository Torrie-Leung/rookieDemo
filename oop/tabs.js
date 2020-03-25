class Tabs{
  constructor(id){
    this.main = document.querySelector(id)
    this.lis = this.main.querySelectorAll('li')
    this.sections = this.main.querySelectorAll('section')
    this.init()
  }
  init(){
    for(let i = 0; i < this.lis.length; i++){
      this.lis[i].index = i
      this.lis[i].onclick = function(){
        console.log(this.index);
      }
    }
  }
  toggleTab(){}
  addTab(){}
  rmvTab(){}
  editTab(){}
}

new Tabs('#tabs')