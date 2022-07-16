CREATE DATABASE airbnb;
USE airbnb;

CREATE TABLE Users(
	id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    bio TEXT,
    country VARCHAR(2)
);

INSERT INTO Users (email,bio,country)
VALUES
	('hello@world.com','I love strangers renting from me in a loosley regulated fashion!','US'),
    ('hola@munda.com','bar','MX'),
    ('bonjour@monde.com','baz','FR');
    
CREATE INDEX email_index ON Users(email);

CREATE TABLE Rooms(
	id INT AUTO_INCREMENT,
    street VARCHAR(255),
    owner_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(owner_id) REFERENCES Users(id)
);

INSERT INTO Rooms (owner_id, street)
VALUES
	(1,'san diego sailboat'),
	(1,'nantucket cottage'),
    (1,'vail cabin'),
    (1,'sf cardboard box');
    
SELECT * FROM Users
JOIN Rooms ON Rooms.owner_id = Users.id;

CREATE TABLE Booking(
	id INT AUTO_INCREMENT,
    guest_id INT NOT NULL,
    room_id INT NOT NULL,
    check_in DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY(guest_id) REFERENCES Users(id),
    FOREIGN KEY(room_id) REFERENCES Rooms(id)
);

