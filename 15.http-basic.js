const http = require('node:http')
const fs = require('node:fs/promises')

const desiredPort = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  if (req.url === '/') {
    res.end('Home page\n')
  } else if (req.url === '/contact') {
    res.end('Contact page\n')
  } else if (req.url === '/cat.jpg') {
    readImage('./cat.jpg', res)
  } else {
    res.statusCode = 404
    res.end('Not found\n')
  }
})

function readImage (url, res) {
  fs.readFile(url)
    .then(data => {
      res.setHeader('Content-Type', 'image/jpg')
      res.end(data)
    })
    .catch(err => {
      if (err) {
        res.statusCode = 500
        res.end('Internal Server Error')
      }
    })
}

server.listen(desiredPort, () => {
  console.log(`listening on port http://localhost:${server.address().port}`)
})
