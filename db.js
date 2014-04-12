var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'truly',
  password: 'truly',
  database: 'shoes'
});

connection.connect();

module.exports = connection;
