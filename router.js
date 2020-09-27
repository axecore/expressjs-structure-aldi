const express = require('express')
const router = express()

// mengarah ke folder routes
const index = require('./routes/index');

// List Route API
router.use('/', index);

module.exports = router;