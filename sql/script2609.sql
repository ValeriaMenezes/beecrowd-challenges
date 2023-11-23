/* Beecrowd 2609 - Produtos por Categorias */

SELECT c.name, sum(p.amount)
FROM categories as c
INNER JOIN products as p
ON p.id_categories = c.id
GROUP BY c.name;
