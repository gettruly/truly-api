var express = require('express');
var app = express();
var cors = require('cors');
var join = require('path').join;
// var logfmt = require("logfmt");
// app.use(logfmt.requestLogger());
app.use(cors());
app.configure(function() {
  app.use(express.bodyParser());
});

app.get('/welcome', function(req, res) {
  res.send('welcome');
});

// var query = 'use shoes';
// connection.query(query, function(err, rows, fields) {
//   if (err) throw err;
// });

var connection = require('db');

var shoes = require('./lib/shoes');
var orgs = require('./lib/organizations');

app.use(shoes);
app.use(orgs);

var port = process.env.PORT || 5000;

app.get('/', function (res, req) {
  res.send('Truly alive!');
})

app.get('/*', function (res, req) {
  res.send(404);
})

app.listen(port, function() {
  console.log('Listening on port:', port);
});
