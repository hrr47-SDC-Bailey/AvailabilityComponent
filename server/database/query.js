const credentials = require('./config.js');
const mysql = require('mysql');
const fs = require('fs');

var connection = mysql.createConnection({
  host: 'localhost',
  user: credentials.username,
  password: credentials.password,
  database: credentials.database,
  multipleStatements: true
});

connection.connect();


var getHostels = function() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM hostels', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports.getHostels = getHostels;