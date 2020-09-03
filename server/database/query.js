
//////////////////// POSTGRESQL QUERIES /////////////////////////////////
const { Client } = require('pg');

const db = new Client({
  user: 'tejones112',
  host: 'localhost',
  password: null,
  database: 'hostels',
  // port: 3009
});


db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('CONNECTED');
  }
});


const getRoomById = function getRoomByID(id) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM rooms WHERE hostel_id = ${id}`, (error, results) => {
      if (error) {
        reject('error')
      } else {
        resolve(results);
      }
    });
  })
}



const updateRoomById = (updatedRoom, callback) => {
  const queryStr =`UPDATE rooms SET name = $1, description = $2, type = $3, quantity = $4 WHERE hostel_id = $5 AND room_id = $6`;
  const queryArgs = [updatedRoom.name, updatedRoom.description, updatedRoom.type, updatedRoom.quantity, updatedRoom.hostel_id, updatedRoom.room_id];


  db.query(queryStr, queryArgs, (error, results) => {
    if (error) {
      callback('error', null);
    } else {
      callback(null, results);
    }
  });
}

const createRoom = (newRoom, callback) => {
  const queryStr = `INSERT INTO rooms (hostel_id, room_id, name, description, type, quantity) VALUES ($1, $2, $3, $4, $5, $6)`;
  const queryArgs = [newRoom.hostel_id, newRoom.room_id, newRoom.name, newRoom.description, newRoom.type, newRoom.quantity];


  db.query(queryStr, queryArgs, (error, results) => {
    if (error) {
      callback('error', null);
    } else {
      callback(null, results);
    }
  })
}


/////////////////////////// CASANDRA QUERIES ///////////////////////////////////
///////NOT FUNCTIONING YET///////////
// const cassandra = require ('cassandra-driver');
// const client = new cassandra.Client({contactPoints: ['Test Cluster', keyspace:'hostels']});
// client.connect((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('CONNECTED CASSANDRA');
//   }
// });













/////////////////////////////////////////////////////////////////////////////////

// const mysql = require('mysql');
// const credentials = require('./config.js');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: credentials.username,
//   password: credentials.password,
//   database: credentials.database,
//   multipleStatements: true,
// });

// connection.connect();

// const getHostels = function getHostels() {
//   return new Promise((resolve, reject) => {
//     connection.query('SELECT * FROM hostels', (error, results) => {
//       if (error) {
//         reject('error');
//       } else {
//         resolve(results);
//       }
//     });
//   });
// };



// const getRoomsByHostel = function getRoomsByHostel(hostelId) {
//   return new Promise((resolve, reject) => {
//     connection.query('SELECT * FROM rooms where hostel_id = ?', [hostelId], (error, results) => {
//       if (error) {
//         reject('error');
//       } else {
//         resolve(results);
//       }
//     });
//   });
// };

// const updateHostel = (hostelToUpdate, callback) => {
//   connection.query('UPDATE `hostels`  SET `name` = ?, `currency` = ? where `id` = ?', [hostelToUpdate.name, hostelToUpdate.currency, hostelToUpdate.id], (error, results) => {
//     if (error) {
//       callback('error', null);
//     } else {
//       callback(null, results);
//     }
//   });
// };

// const updateRoom = (roomToUpdate, callback) => {
//   connection.query('UPDATE `rooms` SET `name` = ?, `description` = ?, `type` = ?, `quantity` = ? where `id` = ?', [roomToUpdate.name, roomToUpdate.description, roomToUpdate.type, roomToUpdate.quantity, roomToUpdate.id], (error, results) => {
//     if (error) {
//       callback('error', null);
//     } else {
//       callback(null, results);
//     }
//   });
// };

// const createHostel = (hostel, callback) => {
//   const name = hostel.name;
//   const currency = hostel.currency;
//   connection.query('INSERT INTO `hostels` (name, currency) VALUES (?, ?)', [name, currency], (error, results) => {
//     if (error) {
//       callback('error', null);
//     } else {
//       callback(null, results);
//     }
//   });
// };

// const createRoom = (room, callback) => {
//   const name = room.name;
//   const description = room.description;
//   const type = room.type;
//   const hostelid = room.hostel_id;
//   const quantity = room.quantity;
//   connection.query('INSERT INTO `rooms` (name, description, type, hostelid, quantity) VALUES (?, ?, ?, ?, ?)', [name, description, type, hostelid, quantity], (error, results) => {
//     if (error) {
//       callback('error', null);
//     } else {
//       callback(null, results);
//     }
//   });
// };

// const deleteHostel = (hostelToDelete, callback) => {
//   connection.query('DELETE FROM `rooms` WHERE `hostel_id` = ?', [hostelToDelete.id]);
//   connection.query('DELETE FROM `hostels` WHERE `id` = ?', [hostelToDelete.id], (error, results) => {
//     if (error) {
//       callback(error, null);
//     } else {
//       callback(null, results);
//     }
//   });
// };

// const deleteRoom = (roomToDelete, callback) => {
//   connection.query('DELETE FROM `rooms` WHERE `hostel_id` = ?', [roomToDelete.id], (error, results) => {
//     if (error) {
//       callback(error, null);
//     } else {
//       callback(null, results);
//     }
//   });
// };




module.exports = {
 getRoomById,
 updateRoomById,
 createRoom,
// getRoomsByHostel
};
