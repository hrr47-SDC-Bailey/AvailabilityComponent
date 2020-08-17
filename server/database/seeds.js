const fs = require('fs');
const makeSchema = fs.readFileSync('server/database/schema.sql').toString();
const mysql = require('mysql');
const credentials = require('./config.js');
const connection = mysql.createConnection({
  host: 'localhost',
  user: credentials.username,
  password: credentials.password,
  database: credentials.database,
  multipleStatements: true,
});

connection.query(makeSchema, (error) => {
  if (error) { throw error; }

  // Seed Hostels
  const hostels = ['Hostel 1', 'Hostel 2', 'Hostel 3', 'Hostel 4', 'Hostel 5', 'Hostel 6', 'Hostel 7', 'Hostel 8', 'Hostel 9', 'Hostel 10', 'Hostel 11', 'Hostel 12', 'Hostel 13', 'Hostel 14', 'Hostel 15', 'Hostel 16', 'Hostel 17', 'Hostel 18', 'Hostel 19', 'Hostel 20', 'Hostel 21', 'Hostel 22', 'Hostel 23', 'Hostel 24', 'Hostel 25', 'Hostel 26', 'Hostel 27', 'Hostel 28', 'Hostel 29', 'Hostel 30', 'Hostel 31', 'Hostel 32', 'Hostel 33', 'Hostel 34', 'Hostel 35', 'Hostel 36', 'Hostel 37', 'Hostel 38', 'Hostel 39', 'Hostel 40', 'Hostel 41', 'Hostel 42', 'Hostel 43', 'Hostel 44', 'Hostel 45', 'Hostel 46', 'Hostel 47', 'Hostel 48', 'Hostel 49', 'Hostel 50', 'Hostel 51', 'Hostel 52', 'Hostel 53', 'Hostel 54', 'Hostel 55', 'Hostel 56', 'Hostel 57', 'Hostel 58', 'Hostel 59', 'Hostel 60', 'Hostel 61', 'Hostel 62', 'Hostel 63', 'Hostel 64', 'Hostel 65', 'Hostel 66', 'Hostel 67', 'Hostel 68', 'Hostel 69', 'Hostel 70', 'Hostel 71', 'Hostel 72', 'Hostel 73', 'Hostel 74', 'Hostel 75', 'Hostel 76', 'Hostel 77', 'Hostel 78', 'Hostel 79', 'Hostel 80', 'Hostel 81', 'Hostel 82', 'Hostel 83', 'Hostel 84', 'Hostel 85', 'Hostel 86', 'Hostel 87', 'Hostel 88', 'Hostel 89', 'Hostel 90', 'Hostel 91', 'Hostel 92', 'Hostel 93', 'Hostel 94', 'Hostel 95', 'Hostel 96', 'Hostel 97', 'Hostel 98', 'Hostel 99', 'Hostel 100'];

  const currencies = ['CNY', 'EUR', 'GBP', 'USD', 'CAD'];

  hostels.forEach((hostel) => {
    // Assign a random currency
    const cur = currencies[Math.floor(Math.random() * Math.floor(currencies.length))];
    const name = hostel;

    // insert hostel into database
    const statement = `INSERT INTO hostels (name, currency) VALUES ('${name}', '${cur}')`;
    connection.query(statement);
  });
});

// Seed rooms table

const descriptions = 'Bacon ipsum dolor amet drumstick turkey pastrami chicken, brisket filet mignon short loin. Jowl hamburger pork chop fatback, meatball landjaeger filet mignon chuck t-bone. Pork buffalo tri-tip, jowl bresaola sirloin kielbasa filet mignon alcatra leberkas burgdoggen pork belly picanha. Tongue picanha sirloin beef ribs filet mignon jerky turducken. Ground round bresaola picanha, burgdoggen pork loin turducken meatloaf. Rump beef chicken, fatback boudin buffalo drumstick landjaeger turkey venison meatloaf strip steak ham hock kevin leberkas. Jerky chicken chislic, meatloaf drumstick shank doner rump kielbasa pig filet mignon boudin ham hock turducken.'.split('.');

const privateRooms = ['Standard Twin Private Ensuite', 'Basic Double Bed Private Ensuite', 'Deluxe Double Bed Private Ensuite', 'Standard 3 Bed Family Room Ensuite'];

const dormRooms = ['Standard 6 Bed Female Dorm', 'Superior 2 Bed Female Dorm', 'Standard 8 Bed Male Dorm'];

setTimeout(() => {
  for (let i = 1; i <= 100; i += 1) {
    // Give Each Hostel one of each room
    for (let p = 0; p < privateRooms.length; p += 1) {
      const name = privateRooms[p];
      const description = descriptions[Math.floor(Math.random() * Math.floor(descriptions.length))];
      const room = {
        name,
        description,
        type: 'private',
        quantity: 2,
        hostel_id: i,
      };
      connection.query(`INSERT INTO rooms (name, description, type, hostel_id, quantity) VALUES ('${room.name}', '${room.description}', '${room.type}', '${room.hostel_id}', '${room.quantity}')`);
    }

    for (let d = 0; d < dormRooms.length; d += 1) {
      const name = dormRooms[d];
      const description = descriptions[Math.floor(Math.random() * Math.floor(descriptions.length))];
      const room = {
        name,
        description,
        type: 'dorm',
        quantity: 2,
        hostel_id: i,
      };
      connection.query(`INSERT INTO rooms (name, description, type, hostel_id, quantity) VALUES ('${room.name}', '${room.description}', '${room.type}', '${room.hostel_id}', '${room.quantity}')`);
    }
  }
  connection.end();
}, 2000);
