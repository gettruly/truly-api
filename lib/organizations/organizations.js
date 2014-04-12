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

module.exports = {

  query : function(req, res){
    console.log('GET /api/organizations');
    res.jsonp(200, organizations);
  },

  get : function(req, res){
    var id = req.params.id;
    console.log('GET /api/organizations:', id);
    res.json(200, organizations[id-1]);
  },

  save : function(req, res){
    var organization = req.body;
    console.log('POST /api/organizations:', organization);
    res.send(200, 'POST /api/organizations');
  },

  update : function(req, res){
    var id = req.params.id;
    var organization = req.body;
    console.log('PUT /api/organizations:', id, organization);
    res.send(200, 'PUT /api/organizations');
  },

  delete : function(req, res){
    var id = req.params.id;
    console.log('DELETE /api/organizations:', id);
    res.send(200, 'DELETE /api/organizations');
  }

};
