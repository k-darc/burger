  
var mysql = require("mysql");
var dotenv = require("dotenv");
var connection;

// Configures dotenv package
dotenv.config();

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", // FIXME: Establish a connection to your MySQL Database
    password: "12345", // https://www.npmjs.com/package/mysql#establishing-connections
    database: "burgers_db"
  });
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;