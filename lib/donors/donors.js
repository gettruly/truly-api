var donor1 = {
  id: 1,
  name: 'Mariana Santos Lucas',
  email: 'mariana@gmail.com',
  phone: 961234567
};
var donor2 = {
  id: 2,
  name: 'João Pedro Afonso',
  email: 'jpba@gmail.com',
  phone: 961234512
};

var connection = require('db.js');

var donors = [donor1, donor2];

module.exports = {

  query: function(req, res) {
    connection.query('SELECT * FROM donors', function(err, rows, fields) {
      if (err) {
        res.send(500, err);
      }
      res.send(rows);
    });
  },

  get: function(req, res) {
    var id = req.params.id;
    res.json(200, donors[id - 1]);
  },

  save: function(req, res) {
    var donor = req.body;

    var query = "INSERT INTO donors SET ?";

    connection.query(query, donor, function(err, result) {
      if (err) { return res.send(500, err); }

      var o = {id: result.insertId};
      res.send(200, o);
    });
  },

  update: function(req, res) {
    var id = req.params.id;
    var donor = req.body;
    res.send(200, 'PUT /api/donors');
  },

  delete: function(req, res) {
    var id = req.params.id;
    res.send(200, 'DELETE /api/donors');
  }

};
