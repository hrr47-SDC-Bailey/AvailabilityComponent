const faker = require('faker');
const fs = require('fs');

const writeStream = fs.createWriteStream('./hostelsData.csv');

const currencies = ['CNY', 'EUR', 'GBP', 'USD', 'CAD'];

const privateRooms = ['Standard Twin Private Ensuite', 'Basic Double Bed Private Ensuite', 'Deluxe Double Bed Private Ensuite', 'Standard 3 Bed Family Room Ensuite'];

const dormRooms = ['Standard 6 Bed Female Dorm', 'Superior 2 Bed Female Dorm', 'Standard 8 Bed Male Dorm'];
const createHostel = () => {
  let hostelName = faker.company.companyName();
  let currency = currencies[Math.floor(Math.random() * 5)];
  let rooms = '';
  for (var j = 0; j < privateRooms.length; j++) {
    let roomName = privateRooms[j];
    let description = faker.lorem.sentence();
    let type = 'private';
    let quantity = 2;
    rooms += `${roomName},${description},${type},${quantity}`;
  }
  for (var k = 0; k < dormRooms.length; k++) {
    roomName = dormRooms[k];
    description = faker.lorem.sentence();
    type = 'dorm';
    quantity = 2;
    rooms += `${roomName},${description},${type},${quantity}`;
  }
  return `${hostelName},${currency},${rooms}\n`;
}

const start = new Date();

const createOneMillionHostels = (writer, encoding, done) => {
  let i = 10000000;
  let id = 0;
  function writing() {
    let canWrite = true;
    do {
      i--;
      let hostel = createHostel();
      if (i === 0) {
        writer.write(hostel, encoding, done);
        const memoryUse = process.memoryUsage();
        const end = new Date() - start;
        console.log('Execution time: %dms', end);
        console.log(memoryUse);
      } else {
        writer.write(hostel, encoding);
      }
    } while (i > 0 && canWrite);
    if (i > 0 && !canWrite) {
      writer.once('drain', writing);
    }
  }
  writing();
}

writeStream.write(`hostelName,currency,roomName,description,type,quantity\n`)
createOneMillionHostels(writeStream, 'utf-8', () => {
  writeStream.end();
})