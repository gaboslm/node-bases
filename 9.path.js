const path = require('node:path')

// Folder separator bar according to OS
console.log(path.sep)

// Join routes using path.join
const filePath = path.join('src', 'routes', 'user.js')
console.log(filePath)

const base = path.basename('src/routes/user.js')
console.log(base)

const fileName = path.basename('src/routes/user.js', '.js')
console.log(fileName)

const ext = path.extname('image.png')
console.log(ext)
