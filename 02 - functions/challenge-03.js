const fs = require('fs')
const path = require('path')

function readFiles(pathToFile) {
  return new Promise(resolve => {
    fs.readFile(pathToFile, function (_, content) {
      resolve(content.toString())
    })
    console.log('After reading file...')
  })
}

const pathToFile = path.join(__dirname, 'dados.txt')
readFiles(pathToFile)
  .then(console.log)