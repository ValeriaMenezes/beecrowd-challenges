-- Beccrowd 2743 - Quantidade de Caracteres

SELECT name, length(name) as length_name FROM people as p
ORDER BY length_name desc;
