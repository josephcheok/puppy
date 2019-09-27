### Schema

CREATE DATABASE dogs_db;
USE dogs_db;

CREATE TABLE favedogs
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	pup TEXT,
	adult TEXT,
	smacked BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE dogbreed
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	pup TEXT,
	adult TEXT,
	PRIMARY KEY (id)
)