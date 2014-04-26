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
      console.log('OK');
      res.send(rows);
    });
  },

  get: function(req, res) {
    var id = req.params.id;
    console.log('GET /api/donors/:id', id);
    res.json(200, donors[id - 1]);
  },


  // INSERT INTO donors (name,email,phone)
  // VALUES ('John Doe','jarbas@gmail.com','987654321')
  save: function(req, res) {
    var donor = req.body;
    console.log(donor);

    var query = "INSERT INTO donors (name,email,phone) VALUES (?, ?, ?)";

    connection.query(query, donor, function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(200, 'POST /api/donors');
    });
  },

  update: function(req, res) {
    var id = req.params.id;
    var donor = req.body;
    console.log('PUT /api/donors:', id, donor);
    res.send(200, 'PUT /api/donors');
  },

  delete: function(req, res) {
    var id = req.params.id;
    console.log('DELETE /api/donors:', id);
    res.send(200, 'DELETE /api/donors');
  }

};
