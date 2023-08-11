const { readFile } = require('node:fs/promises')

;(
  async () => {
    try {
      // Read files synchronously
      console.log('Reading first file...')
      const firstText = await readFile('./file-1.txt', 'utf-8')
      console.log(firstText)

      console.log('Reading second file...')
      const secondText = await readFile('./file-2.txt', 'utf-8')
      console.log(secondText)
    } catch (error) {
      console.error(error)
    }
  }
)()
