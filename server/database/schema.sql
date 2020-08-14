CREATE DATABASE IF NOT EXISTS availability;

USE availability;

DROP TABLE IF EXISTS reservations;
DROP TABLE IF EXISTS rooms;
DROP TABLE IF EXISTS hostels;


CREATE TABLE IF NOT EXISTS hostels(
  id INT NOT NULL AUTO_INCREMENT,
  name TEXT,
  currency TEXT,
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS rooms(
  id INT NOT NULL AUTO_INCREMENT,
  name TEXT,
  description TEXT,
  type TEXT,
  quantity INT,
  hostel_id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(hostel_id) REFERENCES hostels(id)
);

CREATE TABLE IF NOT EXISTS reservations(
  hostel_id INT NOT NULL,
  room_id INT NOT NULL,
  date DATE,
  FOREIGN KEY (hostel_id) REFERENCES hostels(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
);