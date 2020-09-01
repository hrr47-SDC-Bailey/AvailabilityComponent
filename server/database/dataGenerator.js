const faker = require('faker');
const fs = require('fs');

const writeStream = fs.createWriteStream('./Data.csv');

const currencies = ['CNY', 'EUR', 'GBP', 'USD', 'CAD'];

const privateRooms = ['Standard Twin Private Ensuite', 'Basic Double Bed Private Ensuite', 'Deluxe Double Bed Private Ensuite', 'Standard 3 Bed Family Room Ensuite'];

const dormRooms = ['Standard 6 Bed Female Dorm', 'Superior 2 Bed Female Dorm', 'Standard 8 Bed Male Dorm'];
const createHostel = () => {
  let hostelName = faker.commerce.productName();
  let currency = currencies[Math.floor(Math.random() * 5)];
  let rooms = '';
  for (var j = 0; j < privateRooms.length; j++) {
    let roomName = privateRooms[j];
    let description = faker.lorem.sentence();
    let type = 'private';
    let quantity = '2,';
    rooms += `${roomName},${description},${type},${quantity}`;
  }
  for (var k = 0; k < dormRooms.length; k++) {
    let dormName = dormRooms[k];
    let dormDescription = faker.lorem.sentence();
    let dormType = 'dorm';
    let dormQuantity;
    if (k === dormRooms.length - 1) {
      dormQuantity = '2';
    } else {
      dormQuantity = '2,';
    }
    rooms += `${dormName},${dormDescription},${dormType},${dormQuantity}`;
  }
  return `${hostelName},${currency},${rooms}\n`;
}

const start = new Date();

const createOneMillionHostels = (writer, encoding, done) => {
  let i = 10;

  let id = 0;
  function writing() {
    let canWrite = true;
    do {
      i--;
      id++;
      let hostel = id;
      hostel += ',' + createHostel();
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

writeStream.write(`hostel_id,hostel_name,currency,room_one_name,room_one_description,room_one_type,room_one_quantity,room_two_name,room_two_description,room_two_type,room_two_quantity,room_three_name,room_three_description,room_three_type,room_three_quantity,room_four_name,room_four_description,room_four_type,room_four_quantity,room_five_name,room_five_description,room_five_type,room_five_quantity,room_six_name,room_six_description,room_six_type,room_six_quantity,room_seven_name,room_seven_description,room_seven_type,room_seven_quantity,\n`);
createOneMillionHostels(writeStream, 'utf-8', () => {
  writeStream.end();
})


