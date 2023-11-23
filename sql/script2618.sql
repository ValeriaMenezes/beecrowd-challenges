--- Beecrowd 2618 - Produtos Importados

SELECT p.name, pr.name, c.name
FROM products as p
INNER JOIN providers as pr
ON p.id_providers = pr.id
INNER JOIN categories as c
ON p.id_categories = c.id
WHERE pr.name = 'Sansul SA' AND c.name = 'Imported';
