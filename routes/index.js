const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        'status': 'ok',
        'pesan': 'selamat datang'
    })
})

module.exports = router