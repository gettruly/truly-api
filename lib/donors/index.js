// Action                      HTTP method  Relative URI
// Get a list of all donors  GET          /api/donors
// Get a donor by ID         GET          /api/donors/id
// Create a new donor        POST         /api/donors
// Update a donor            PUT          /api/donors/id
// Delete a donor            DELETE       /api/donors/id

var express = require('express');

var app = module.exports = express();

var donors = require('./donors.js');

app.get ('/api/donors', donors.query);
app.get ('/api/donors/:id', donors.get);
app.post('/api/donors', donors.save);
app.put ('/api/donors/:id', donors.update);
app.delete ('/api/donors/:id', donors.delete);
