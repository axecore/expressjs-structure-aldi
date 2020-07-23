const paginate = {

    result: function(rows, req) {
    
            const page  = parseInt(req.query.page)
            const limit = parseInt(req.query.limit)
    
            const startIndex = (page - 1) * limit
            const endIndex = page * limit
            
            const results = {}
            
            results.data = rows.slice(startIndex, endIndex)
            
            if (endIndex < rows.length) {     
                results.next = {
                    page: page + 1,
                    limit: limit
                }
            }

            if (startIndex > 0) {                
                results.previous = {
                    page: page - 1,
                    limit: limit
                }
            }


            return results
            
        }
    }

module.exports = paginate