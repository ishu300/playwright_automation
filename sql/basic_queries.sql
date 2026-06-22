CREATE DATABASE qa_practice;

USE qa_practice;

CREATE TABLE employees (
    id INT,
    name VARCHAR(50),
    salary INT,
    emp_id INT,
    PRIMARY KEY(id, emp_id)
);

INSERT INTO employees VALUES (1,'Raghu',100000,101);
INSERT INTO employees VALUES (2,'Ramu',200000,102);
INSERT INTO employees VALUES (3,'Ishu',150000,103);

SELECT * FROM employees;

SELECT name,salary FROM employees;

SELECT * FROM employees
WHERE salary > 100000;

SELECT * FROM employees
ORDER BY salary DESC;

SELECT * FROM employees
ORDER BY salary ASC;

SELECT * FROM employees
LIMIT 2;