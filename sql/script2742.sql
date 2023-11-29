-- Beecrowd 2742 - O Multiverso de Richard

SELECT lr.name, ROUND((lr.omega * 1.618), 3)
FROM life_registry as lr
INNER JOIN dimensions as d
ON d.id = lr.dimensions_id
WHERE lr.name like '%Richard%' and d.name in ('C774', 'C875');
