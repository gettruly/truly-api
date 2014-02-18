var express = require('express');
var app = express();
var cors = require('cors');
var join = require('path').join;
var mysql = require('mysql');
var logfmt = require("logfmt");
app.use(logfmt.requestLogger());
app.use(cors());
app.configure(function(){
  //app.use(express.bodyParser());
  app.use(express.urlencoded());
  app.use(express.json());
});

app.get('/welcome', function (req, res) {
  res.send('welcome');
});

//mysql://b6ebc1830dec6e:3673a20a@us-cdbr-east-05.cleardb.net/heroku_8c7231c4b3f8d12?reconnect=true

var connection = mysql.createConnection({
  host     : 'us-cdbr-east-05.cleardb.net',
  user     : 'b6ebc1830dec6e',
  password : '3673a20a',
  database: 'heroku_8c7231c4b3f8d12'
});

// var query = 'use shoes';
// connection.query(query, function(err, rows, fields) {
//   if (err) throw err;
// });

connection.connect();

app.post('/create', function (req, res) {
  if (!req.body) {
    return res.send(409, 'No content in body');
  }
  console.log('\nCreate');

  var email = req.body.email;
  var name = req.body.name;
  var type = req.body.type;
  var gender = req.body.gender;
  var size = req.body.size.toString();
  var org = req.body.org;
  var local = req.body.local;
  var img = req.body.img;

  var query = 'select count(*) from person where email = "' + email + '"';

  connection.query(query, function(err, rows, fields) {
    if (err) { 
      console.log('Error: select count',err);
      res.send(500, err);
    }

    var mailCount = rows[0]['count(*)'];
    console.log('Received request. Mail # in db:', mailCount);

    if (mailCount === 0 ) {

      query = 'insert into person (name, email) values(' +
        '"' + name  + '",' +
        '"' + email + '");';

      connection.query(query, function(err, rows, fields) {
        if (err) {
          console.log('Error: creating person',err);
          res.send(500, err);
        }

        console.log('Created Person');

        query = 'insert into shoe (personid,img,gender,size,type,org,local) values((select id from person where email = "' + email + '"),"' + img+ '","' + gender + '",' + size + ',"' + type + '","' + org +'","' + local +'");';
        connection.query(query, function(err, rows, fields) {
          if (err) {
            console.log('Error: inserting shoe in new person',err);
            res.send(500, err);
          }

          console.log('Introduced a shoe in new person');

          res.send(200);
        });
      });

    } else {

      query = 'insert into shoe (personid,img,gender,size,type,org,local) values((select id from person where email = "' + email + '"),"' + img+ '","' + gender + '",' + size + ',"' + type + '","' + org +'","' + local +'");';

      connection.query(query, function(err, rows, fields) {
        if (err) { 
          console.log('Error: inserting shoe in existing person',err);
          res.send(500, err);
        }

        console.log('Introduced a shoe in existing person');
        res.send(200);
      });
    }

  });

});

app.post('/ask', function (req, res) {
  if (!req.body)
    return res.send(409, 'No content in body');

  var email = req.body.email;

  var query = 'SELECT * FROM shoe JOIN person ON person.id=shoe.personid WHERE person.email="' + email +'";';

  connection.query(query, function(err, rows, fields) {
    if (err) { res.send(500, err);}
    console.log('Ask');
    res.send(rows);
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function (){
  console.log('Listening on port:', port);
});
