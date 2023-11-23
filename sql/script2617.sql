--- Beecrowd 2617 - Fornecedor Ajax SA

SELECT p.name, pr.name FROM products as p
INNER JOIN providers as pr
ON pr.id = p.id_providers
WHERE pr.name = 'Ajax SA';
