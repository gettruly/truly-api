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

// var connection = mysql.createConnection({
//    host: process.env.OPENSHIFT_MYSQL_DB_HOST,
//    port: process.env.OPENSHIFT_MYSQL_DB_PORT,
//    user: process.env.OPENSHIFT_MYSQL_DB_USERNAME,
//    password: process.env.OPENSHIFT_MYSQL_DB_PASSWORD,
//    database: process.env.OPENSHIFT_APP_NAME,
//  });


connection.connect();

module.exports = connection;
