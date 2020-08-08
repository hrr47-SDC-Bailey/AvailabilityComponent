const mysql = require('mysql');
const credentials = require('./config.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: credentials.username,
  password: credentials.password,
  database: credentials.database,
  multipleStatements: true,
});

connection.connect();

const getHostels = function getHostels() {
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

const getRoomsByHostel = function getRoomsByHostel(hostelId) {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM rooms where hostel_id = ?', [hostelId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  getHostels,
  getRoomsByHostel,
  connection,
};
