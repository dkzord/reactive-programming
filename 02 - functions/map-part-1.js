const num = [1, 2, 3, 4, 5]
const double = (n, i, a) => n * 2 + i + a.length
// console.log(num.map(double))

const names = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const firstLetter = (text) => text[0]
const letter = names.map(firstLetter)
// console.log(letter)

const cart = [
  { name: 'Pen', quantity: 10, price: 7.99 },
  { name: 'Print', quantity: 0, price: 649.50 },
  { name: 'Book', quantity: 4, price: 27.10 },
  { name: 'Pencil', quantity: 3, price: 5.82 },
  { name: 'Scissors', quantity: 1, price: 19.20 }
]

const getPriceProduct = (product) => product.quantity * product.price
const getName = (product) => product.name
const totalPrice = cart.map(getPriceProduct)
const nameItem = cart.map(getName)
console.log(totalPrice) // [ 79.9, 0, 108.4, 17.46, 19.2 ]
console.log(nameItem) // [ 'Pen', 'Print', 'Book', 'Pencil', 'Scissors' ]
