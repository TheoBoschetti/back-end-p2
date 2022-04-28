const express = require('express')
const router = express.Router()
const heroController = require('../controller/heroes')

router.get('/', (req, res) => heroController.getHeroes(req, res))

module.exports = router
