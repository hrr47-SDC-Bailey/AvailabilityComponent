const express = require('express');
const query = require('./database/query.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/hostel', function (req, res) {
  query.getHostels()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(400).send('something went wrong');
    });
});

app.get('/api/hostel/room', function (req, res) {
  let id = req.body.hostelId;
  if (!isNaN(id)) {
    query.getRoomsByHostel(id)
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        res.status(400).send('something went wrong');
      });
  } else {
    res.send('Provide a numeric hostelId');
  }
});

app.get('/api/hostel/room/reservation', function (req, res) {
  res.send('endpoint under maintenance');
});


app.listen(3000);