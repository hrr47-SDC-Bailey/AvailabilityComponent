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

const updateHostel = (hostelToUpdate, callback) => {
  connection.query('UPDATE `hostels`  SET `name` = ?, `currency` = ? where `id` = ?', [hostelToUpdate.name, hostelToUpdate.currency, hostelToUpdate.id], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const updateRoom = (roomToUpdate, callback) => {
  connection.query('UPDATE `rooms` SET `name` = ?, `description` = ?, `type` = ?, `quantity` = ? where `id` = ?', [roomToUpdate.name, roomToUpdate.description, roomToUpdate.type, roomToUpdate.quantity, roomToUpdate.id], (error, results) => {
    if (error) {
      callback(eroor, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getHostels,
  getRoomsByHostel,
  updateHostel,
  updateRoom,
  connection,
};
