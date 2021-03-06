  require('newrelic');
  const express = require('express');
  const bodyParser = require('body-parser');
  const path = require('path');
  const cors = require('cors');
  const query = require('./database/query.js');


  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  app.use(cors());
  app.use(express.static(path.join(__dirname, '../public')));
  app.use('/hostels/:hostelId', express.static(path.join(__dirname, '../public')));


  app.get('/loaderio-6bece3f8967b4aa4619149db451b6bff/', (req, res) => {
    res.send('loaderio-6bece3f8967b4aa4619149db451b6bff');
  })


  app.get('/api/hostels/:hostelId/rooms', (req, res) => {
    const id = req.params.hostelId;
    query.getRoomById(id, (error, rooms) => {
      if (error) {
        res.send(error);
      } else {
        res.send(rooms);
      }
    })
  });


  app.put('/api/hostels/:hostelId/rooms', (req, res) => {
    query.updateRoomById(req.body, (error, updatedRoom) => {
      if (error) {
        res.status(502).send();
      } else {
        res.send('ROOM UPDATED')
      }
    })
  });

  app.post('/api/hostels/:hostelId/rooms', (req, res) => {
    query.createRoom(req.body, (error, newRoom) => {
      if (error) {
        res.status(502).send();
      } else {
        res.send('New Room Created');
      }
    })
  })

  app.delete('/api/hostels/:hostelId/rooms', (req, res) => {
    query.deleteRoom(req.body.id, (error, deletedRoom) => {
      if (error) {
        res.status(502).send();
      } else {
        res.send('Room Deleted')
      }
    })
  })
  const port = process.env.PORT || 3009;

  app.listen(port);
