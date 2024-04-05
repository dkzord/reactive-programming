const fs = require('fs')
const path = require('path')

function readFilesInFolder(folderPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        reject(err);
        return;
      }

      const filePromises = files
        .filter(file => path.extname(file) === '.srt')
        .map(file => {
          const filePath = path.join(folderPath, file);
          return new Promise((resolveFile, rejectFile) => {
            fs.readFile(filePath, 'utf8', (err, data) => {
              if (err) {
                rejectFile(err);
              } else {
                resolveFile({ fileName: file, content: data.toString() });
              }
            })
          })
        });

      Promise.all(filePromises).then(resolve).catch(reject);
    });
  });
}

function removeEmptyLines(text) {
  const cleanEmptyLine = text.split('\n').filter(line => line.trim()).join('\n');
  const removeTagHTML = cleanEmptyLine.replace(/<[^>]+>/g, '');

  return removeTagHTML;
}

function removeTimeLines(texto) {
  const lines = texto.split('\n');
  const linesFilter = lines.filter(linha => !linha.match(/^\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}$/));
  const formattedLinesFilter = linesFilter.join('\n');

  return formattedLinesFilter;
}

module.exports = {
  readFilesInFolder,
  removeEmptyLines,
  removeTimeLines,
}