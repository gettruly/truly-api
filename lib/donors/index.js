// Action                      HTTP method  Relative URI
// Get a list of all donors  GET          /api/donors
// Get a donor by ID         GET          /api/donors/id
// Create a new donor        POST         /api/donors
// Update a donor            PUT          /api/donors/id
// Delete a donor            DELETE       /api/donors/id

var express = require('express');

var app = module.exports = express();

// var connection = require('db');

// Get a list of all projects
app.get ('/api/donors', function(req, res){
  console.log('GET /api/donors:');
});

// Get a donor by ID
app.get ('/api/donors/:id', function(req, res){
  var id = req.params.id;
  console.log('GET /api/donors:', id);
});

// Create a new donor
app.post('/api/donors', function(req, res){
  var newProject = req.body;
  console.log('POST /api/donors:', newProject);
});

// Update a donor
app.put ('/api/donors/:id', function(req, res){
  var id = req.params.id;
  var donor = req.body;
  console.log('PUT /api/donors:', id, donor);
});

// Delete a donor
app.delete ('/api/donors/:id', function(req, res){
  var id = req.params.id;
  console.log('DELETE /api/donors:', id);
});
