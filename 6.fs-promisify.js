const fs = require('node:fs')
const { promisify } = require('node:util')

const readFilePromise = promisify(fs.readFile)

// Read files asynchronously convert readFile callback into a promise
console.log('Reading first file asynchronously...')
readFilePromise('./file-1.txt', 'utf-8')
  .then(text => console.log(text))
  .catch(err => { throw err })

console.log('Reading second file asynchronously...')
readFilePromise('./file-2.txt', 'utf-8')
  .then(text => console.log(text))
  .catch(err => { throw err })
