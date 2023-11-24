--- Beecrowd 2625 - Máscara de CPF

SELECT SUBSTRING(np.cpf FROM 1 for 3) || '.' ||
       SUBSTRING(np.cpf FROM 4 for 3) || '.' ||
       SUBSTRING(np.cpf FROM 7 for 3) || '-' ||
       SUBSTRING(np.cpf FROM 10 for 2)
FROM natural_person as np;
