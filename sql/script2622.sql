--- Beecrowd 2622 - Pessoas Jurídicas

SELECT c.name FROM customers as c
INNER JOIN legal_person as lp
ON c.id = lp.id_customers;
