const express = require('express')
const router = express()

// mengarah ke folder routes
const users = require('./routes/users');
const index = require('./routes/index');

// List Route API
router.use('/', index);
router.use('/api/v1/users', users);

module.exports = router;