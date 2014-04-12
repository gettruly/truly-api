var express = require('express');

var app = express();

// var logfmt = require("logfmt");
// app.use(logfmt.requestLogger());

var port = process.env.PORT || 5000;

// Middlewares
var cors = require('cors');
var bodyParser = require('body-parser');

// CONFIG
app.use(cors());
app.use(bodyParser());

// var query = 'use shoes';
// connection.query(query, function(err, rows, fields) {
//   if (err) throw err;
// });

var connection = require('db');

var shoes = require('./lib/shoes');
var orgs = require('./lib/organizations');

app.use(shoes);
app.use(orgs);

app.get('/', function (res, req) {
  res.send('Truly alive!');
})

app.get('/*', function (res, req) {
  res.send(404);
})

app.listen(port, function() {
  console.log('Listening on port:', port);
});
