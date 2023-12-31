-- Beecrowd 2737 - Advogados


SELECT name, customers_number FROM lawyers
WHERE customers_number = (SELECT MAX(customers_number) FROM lawyers)
UNION
SELECT name, customers_number FROM lawyers
WHERE customers_number = (SELECT MIN(customers_number) FROM lawyers)
UNION ALL
SELECT 'Average', ROUND(AVG(customers_number), 0) AS customers_number
FROM lawyers;
