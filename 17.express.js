const express = require('express')
const ditto = require('./pokemon/ditto.json')

const PORT = process.env.PORT || 3000

const app = express()
app.disable('x-powered-by')

// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   let body = ''

//   req.on('data', (chunck) => {
//     body += chunck.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     req.body = data
//     next()
//   })
// })

// this line resumes the above code
app.use(express.json())

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  return res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>404 Not found</h1>')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}!`)
})
