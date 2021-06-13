
Welcome = {
    
    index: function(req, res) {

        const welcome = {
            hai: "welcome to index this file with",
            link: "handlebarsjs"
        }

        res.render("welcome", welcome)
        
    },

}

module.exports = Welcome
