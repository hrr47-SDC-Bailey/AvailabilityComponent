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

// app.get('/api/hostel/:hostelId/rooms', (req, res) => {
//   const id = req.params.hostelId;
//   if (!Number.isNaN(Number(id))) {
//     query.getRoomsByHostel(id)
//       .then((result) => {
//         res.json(result);
//       })
//       .catch(() => {
//         res.status(400).send('something went wrong');
//       });
//   } else {
//     res.send('Provide a numeric hostelId');
//   }
// });

// app.get('/api/hostel', (req, res) => {
//   query.getHostels()
//     .then((result) => {
//       res.json(result);
//     })
//     .catch(() => {
//       res.status(400).send('something went wrong');
//     });
// });

// app.get('/api/hostel/room/reservation', (req, res) => {
//   res.send('endpoint under maintenance');
// });

// app.put('/api/hostel', (req, res) => {
//   query.updateHostel(req.body, (error, updatedHostel) => {
//     if (error) {
//       res.status(502).send();
//     } else {
//       res.send(updatedHostel);
//     }
//   });
// });

// app.put('/api/hostel/:hostelId/rooms', (req, res) => {
//   query.updateRoom(req.body, (error, updatedRoom) => {
//     if (error) {
//       res.status(502).send();
//     } else {
//       res.send(updatedRoom);
//     }
//   });
// });

// app.post('/api/hostel', (req, res) => {
//   query.createHostel(req.body, (error, newHostel) => {
//     if (error) {
//       res.status(502).send();
//     } else {
//       res.send(newHostel);
//     }
//   });
// });

// app.post('/api/hostel/:hostelId/rooms', (req, res) => {
//   query.createRoom(req.body, (error, newRoom) => {
//     if (error) {
//       res.status(502).send();
//     } else {
//       res.send(newRoom);
//     }
//   });
// });

// app.delete('/api/hostel', (req, res) => {
//   console.log(req.body.id);
//   query.deleteHostel(req.body, (error, deletedHostel) => {
//     if (error) {
//       res.status(502).send(error);
//     } else {
//       res.send(deletedHostel);
//     }
//   });
// });

// app.delete('/api/hostel/:hostelId/rooms', (req, res) => {
//   query.deleteRoom(req.body, (error, deletedRoom) => {
//     if (error) {
//       res.status(502).send(error);
//     } else {
//       res.send(deletedRoom);
//     }
//   });
// });


app.listen(3009);
