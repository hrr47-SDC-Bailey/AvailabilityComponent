const express = require('express');
const query = require('./database/query.js');
const app = express();



app.get('/api/hostel', function (req, res) {
  query.getHostels()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(400).send('something went wrong');
    });
});

app.listen(3000);