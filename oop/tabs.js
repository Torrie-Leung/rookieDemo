class Tabs{
  constructor(id){
    this.main = document.querySelector(id)
    this.lis = this.main.querySelectorAll('li')
    this.sections = this.main.querySelectorAll('section')
  }
  toggleTab(){}
  addTab(){}
  rmvTab(){}
  editTab(){}
}

new Tabs('#tabs')