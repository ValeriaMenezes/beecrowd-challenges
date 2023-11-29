-- Beecrowd 2739 - Dia de Pagamento

SELECT name, CAST(EXTRACT(DAY FROM payday) AS INT) as day FROM loan;
