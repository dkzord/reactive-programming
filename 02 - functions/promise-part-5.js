function workOrNot(value, errorChance) {
  return new Promise((resolve, reject) => {
    try {
      con.log('temp')
      if (Math.random() < errorChance) {
        reject('An error occurred')
      } else {
        resolve(value)
      }
    } catch (error) {
      reject(error)
    }
  })
}

workOrNot('Testing...', 0.9)
  .then(v => `Value: ${v}`)
  .then(
    v => console.log(v),
    err => console.log(`Specific error: ${err}`)
  )
  .then(() => console.log('Almost end'))
  .catch(err => console.log(`General error: ${err}`))
  .finally(() => console.log('End'))