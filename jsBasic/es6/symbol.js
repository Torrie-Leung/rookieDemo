// privatize attribute & data protecting
function Person(name,gender){
  this.name = name
  this.gender = gender
}
// gender data could not be changed
const staff1 = new Person('Collins','Male')
console.log(staff1.name);

const Raf = (function(){
  let _gender = ''
  function Pilot(name,gender){
    this.name = name
    // this.gender = gender
    _gender = gender
  }
  Pilot.prototype.getGender = function(){
    return _gender
  }
  return Pilot
})()
const Lily = new Raf('Lily','Female')
console.log(Lily.getGender());

const Asteriod = (function(){
  let _type = Symbol('type')
  function Planet(name,type){
    this.name = name
    this[_type] = type
  }
  Planet.prototype.sayHi = function(){
    console.log(`Hi, my name is ${this.name}, ${this[_type]} type.`);
  }
  return Planet
})()
const earth = new Asteriod('earth','medium')
console.log(earth); //Planet { name: 'earth', [Symbol(type)]: 'medium' }
console.log(earth.sayHi());