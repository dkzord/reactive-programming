const cart = [
  { name: 'Pen', quantity: 10, price: 7.99 },
  { name: 'Print', quantity: 0, price: 649.50 },
  { name: 'Book', quantity: 4, price: 27.10 },
  { name: 'Pencil', quantity: 3, price: 5.82 },
  { name: 'Scissors', quantity: 1, price: 19.20 }
]

const getTotal = item => item.quantity * item.price;
const sum = (acc, el) => acc + el;

const total = cart.map(getTotal).reduce(sum);
console.log(total);

Array.prototype.myReduce = function (fn, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (!acc && i === 0) {
      acc = this[i];
      continue
    }

    acc = fn(acc, this[i], i, this)
  }

  return acc;
}

const total2 = cart.map(getTotal).myReduce(sum);
console.log(total2);