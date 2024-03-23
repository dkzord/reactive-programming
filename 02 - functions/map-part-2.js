// Implemantation of map function

const myMap = (array, fn) => {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(fn(array[i], i, array))
  }
  return newArray
}

const num = [1, 2, 3, 4, 5]
const double = (n) => n * 2
// console.log(myMap(num, double))

Array.prototype.myMap2 = function (fn) {
  const mapped = []

  for (let i = 0; i < this.length; i++) {
    const result = fn(this[i], i, this)
    mapped.push(result)
  }

  return mapped
}

const cart = [
  { name: 'Pen', quantity: 10, price: 7.99 },
  { name: 'Print', quantity: 0, price: 649.50 },
  { name: 'Book', quantity: 4, price: 27.10 },
  { name: 'Pencil', quantity: 3, price: 5.82 },
  { name: 'Scissors', quantity: 1, price: 19.20 }
]

const getPriceProduct = (product) => product.quantity * product.price
const getName = (product) => product.name
const totalPrice = myMap(cart, getPriceProduct) //cart.myMap2(getPriceProduct)
const nameItem = myMap(cart, getName) //cart.myMap2(getName)
console.log(totalPrice)
console.log(nameItem)
