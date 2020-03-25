// class has no hoisting thing
class Beverage{
  constructor(num,price){
    this.num = num
    this.price = price
  }
  bill(){
    console.log(this.num*this.price)
    return this.num*this.price
  }
}
class Vita extends Beverage{
  constructor(num,price){
    super(num,price)
    this.num = num
    this.price = price
    this.bill()
    this.bargain(this.bill())
    this.cheat()
  }
  bargain(bill){
    console.log(bill*0.8) 
  }
  cheat(){
    console.log(this.num*this.price*1.2); 
  }
}
let vitaLemmon = new Vita(6,1.65)