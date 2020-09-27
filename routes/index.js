const express = require('express'), router = express.Router()
const welcome = require('../controllers/index')

router.get('/',  welcome.index)

module.exports = router