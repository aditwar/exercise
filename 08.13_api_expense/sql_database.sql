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
