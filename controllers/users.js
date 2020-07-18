const db = require('../config/db')
const response = require('../config/response')

module.exports = cont = {
    getUsers: function(req, res) {
        db.query("SELECT id, user_name FROM users ", function(error, rows, field) {

            if(error){
                console.log(error)
                return false
            }

            response.ok(rows, res)
        })    
    },
    
    postUsers: function(req, res) {
        response.ok("POST proses", res)
    }
}
