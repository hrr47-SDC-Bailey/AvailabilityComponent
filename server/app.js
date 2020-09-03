const express = require('express');
const query = require('./database/query.js');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/hostels/:hostelId', express.static('public'));



app.get('/api/hostel/:hostelId', (req, res) => {
  const id = req.params.hostelId;
  if(!Number.isNaN(Number(id))) {
    query.getRoomById(id)
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


app.put('/api/hostel/:hostelId', (req, res) => {
  query.updateRoomById(req.body, (error, updatedRoom) => {
    if (error) {
      res.status(502).send();
    } else {
      res.send('ROOM UPDATED')
    }
  })
});

app.post('/api/hostel/:hostelId', (req, res) => {
  query.createRoom(req.body, (error, newRoom) => {
    if (error) {
      res.status(502).send();
    } else {
      res.send('New Room Created');
    }
  })
})

app.delete('/api/hostel/:hostelId', (req, res) => {
  query.deleteRoom(req.body.id, (error, deletedRoom) => {
    if (error) {
      res.status(502).send();
    } else {
      res.send('Room Deleted')
    }
  })
})


app.listen(3009);
