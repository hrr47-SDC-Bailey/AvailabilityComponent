const express = require('express');
const query = require('./database/query.js');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/api/hostel', (req, res) => {
  query.getHostels()
    .then((result) => {
      res.json(result);
    })
    .catch(() => {
      res.status(400).send('something went wrong');
    });
});

app.get('/api/hostel/:hostelId/rooms', (req, res) => {
  const id = req.params.hostelId;
  if (!Number.isNaN(Number(id))) {
    query.getRoomsByHostel(id)
      .then((result) => {
        res.json(result);
      })
      .catch(() => {
        res.status(400).send('something went wrong');
      });
  } else {
    res.send('Provide a numeric hostelId');
  }
});

app.get('/api/hostel/room/reservation', (req, res) => {
  res.send('endpoint under maintenance');
});

app.listen(3009);
