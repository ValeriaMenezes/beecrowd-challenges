-- Beecrowd 2741 - Notas dos Alunos

SELECT CONCAT('Approved: ', name), grade FROM students
WHERE grade >= 7
ORDER BY grade DESC;
