require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const app = express()

const data = require('./tas-de-merde.json')

// add whitelist
app.use(cors())

app.use(helmet())
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send(data)
})

// catch 404 error
app.use('/', (req, res) => {
  return res.sendStatus(404)
})

app.listen(process.env.PORT, () => console.info('Server launched.'))
