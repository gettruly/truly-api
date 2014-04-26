var shoe1 = {
  id: 1,
  name: 'Mariana Santos Lucas',
  email: 'mariana@gmail.com',
  phone: 961234567
};
var shoe2 = {
  id: 2,
  name: 'João Pedro Afonso',
  email: 'jpba@gmail.com',
  phone: 961234512
};

var shoes = [shoe1, shoe2];

var connection = require('db.js');

var SHOES_TBL = 'shoes';

module.exports = {

  query : function(req, res){
    res.jsonp(200, shoes);
  },

  get : function(req, res){
    var id = req.params.id;
    res.json(200, shoes[id-1]);
  },

  save : function(req, res){
    var shoe = req.body;

    var query = 'INSERT INTO ' + SHOES_TBL + ' SET ?';
    connection.query(query, shoe, function(err, result) {
      if (err) { return res.send(500, err); }

      var o = {id: result.insertId};
      res.send(200, o);
    });
  },

  update : function(req, res){
    var id = req.params.id;
    var shoe = req.body;
    res.send(200, 'PUT /api/shoes');
  },

  delete : function(req, res){
    var id = req.params.id;
    res.send(200, 'DELETE /api/shoes');
  }

};
