class Star{
  constructor(urname,age){
    this.urname = urname
    this.age = age
  }
  code(lang){
    console.log(`${this.urname} is coding ${lang}.`)
  }
  confess(){
    console.log(`${this.urname} is ${this.age} year old`);
  }
}
let chimp = new Star('chimp',38)
console.log(chimp.code('vue'));

class Stone extends Star {}
let bender = new Stone('bender',300)
console.log(bender.code('react'));
console.log(bender.confess());