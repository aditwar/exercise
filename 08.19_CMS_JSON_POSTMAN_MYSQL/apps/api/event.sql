CREATE DATABASE event_commerce;

USE event_commerce;

CREATE TABLE event_commerce (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    nominal FLOAT(10, 2) NOT NULL,
    type ENUM("income", "expense") NOT NULL,
    category ENUM("food", "transport", "salary") NOT NULL
);

SHOW TABLES;

ALTER TABLE event_commerce
ADD date DATE NOT NULL;

ALTER TABLE event_commerce
MODIFY COLUMN category ENUM("food", "transport", "salary") NOT NULL;

INSERT INTO event_commerce(title, type, category, nominal, date)
VALUES
	('Breakfast', 'expense', 'food', 25000, '2025-05-03'),
    ('Beli Oli', 'expense', 'transport', 60000, '2025-04-10');

UPDATE event_commerce SET title = "Service Motor", nominal = 50000 WHERE id = 14;

UPDATE event_commerce SET title = "Beli Bensin", nominal = 15000, date = "2024-08-10" WHERE id = 2;

DELETE FROM event_commerce WHERE id = 2;

SELECT * FROM event_commerce;

SELECT * FROM event_commerce WHERE id = 2;

SELECT * FROM event_commerce ORDER BY nominal ASC;

SELECT * FROM event_commerce ORDER BY nominal DESC LIMIT 5;

SELECT * FROM event_commerce LIMIT 2 OFFSET 2;

SELECT * FROM event_commerce WHERE category = "food" AND nominal > 10000;

SELECT * FROM event_commerce WHERE type = "expense" AND nominal > (
SELECT avg(nominal) FROM event_commerce WHERE type = "expense");

SELECT id, title, nominal FROM event_commerce;

SELECT category, count(id) as total FROM event_commerce GROUP BY category HAVING total > 2;

SELECT type, max(nominal) FROM event_commerce GROUP BY type;

SELECT type, avg(nominal) FROM event_commerce WHERE type = "expense";

SELECT DISTINCT title FROM event_commerce;





