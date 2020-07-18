const mysql = require('mysql'),
        sql = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "123",
            database: "asd"
        })

sql.connect(function(err) {
    if(err) throw err
})

module.exports = sql