const fs = require('node:fs/promises')

// Read files asynchronously using promises
console.log('Reading first file asynchronously...')
fs.readFile('./file-1.txt', 'utf-8')
  .then(text => console.log(text))
  .catch(err => { throw err })

console.log('Reading second file asynchronously...')
fs.readFile('./file-2.txt', 'utf-8')
  .then(text => console.log(text))
  .catch(err => { throw err })
