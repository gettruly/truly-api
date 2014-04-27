//var config = require('konphyg')(__dirname + '/config');

var mysql = require('mysql');
//var mysqlConf = config('mysql');

/*
var connection = mysql.createConnection({
  host: mysqlConf.host,
  user: mysqlConf.user,
  password: mysqlConf.password,
  database: mysqlConf.database,
  port: mysqlConf.port
});
*/
var connection = mysql.createConnection({
  host     : process.env.OPENSHIFT_MYSQL_DB_HOST,
  user     : process.env.OPENSHIFT_MYSQL_DB_USERNAME,
  pass     : process.env.OPENSHIFT_MYSQL_DB_PASSWORD,
  port     : process.env.OPENSHIFT_MYSQL_DB_PORT,
  database : 'trulyapi'
 });


connection.connect();

module.exports = connection;
