require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const app = express()

const heroes = require('./app/route/heroes')

app.use(cors())

app.use(helmet())
app.use(express.json())

app.use('/hero', heroes)

app.listen(process.env.PORT, () => console.info('Server launched.'))
