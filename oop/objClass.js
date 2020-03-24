class Star{
  constructor(urname,age){
    this.urname = urname
    this.age = age
  }
  code(lang){
    console.log(`${this.urname} is coding ${lang}.`)
  }
}
let chimp = new Star('chimp',38)
console.log(chimp.code('vue'));