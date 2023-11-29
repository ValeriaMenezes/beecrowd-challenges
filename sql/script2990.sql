-- Beecrowd 2990 - CPF Dos Empregados

SELECT emp.cpf, emp.enome, dep.dnome
FROM empregados as emp
INNER JOIN departamentos as dep
ON emp.dnumero = dep.dnumero
WHERE emp.cpf_supervisor IS NULL
ORDER BY emp.cpf;
