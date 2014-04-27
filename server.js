// require('newrelic');

var express = require('express');
var http = require('http');

var app = express();

// For Heroku
var logfmt = require("logfmt");
app.use(logfmt.requestLogger());

// Middlewares
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');

// CONFIG
app.use(logger('dev'));
app.use(cors());
// app.use(bodyParser());
app.use(bodyParser({limit: '50mb'}));

var donors = require('./lib/donors');
var shoes = require('./lib/shoes');
var orgs = require('./lib/organizations');

app.use(donors);
app.use(shoes);
app.use(orgs);

app.get('/', function (req, res) {
  res.send('Truly alive!');
})

app.get('/*', function (req, res) {
  res.send(404);
})

var server;
exports.port = process.env.PORT || 8080;
exports.start = start;
exports.stop = stop;

function start(cb) {
  var port = exports.port;
  server = http.createServer(app);
  server.listen(port, function() {
    if (cb) return cb();
    console.log('Listening on port', port, '...');
  });
}

function stop(cb) {
  server.close(cb);
  if (! server && cb) return cb();
}

if (require.main == module)
  start();
