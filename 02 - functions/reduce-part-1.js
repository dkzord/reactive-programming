const cart = [
  { name: 'Pen', quantity: 10, price: 7.99 },
  { name: 'Print', quantity: 0, price: 649.50 },
  { name: 'Book', quantity: 4, price: 27.10 },
  { name: 'Pencil', quantity: 3, price: 5.82 },
  { name: 'Scissors', quantity: 1, price: 19.20 }
]

const totalProduct = cart.reduce((acc, el) => {
  const total = el.quantity * el.price;
  if (total > 0) {
    acc.push({ name: el.name, total: total });
  }
  return acc;
}, []);
console.log(totalProduct)