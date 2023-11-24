--- Beecrowd 2623 - Categorias com Vários Produtos

SELECT p.name, c.name
FROM products as p
INNER JOIN categories as c
ON p.id_categories = c.id
WHERE p.amount > 100 AND p.id_categories in (1, 2, 3, 6, 9);
