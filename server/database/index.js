
const { Pool, Client } = require('pg');
const credentials = require('./config.js');

module.exports.pool = new Pool({
  user: 'postgres',
  password: credentials.password,
  host: '54.219.24.217',
  database: 'hostels',
});


module.exports.client = new Client({
  user: 'postgres',
  password: credentials.password,
  host: '54.219.24.217',
  database: 'hostels',
});