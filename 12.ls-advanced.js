const fs = require('node:fs/promises')
const path = require('node:path')
const pico = require('picocolors')

const folder = process.argv[2]

ls(folder)

async function ls (folder) {
  let files

  try {
    files = await fs.readdir(folder)
  } catch (error) {
    console.error(pico.red(`❌ No such directory: ${folder}`))
    process.exit(1)
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file)
    let stats

    try {
      stats = await fs.stat(filePath)
    } catch (error) {
      console.log(pico.red(`❌ Unable to read file ${filePath}`))
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? '📁' : '📝'
    const fileSize = (stats.size.toString().padStart(10))
    const fileModified = pico.yellow(stats.mtime.toLocaleString().padStart(30))

    return console.log(`${fileType} ${pico.blue(file.padEnd(30))} ${fileSize} ${fileModified} `)
  })

  Promise.all(filesPromises)
}
