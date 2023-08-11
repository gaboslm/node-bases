const { readFile } = require('node:fs/promises')

console.log('Reading both files at the same time...')

Promise.allSettled([
  readFile('./file-1.txt', 'utf-8'),
  readFile('./file-2.txt', 'utf-8'),
  readFile('./file-3.txt', 'utf-8') // still having the first two ones is the third file does not exist
]).then((results) => {
  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      console.log(result.value)
    }
  })
}).catch((error) => {
  console.error(error)
})
