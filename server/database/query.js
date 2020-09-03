
//////////////////// POSTGRESQL QUERIES /////////////////////////////////
const { Client } = require('pg');

const db = new Client({
  user: 'tejones112',
  host: 'localhost',
  password: null,
  database: 'hostels',
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

const deleteRoom = (id, callback) => {
  const queryStr = `DELETE FROM rooms WHERE hostel_id = $1`;
  const queryArgs = [id];

  db.query(queryStr, queryArgs, (error, results) => {
    if (error) {
      callback('error', null);
    } else {
      callback(null, results);
    }
  })
}


module.exports = {
 getRoomById,
 updateRoomById,
 createRoom,
 deleteRoom

};
