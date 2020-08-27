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
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const createHostel = (hostel, callback) => {
  const name = hostel.name;
  const currency = hostel.currency;
  connection.query('INSERT INTO `hostels` (name, currency) VALUES (?, ?)', [name, currency], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const createRoom = (room, callback) => {
  const name = room.name;
  const description = room.description;
  const type = room.type;
  const hostelid = room.hostel_id;
  const quantity = room.quantity;
  connection.query('INSERT INTO `rooms` (name, description, type, hostelid, quantity) VALUES (?, ?, ?, ?, ?)', [name, description, type, hostelid, quantity], (error, results) => {
    if (error) {
      callback(error, null);
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
  createHostel,
  createRoom,
  connection,
};
