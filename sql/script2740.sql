-- Beecrowd 2740 - Liga

(SELECT CONCAT('Podium: ', team) as name FROM league
ORDER BY position asc limit 3)
UNION ALL
(SELECT CONCAT('Demoted: ', team) as name FROM league
WHERE position >= 14);

-- duas formas

(SELECT CONCAT('Podium: ', team) as name FROM league
ORDER BY position asc limit 3)
UNION ALL
(WITH demoted as (SELECT * FROM league ORDER BY position DESC LIMIT 2)
SELECT CONCAT('Demoted: ', team) as name FROM demoted ORDER BY position);
