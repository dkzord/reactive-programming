function generateNumber(min, max, time) {
  if (min > max) {
    [min, max] = [max, min];
  }

  return new Promise(resolve => {
    setTimeout(function () {
      const factor = max - min + 1;
      const radom = parseInt(Math.random() * factor) + min
      resolve(radom)
    }, time);
  })
}

function generateNumbers() {
  return Promise.all([
    generateNumber(1, 60, 1000),
    generateNumber(1, 60, 4000),
    generateNumber(1, 60, 500),
    generateNumber(1, 60, 3000),
    generateNumber(1, 60, 100),
    generateNumber(1, 60, 1500),
  ])
}

console.time('time')
generateNumbers()
  .then(number => console.log(number))
  .then(() => {
    console.timeEnd('time')
  })