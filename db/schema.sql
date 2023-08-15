DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;
SHOW TABLES; 
SELECT DATABASE();
CREATE TABLE department(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL
);
SHOW TABLES;

INSERT INTO department(name)
VALUES ("Finance"),
("Lead Engineer"),
("HR"),
("Legal");
SELECT * FROM department;

CREATE TABLE role(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT 
);

CREATE TABLE employee(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT 
);
SHOW TABLES;

INSERT INTO department(name)
VALUES ("Sales");

INSERT INTO role(title)
VALUES ("Sales Lead"),
("Salesperson"),
("Lead Engineer"),
("Software Engineer"),
("Account Manager"),
("Accountant"),
("Legal Team Lead");

SHOW TABLES;

SELECT * FROM role;