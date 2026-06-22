SELECT *
FROM employees
WHERE salary BETWEEN 100000 AND 200000;

SELECT *
FROM employees
WHERE name IN ('Ishu','Raghu');

SELECT *
FROM employees
WHERE name LIKE 'R%';

SELECT *
FROM employees
WHERE name LIKE '%u';

SELECT DISTINCT salary
FROM employees;

SELECT salary,COUNT(*)
FROM employees
GROUP BY salary;

SELECT salary,COUNT(*)
FROM employees
GROUP BY salary
HAVING COUNT(*) >= 1;