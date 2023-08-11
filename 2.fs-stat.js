// Before node 16 is recommended to use node:
const fs = require('node:fs')

const stats = fs.statSync('./file-1.txt', 'utf-8')

console.log('Is file?', stats.isFile())
console.log('Is directory?', stats.isDirectory())
console.log('Is symbolic link', stats.isSymbolicLink())
console.log('file size (MB)', stats.size / 1024 / 1024)
