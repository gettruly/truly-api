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

var donors = [donor1, donor2];

module.exports = {

  query : function(req, res){
    console.log('GET /api/donors');
    res.jsonp(200, donors);
  },

  get : function(req, res){
    var id = req.params.id;
    console.log('GET /api/donors:', id);
    res.json(200, donors[id-1]);
  },

  save : function(req, res){
    var donors = req.body;
    console.log('POST /api/donors:', donors);
    res.send(200, 'POST /api/donors');
  },

  update : function(req, res){
    var id = req.params.id;
    var donor = req.body;
    console.log('PUT /api/donors:', id, donor);
    res.send(200, 'PUT /api/donors');
  },

  delete : function(req, res){
    var id = req.params.id;
    console.log('DELETE /api/donors:', id);
    res.send(200, 'DELETE /api/donors');
  }

};
