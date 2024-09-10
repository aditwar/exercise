CREATE DATABASE db_sementara;
SHOW DATABASES;
USE db_sementara;
CREATE TABLE expense (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    type ENUM("income", "expense") NOT NULL,
    category ENUM("food", "transport", "sallary") NOT NULL,
    nominal FLOAT(10, 2) NOT NULL
);

SHOW TABLES;
ALTER TABLE expense
ADD date DATE NOT NULL;

INSERT INTO expense(title, type, category, nominal, date) VALUES('Beli Nasi Padang', 'expense', 'food', 20000, '2024-08-01');

INSERT INTO expense(title, type, category, nominal, date)
VALUES
	('Beli Bensin', 'expense', 'transport', 20000, '2024-08-05'),
    ('Gaji Bulan Juli', 'income', 'sallary', 200000, '2024-08-10');

SELECT * FROM expense