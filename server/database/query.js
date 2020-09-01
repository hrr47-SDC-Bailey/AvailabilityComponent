const mysql = require('mysql');
const credentials = require('./config.js');
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

const getHostelById = (id, callback) => {
  db.query(`SELECT * FROM hostels WHERE id = ${id}`, (error, results) => {
    if (error) {
      callback(error, null);
      db.end();
    } else {
      callback(null, results);
      db.end();
    }
  });
}





module.exports = {
 getHostelById,
};
