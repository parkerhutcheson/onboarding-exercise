-- 1.) 10 most recently onboarded customers (using descending order of created_at)
SELECT * FROM customers
ORDER BY created_at DESC
LIMIT 10;

-- 2.) Filter all customers with emails from @gmail.com
SELECT * FROM customers
WHERE email LIKE '%@gmail.com';