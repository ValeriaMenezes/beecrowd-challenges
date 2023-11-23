/* Beecrowd 2611 - Filmes de Ação */

SELECT m.id, m.name FROM movies as m
INNER JOIN genres as g
ON m.id_genres = g.id
WHERE g.description like 'Action';
