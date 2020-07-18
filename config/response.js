exports.ok = function(values, res) {
    let data = {
        'status': 200,
        'data': values
    };
    res.json(data);
    res.end();
  };