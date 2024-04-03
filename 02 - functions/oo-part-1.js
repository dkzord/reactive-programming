// Constructor function
function Product(name, price, discount = 0.15) {
  this.name = name;
  this.price = price;
  this.discount = discount;

  this.finalPrice = function () {
    return this.price * (1 - this.discount);
  }
}

const p1 = new Product('pen', 8.59)
console.log(p1.name)

const p2 = new Product('book', 15.99)
console.log(p2.finalPrice())