CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    user_id INT,
    product VARCHAR(50)
);

INSERT INTO users VALUES
(1,'Ishu'),
(2,'Raghu'),
(3,'Ramu');

INSERT INTO orders VALUES
(101,1,'Laptop'),
(102,1,'Mobile'),
(103,2,'Keyboard');

SELECT *
FROM users
INNER JOIN orders
ON users.id = orders.user_id;

SELECT *
FROM users
LEFT JOIN orders
ON users.id = orders.user_id;

SELECT *
FROM users
RIGHT JOIN orders
ON users.id = orders.user_id;