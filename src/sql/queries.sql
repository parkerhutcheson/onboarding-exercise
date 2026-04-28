-- 1.) 10 most recently onboarded customers (using descending order of created_at)
SELECT * FROM customers
ORDER BY created_at DESC
LIMIT 10;