const response = {

    ok: function(values, res) {
        let data = {
            'status': 200,
            'data': values
        };
        res.json(data);
        res.end()
        return true
    },

    error: function(values, res) {
        let data = {
            'status': 500,
            'data': values
        };
        res.json(data);
        res.end()
        return false
    }

}

module.exports = response