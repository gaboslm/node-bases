const fs = require('node:fs')

// Read files asynchronously
console.log('Reading first file asynchronously...')
fs.readFile('./file-1.txt', 'utf-8', (err, text) => {
  if (err) throw err
  console.log(text)
})

console.log('Reading second file asynchronously...')
fs.readFile('./file-2.txt', 'utf-8', (err, text) => {
  if (err) throw err
  console.log(text)
})
