const express = require('express')
const router = express.Router()
const multer = require('../config/multer')
// mengarah ke controllers
const UserCont = require('../controllers/users.js')

router.get('/', UserCont.getUsers)
router.post('/', UserCont.postUsers)

module.exports = router