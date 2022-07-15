CREATE DATABASE record_company;
USE record_company;

CREATE TABLE bands (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE albums (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  release_year INT,
  band_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (band_id) REFERENCES bands(id)
);

CREATE TABLE songs (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    length FLOAT NOT NULL,
    album_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY(album_id) REFERENCES albums(id)
);

INSERT INTO bands (name)
VALUES  ('Seventh Wonder'), 
		('Metallica'), 
		('The Ocean'),
		('Within Temptation'), 
		('Death'), 
		('Van Canto'), 
		('Dream Theater');
        
SELECT bands.name AS 'Band Name'
FROM bands;

SELECT * FROM albums
WHERE release_year IS NOT NULL
ORDER BY release_year
LIMIT 1;

SELECT DISTINCT bands.name AS 'Band Name' FROM bands
JOIN albums ON bands.id = albums.band_id;

SELECT bands.name AS 'Band Name'
FROM bands
LEFT JOIN albums ON bands.id = albums.band_id
GROUP BY albums.band_id
HAVING COUNT(albums.id) = 0;

SELECT  
	albums.name AS 'Name', 
	albums.release_year AS 'Release Year', 
	SUM(songs.length) AS 'Duration' 
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY songs.album_id
ORDER BY Duration DESC;

UPDATE albums
SET release_year = 1986
WHERE id = 4;

INSERT INTO bands (name)
VALUE ('Creepy Nuts');

INSERT INTO albums (name, release_year, band_id)
VALUE ('Staying Up Lullaby', 2019, 8);

DELETE FROM albums
WHERE band_id = 8;

DELETE FROM bands
WHERE id = 8;

SELECT AVG(songs.length) AS 'Average Song Duration'
FROM songs;

SELECT 
	albums.name AS 'Album',
    albums.release_year AS 'Release Year',
    MAX(songs.length) AS 'Duration'
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY songs.album_id;

SELECT bands.name AS 'Band', COUNT(songs.id) AS 'Number of Songs'
FROM bands
JOIN albums ON bands.id = albums.band_id
JOIN songs ON albums.id = songs.album_id
GROUP BY albums.band_id;
    


