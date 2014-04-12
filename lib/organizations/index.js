// Action                      HTTP method  Relative URI
// Get a list of all organizations  GET          /api/organizations
// Get a organization by ID         GET          /api/organizations/id
// Create a new organization        POST         /api/organizations
// Update a organization            PUT          /api/organizations/id
// Delete a organization            DELETE       /api/organizations/id

var express = require('express');

var app = module.exports = express();

// var connection = require('db');

// Get a list of all projects
app.get ('/api/organizations', function(req, res){
  console.log('GET /api/organizations:');
});

// Get a organization by ID
app.get ('/api/organizations/:id', function(req, res){
  var id = req.params.id;
  console.log('GET /api/organizations:', id);
});

// Create a new organization
app.post('/api/organizations', function(req, res){
  var newProject = req.body;
  console.log('POST /api/organizations:', newProject);
});

// Update a organization
app.put ('/api/organizations/:id', function(req, res){
  var id = req.params.id;
  var organization = req.body;
  console.log('PUT /api/organizations:', id, organization);
});

// Delete a organization
app.delete ('/api/organizations/:id', function(req, res){
  var id = req.params.id;
  console.log('DELETE /api/organizations:', id);
});
