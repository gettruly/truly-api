// Action                      HTTP method  Relative URI
// Get a list of all shoes  GET          /api/shoes
// Get a shoe by ID         GET          /api/shoes/id
// Create a new shoe        POST         /api/shoes
// Update a shoe            PUT          /api/shoes/id
// Delete a shoe            DELETE       /api/shoes/id

var express = require('express');

var app = module.exports = express();

var shoes = require('./shoes.js');
// var connection = require('db');

app.get ('/api/shoes', shoes.query);
app.get ('/api/shoes/:id', shoes.get);
app.post('/api/shoes', shoes.save);
app.put ('/api/shoes/:id', shoes.update);
app.delete ('/api/shoes/:id', shoes.delete);
