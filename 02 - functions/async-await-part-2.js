function generateNumber(min, max, avoidNumbers) {
  if (min > max) [min, max] = [max, min];

  return new Promise((resolve, reject) => {
    const factor = max - min + 1;
    const radom = parseInt(Math.random() * factor) + min
    if (avoidNumbers.includes(radom)) {
      reject('Avoid number found!')
    } else {
      resolve(radom)
    }
  })
}

async function generationMegaSena(qtdNumbers, attempts = 1) {
  try {
    const numbers = []

    for (let _ of Array(qtdNumbers).fill()) {
      numbers.push(await generateNumber(1, 60, numbers))
    }

    return numbers
  } catch (error) {
    if (attempts > 10) {
      throw 'Too many attempts!'
    } else {
      return generationMegaSena(qtdNumbers, attempts + 1)
    }
  }
}

generationMegaSena(6)
  .then(console.log)
  .catch(console.log)