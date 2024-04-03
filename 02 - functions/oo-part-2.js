class Product {

  // as if it were the first part of a function
  constructor(name, price, discount = 0.15) {
    this.name = name; // When i dont have setter method i use _name beacause it is a convention
    this.price = price;
    this.discount = discount;
  }

  // It is interpolate a method
  get name() {
    return `Product: ${this._name}`;
  }

  // It is a method
  set name(newName) {
    this._name = newName.toUpperCase();
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    if (newPrice >= 0) {
      this._price = newPrice;
    }
  }

  // with get it is like an attribute
  // function in class is a method
  get finalPrice() {
    return this.price * (1 - this.discount);
  }
}

const p1 = new Product('pen', 8.59);
console.log(p1.name);
console.log(p1.finalPrice);

const p2 = new Product('book', 15.99);
p2.price = -10;
console.log(p2.price);

console.log(typeof Product);