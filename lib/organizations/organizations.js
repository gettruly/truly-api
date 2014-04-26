var organization1 = {
  id: 1,
  name: 'Mariana Santos Lucas',
  email: 'mariana@gmail.com',
  phone: 961234567
};
var organization2 = {
  id: 2,
  name: 'João Pedro Afonso',
  email: 'jpba@gmail.com',
  phone: 961234512
};

var organizations = [organization1, organization2];

var connection = require('db.js');

module.exports = {

  query : function(req, res){
    res.jsonp(200, organizations);
  },

  get : function(req, res){
    var id = req.params.id;
    res.json(200, organizations[id-1]);
  },

  save : function(req, res){
    var organization = req.body;
    res.send(200, 'POST /api/organizations');
  },

  update : function(req, res){
    var id = req.params.id;
    var organization = req.body;
    res.send(200, 'PUT /api/organizations');
  },

  delete : function(req, res){
    var id = req.params.id;
    res.send(200, 'DELETE /api/organizations');
  }

};
