class Beverage{
  constructor(num,price){
    this.num = num
    this.price = price
  }
  bill(){
    return this.num*this.price
  }
}
class Vita extends Beverage{
  constructor(num,price){
    super(num,price)
    this.num = num
    this.price = price
  }
  bargain(bill){
    return bill*0.8
  }
  cheat(){
    return this.num*this.price*1.2
  }
}
let vitaLemmon = new Vita(6,1.65)
console.log(vitaLemmon.bill());
console.log(vitaLemmon.bargain(vitaLemmon.bill()));
console.log(vitaLemmon.cheat());