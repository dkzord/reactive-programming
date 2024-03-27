const cart = [
  { name: 'Pen', quantity: 10, price: 7.99, fragile: true },
  { name: 'Print', quantity: 1, price: 649.50, fragile: true },
  { name: 'Book', quantity: 4, price: 27.10, fragile: false },
  { name: 'Scissors', quantity: 12, price: 19.20, fragile: false },
  { name: 'Pencil', quantity: 3, price: 5.82, fragile: true },
]

// 01 fragil: true
// 02 qtde: 4, preco: 27.10 -> total
// 03 media totais

const isFragile = item => item.fragile;
const isPriceAndQuantity = item => {
  return {
    price: item.price,
    quantity: item.quantity,
    total: item.price * item.quantity
  }
}

const result = cart.filter(isFragile).map(isPriceAndQuantity)

const average = result.reduce((acc, el) => {
  const qtd = acc.qtd + 1;
  const total = acc.total + el.total;

  return {
    qtd,
    total,
    media: total / qtd,
  }
}, {
  qtd: 0,
  total: 0,
  media: 0
})
console.log(average.media);