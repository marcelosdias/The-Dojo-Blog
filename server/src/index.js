const express = require('express')
const apiRoutes = require('./routes')

const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3333

require('dotenv').config()

app.use(cors())
app.use(express.json())

app.use(apiRoutes)

app.use(function (err, req, res, next) {
  console.log('aaaa')
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('invalid token...')
  }
})

app.use((req, res, next) => {
  const error = NotFound()
  return res.status(error.statusCode).json({
    name: error.name,
    message: error.message,
  })
})

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
