const notas = [10.2, 9.3, 8.5, 7.9, 6.0, 5.4, 4.7]

const somar = (a, b) => a + b
const dividir = (a, b) => a / b

const media = dividir(notas.reduce(somar), notas.length)

console.log(media)