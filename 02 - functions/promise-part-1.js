const firstElement = arrayOrString => arrayOrString[0]
const lowerLetter = letter => letter.toLowerCase()

let p = new Promise(function (resolve) {
  resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
}).then(firstElement)
  .then(firstElement)
  .then(lowerLetter)
  .then(console.log)
  .catch(console.error)