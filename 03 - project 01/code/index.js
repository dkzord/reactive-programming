const fn = require('./functions')
const path = require('path')

const folderPath = path.join(__dirname, '../subtitles')



const result = fn.readFilesInFolder(folderPath).then(
  files => {
    const filterContent = files.map(file => {
      const cleanTime = fn.removeTimeLines(file.content)
      const cleanLines = fn.removeEmptyLines(cleanTime)

      console.log(cleanLines)
    })
  }
).catch(err => {
  console.error('Error reading file', err);
});