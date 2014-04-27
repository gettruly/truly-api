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

var path = require('path');

var connection = require(path.join(__dirname, '..', '..', 'db.js'));

var donors = [donor1, donor2];

var DONORS_TBL = 'donors';

module.exports = {

  query: function(req, res) {
    var query = 'SELECT * FROM '+ DONORS_TBL;

    connection.query(query, function(err, rows, fields) {
      if (err) {
        res.send(500, err);
      }
      res.send(rows);
    });
  },

  get: function(req, res) {
    var email = req.params.email;

    var query = 'SELECT * FROM ' + DONORS_TBL + ' WHERE email = ?';
    connection.query(query, email, function(err, rows, fields) {
    console.log('email:', email)

      if (err) {
        res.send(500, err);
      }
      res.send(rows);
    });
  },

  save: function(req, res) {
    var donor = req.body;

    var query = 'INSERT INTO ' + DONORS_TBL + ' SET ?';
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
