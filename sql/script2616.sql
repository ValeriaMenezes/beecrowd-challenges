/* Beecrowd 2616 - Nenhuma Locação */

SELECT c.id, c.name FROM customers as c
LEFT JOIN locations as l
ON c.id = l.id_customers
WHERE l.id_customers IS NULL;

 --- outra solução

SELECT c.id, c.name FROM customers as c
WHERE not exists (SELECT l.id_customers FROM locations as l
                  WHERE c.id = l.id_customers)