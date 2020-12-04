CREATE DATABASE trulia;

USE trulia;


CREATE TABLE listings (
  listing_id INT NOT NULL AUTO_INCREMENT,
  posted date NOT NULL,
  sale BOOLEAN NOT NULL,
  pending BOOLEAN NOT NULL,
  construction BOOLEAN NOT NULL,
  homeAddress VARCHAR(100) NOT NULL,
  price INT NOT NULL,
  beds INT NOT NULL,
  baths INT NOT NULL,
  user_id INT,
  PRIMARY KEY ( listing_id ),
  FOREIGN KEY ( user_id ) REFERENCES users( user_id )
);

CREATE TABLE images (
  image_id INT NOT NULL AUTO_INCREMENT,
  image_url VARCHAR (100) NOT NULL,
  listing_id INT,
  PRIMARY KEY ( image_id ),
  FOREIGN KEY ( listing_id ) REFERENCES listings( listing_id )
);

CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR (50) NOT NULL,
  listing_id INT,
  PRIMARY KEY ( image_id ),
);

/* 100,000 - 1M users */

/* remoce foreign key constraints, add after seeding */
