const axios = require('axios');

let getRooms = function getRooms() {
  console.log('fetching data');
  return axios.get('http://localhost:3000/api/hostel/1/rooms');
};

exports.getRooms = getRooms;
