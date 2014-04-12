// Action                      HTTP method  Relative URI
// Get a list of all organizations  GET          /api/organizations
// Get a organization by ID         GET          /api/organizations/id
// Create a new organization        POST         /api/organizations
// Update a organization            PUT          /api/organizations/id
// Delete a organization            DELETE       /api/organizations/id

var express = require('express');

var app = module.exports = express();

var organizations = require('./organizations.js');
// var connection = require('db');

app.get ('/api/organizations', organizations.query);
app.get ('/api/organizations/:id', organizations.get);
app.post('/api/organizations', organizations.save);
app.put ('/api/organizations/:id', organizations.update);
app.delete ('/api/organizations/:id', organizations.delete);
