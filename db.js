var config = require('konphyg')(__dirname + '/config');

var mysql = require('mysql');
var mysqlConf = config('mysql');

var connection = mysql.createConnection({
  host: mysqlConf.host,
  user: mysqlConf.user,
  password: mysqlConf.password,
  database: mysqlConf.database,
  port: mysqlConf.port
});

connection.connect();

module.exports = connection;
