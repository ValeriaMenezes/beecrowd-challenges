--- Beecrowd 2620 - Pedidos no Primeiro Semestre

SELECT c.name, o.id FROM customers as c
INNER JOIN orders as o
ON o.id_customers = c.id
WHERE o.orders_date BETWEEN '2016-01-01' AND '2016-06-30';
