/* Beecrowd 2605 - Representantes Executivos */

SELECT  p.name, pr.name
FROM products as p INNER JOIN providers as pr
ON p.id_providers = pr.id
WHERE p.id_categories = 6;
