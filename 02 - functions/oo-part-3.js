function Product(name, price, discount = 0.15) {
  this.name = name;
  this.price = price;
  this._discount = discount;

  this.finalPrice = function () {
    return this.price * (1 - this._discount);
  }
}

Product.prototype.log = function () {
  console.log(`Nome: ${this.name} Preço: ${this.price} Desconto: ${this.discount} Preço Final: ${this.finalPrice()}`)
}

Object.defineProperty(Product.prototype, 'discount', {
  get: function () {
    return this._discount;
  },

  set: function (newDiscount) {
    if (newDiscount >= 0 && newDiscount <= 1) {
      this._discount = newDiscount;
    }
  }
})

Object.defineProperty(Product.prototype, 'discountString', {
  get: function () {
    return `${this._discount * 100}% de desconto`;
  },
})

// const p1 = new Product('pen', 8.59)
// console.log(p1.name)
// p1.log()

const p2 = new Product('book', 15.99)
console.log(p2.price)
console.log(p2.finalPrice())
p2.discount = 0.20
console.log(p2.discount)
console.log(p2.discountString)