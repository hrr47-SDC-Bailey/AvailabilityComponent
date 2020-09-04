const faker = require('faker');
const fs = require('fs');

const writeStream = fs.createWriteStream('./roomsData.csv');

const currencies = ['CNY', 'EUR', 'GBP', 'USD', 'CAD'];

const privateRooms = ['Standard Twin Private Ensuite', 'Basic Double Bed Private Ensuite', 'Deluxe Double Bed Private Ensuite', 'Standard 3 Bed Family Room Ensuite'];

const dormRooms = ['Standard 6 Bed Female Dorm', 'Superior 2 Bed Female Dorm', 'Standard 8 Bed Male Dorm'];


const start = new Date();


const createOneMillionHostels = (writer, encoding, done) => {
  let i = 10000000;
  let id = 0;
  let room_id = 1;
  function writing() {
    let canWrite = true;
    do {
      i--;
      id++;
      let hostel = '';
      let hostelName = faker.commerce.productName();
      let currency = currencies[Math.floor(Math.random() * 5)];
      let rooms = '';
      for (var j = 0; j < privateRooms.length; j++) {
        let roomName = privateRooms[j];
        let description = faker.lorem.sentence();
        let type = 'private';
        let quantity = Math.floor(Math.random() * (6 -2) + 2);
        rooms += `${id},${room_id},${roomName},${description},${type},${quantity}\n`;
        room_id++;
      }
      for (var k = 0; k < dormRooms.length; k++) {
        let dormName = dormRooms[k];
        let dormDescription = faker.lorem.sentence();
        let dormType = 'dorm';
        let dormQuantity = Math.floor(Math.random() * (6 -2) + 2);
        rooms += `${id},${room_id},${dormName},${dormDescription},${dormType},${dormQuantity}\n`;
        room_id++;
      }
      room_id = 1;
      if (i === 0) {
        writer.write(rooms, encoding, done);
        const memoryUse = process.memoryUsage();
        const end = new Date() - start;
        console.log('Execution time: %dms', end);
        console.log(memoryUse);
      } else {
        writer.write(rooms, encoding);
      }
    } while (i > 0 && canWrite);
    if (i > 0 && !canWrite) {
      writer.once('drain', writing);
    }
  }
  writing();
}


writeStream.write(`hostel_id, room_id, name, description, type, quantity\n`);


createOneMillionHostels(writeStream, 'utf-8', () => {
  writeStream.end();
})



