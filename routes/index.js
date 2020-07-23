const express = require('express')
const router = express.Router()
const response = require('../config/response')

router.get('/', (req, res) => {
    response.ok("Selamat Datang", res)
})

module.exports = router