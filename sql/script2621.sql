--- Beecrowd 2621 - Quantidades Entre 10 e 20

SELECT p.name FROM products as p
INNER JOIN providers as pr
ON pr.id = p.id_providers
WHERE pr.name like 'P%' AND p.amount BETWEEN 10 AND 20;
