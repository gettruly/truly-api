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

module.exports = {

  query : function(req, res){
    console.log('GET /api/shoes');
    res.jsonp(200, shoes);
  },

  get : function(req, res){
    var id = req.params.id;
    console.log('GET /api/shoes:', id);
    res.json(200, shoes[id-1]);
  },

  save : function(req, res){
    var shoe = req.body;
    console.log('POST /api/shoes:', shoe);
    res.send(200, 'POST /api/shoes');
  },

  update : function(req, res){
    var id = req.params.id;
    var shoe = req.body;
    console.log('PUT /api/shoes:', id, shoe);
    res.send(200, 'PUT /api/shoes');
  },

  delete : function(req, res){
    var id = req.params.id;
    console.log('DELETE /api/shoes:', id);
    res.send(200, 'DELETE /api/shoes');
  }

};
