const db = require('../config/db')
const response = require('../config/response')
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)
const paginate = require('../config/paginate')

module.exports = cont = {
    
    getUsers: function(req, res) {

        db.query("SELECT id, user_name FROM users ", function(error, rows, field) {

            if(error){
                console.log(error)
                return false
            }

            response.ok(paginate.result(rows, req), res)
 
        })    
        
    },
    
    postUsers: function(req, res) {
        
        const {username, password} = req.body

        if (username && password) {
            
            let data = [
                [username, bcrypt.hashSync(password, salt)],
            ]
    
            db.query("INSERT INTO users (user_name, password) VALUES (?)", data, function(error, rows){
                
                if(error) throw error
    
                response.ok("Berhasil", res)

            })
           
        }else{

            response.error("Input Error", res)

        }
 
        
    },
}
