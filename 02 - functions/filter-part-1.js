const num = [1, 20, 14, 8, 7, 4, 9, 3]

const isAboveSeven = (n) => n >= 7
const aboveSeven = num.filter(isAboveSeven)
// console.log(aboveSeven)

const cart = [
  { name: 'Pen', quantity: 10, price: 7.99 },
  { name: 'Print', quantity: 0, price: 649.50 },
  { name: 'Book', quantity: 4, price: 27.10 },
  { name: 'Pencil', quantity: 3, price: 5.82 },
  { name: 'Scissors', quantity: 1, price: 19.20 }
]

const getName = product => product.name
const qtdMoreZero = (product) => product.quantity > 0
const qtdBiggestZero = (product) => product.quantity >= 4


Array.prototype.myFilter = function (fn) {
  const newArray = []

  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      newArray.push(this[i])
    }
  }

  return newArray
}

const resultCart = cart.myFilter(qtdMoreZero).myFilter(qtdBiggestZero).map(getName)
console.log(resultCart)