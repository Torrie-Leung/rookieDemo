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
  }
}
let vitaLemmon = new Vita(6,1.65)
console.log(vitaLemmon.bill());