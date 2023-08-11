const fs = require('node:fs')

// Read files synchronously
console.log('Reading first file...')
const firstText = fs.readFileSync('./file-1.txt', 'utf-8')
console.log(firstText)

console.log('Reading second file...')
const secondText = fs.readFileSync('./file-2.txt', 'utf-8')
console.log(secondText)
