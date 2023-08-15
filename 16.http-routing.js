const http = require('node:http')
const ditto = require('./pokemon/ditto.json')

const processRequests = (req, res) => {
  const { method, url } = req
  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':{
          return res.end(JSON.stringify(ditto))
        }
        default: {
          res.statusCode = 404
          return res.end('404 Not Found')
        }
      }
    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = ''
          req.on('data', (chunck) => {
            body += chunck.toString()
          })
          req.on('end', () => {
            const data = JSON.parse(body)
            res.writeHead(201, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify(data))
          })
          break
        }
        default: {
          res.statusCode = 404
          res.setHeader('Content-Type', 'application/json')
          return res.end('404 Not Found')
        }
      }
  }
}

const server = http.createServer(processRequests)

server.listen(3000, () => {
  console.log(`Server running on port http://localhost:${server.address().port}`)
})
