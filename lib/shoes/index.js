// Action                      HTTP method  Relative URI
// Get a list of all shoes  GET          /api/shoes
// Get a shoe by ID         GET          /api/shoes/id
// Create a new shoe        POST         /api/shoes
// Update a shoe            PUT          /api/shoes/id
// Delete a shoe            DELETE       /api/shoes/id

var express = require('express');

var app = module.exports = express();

// var connection = require('db');

// Get a list of all projects
app.get ('/api/shoes', function(req, res){
  console.log('GET /api/shoes:');
});

// Get a shoe by ID
app.get ('/api/shoes/:id', function(req, res){
  var id = req.params.id;
  console.log('GET /api/shoes:', id);
});

// Create a new shoe
app.post('/api/shoes', function(req, res){
  var newProject = req.body;
  console.log('POST /api/shoes:', newProject);
});

// Update a shoe
app.put ('/api/shoes/:id', function(req, res){
  var id = req.params.id;
  var shoe = req.body;
  console.log('PUT /api/shoes:', id, shoe);
});

// Delete a shoe
app.delete ('/api/shoes/:id', function(req, res){
  var id = req.params.id;
  console.log('DELETE /api/shoes:', id);
});
