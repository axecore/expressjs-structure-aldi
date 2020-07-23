var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
var path = require('path')


// Set Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

module.exports = multer = multer({ storage })