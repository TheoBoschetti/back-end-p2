require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const app = express()

const data = require('./tas-de-merde.json')

app.use(cors())

app.use(helmet())
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send(data)
})

app.listen(process.env.PORT, () => console.info('Server launched.'))
