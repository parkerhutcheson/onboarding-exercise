-- 1.) 10 most recently onboarded customers (using descending order of created_at)
SELECT * FROM customers
ORDER BY created_at DESC
LIMIT 10;

-- 2.) Filter all customers with emails from @gmail.com
SELECT * FROM customers
WHERE email LIKE '%@gmail.com';

-- 3.) Customers created each month in 2025
SELECT MONTH(created_at) AS month, COUNT(*) AS total -- counts the number of customers in a month, assigned variable "month"
FROM customers
WHERE YEAR(created_at) = 2025
GROUP BY month
ORDER BY month;

-- 4.) Find duplicate email addresses
SELECT email, COUNT(*) AS total -- count occurrences
FROM customers
GROUP BY email
HAVING COUNT(*) > 1; -- having filters after grouping

-- 5.) All customers whose first name starts with "A"
SELECT * FROM customers
WHERE first_name LIKE 'A%';