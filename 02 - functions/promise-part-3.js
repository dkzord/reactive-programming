function generateNumber(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }

  return new Promise(resolve => {
    const factor = max - min + 1;
    const radom = parseInt(Math.random() * factor) + min
    resolve(radom)
  })
}

generateNumber(1, 60)
  .then(num => num * 10)
  .then(numX10 => `The number generated was ${numX10}`)
  .then(console.log)