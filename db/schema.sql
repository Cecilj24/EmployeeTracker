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
VALUES ("Sales"),
("Engineering"),
("Finance"),
("Legal");

SELECT * from role;

INSERT INTO role(title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
("Sales Person", 90000, 1),
("Lead Engineer",150000, 2),
("Software Engineer",130000, 2),
("Account Manager",160000, 3),
("Accountant",130000, 3),
("Legal Team Lead",250000, 4),
("Lawyer",180000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Cecil", "John", 2, 1),
("Jacob", "Smith", 1, 1),
("Jonathan", "Doe", 1,2),
("Monica", "Sanchez", 2,2),
("Tom", "Leonard", 3,3),
("Devin", "Thomas", 3,3),
("Ashley", "Rodriguez", 4,4),
("Kevin", "Johnson", 4,4);

SELECT * from employee;

UPDATE employee SET employee;