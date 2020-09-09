CREATE DATABASE IF NOT EXISTS hostels;

USE hostels;

DROP TABLE IF EXISTS hostels;

create table rooms (
  hostel_id integer NOT NULL,
  room_id integer NOT NULL,
  name text NOT NULL,
  description text NOT NULL,
  type text NOT NULL,
  quantity integer NOT NULL
);







