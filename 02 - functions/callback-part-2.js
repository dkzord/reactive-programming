const fs = require('fs')
const path = require('path')

const pathToFile = path.join(__dirname, 'dados.txt')

console.log('Start reading a file...', pathToFile)

function showContent(err, content) {
  if (err) {
    console.error('Error reading file:', err)
    return
  }
  console.log(content.toString())
}

fs.readFile(pathToFile, showContent)
fs.readFile(pathToFile, (_, content) => console.log(content.toString()))

console.log('Init sync')
const contentComplete = fs.readFileSync(pathToFile, showContent)
console.log(contentComplete.toString())
console.log('End sync')