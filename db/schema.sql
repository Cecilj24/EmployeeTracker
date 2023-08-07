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
CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT 
);
SHOW TABLES;
INSERT INTO department(id, name)
VALUES
(001, "Sales"),
(002, "Engineering"),
(003, "Finance"),
(004, "Legal"),
(005, "Human Resources");

INSERT INTO role (id, title, salary, department_id)
VALUES 
(001, Sales Lead, 100000, 001),
(002, Sales Person, 80000, 001),
(003, Lead Engineer, 150000, 002),
(004, Software Engineer, 120000, 002)
(005, Account Manager, 160000, 003),
(006, Accountant, 130000, 003),
(007, Legal Team Lead, 200000, 004),
(008, Lawyer, 170000, 004);
