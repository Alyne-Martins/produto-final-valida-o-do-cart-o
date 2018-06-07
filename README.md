1. Abre um prompt para o usuário digitar os numeros do cartão;

2. Se o usuário não digitar nada abre um alert avisando para digitar os numeros do cartão;

3. Se não, Recebe os dígitos do cartão de crédito digitados pelo usuário;

4. Passa os dígitos para um array;

5. chama a função turnIntoIntegers passando o array com os digitos como parâmetro;

6. A função pega cada dígitos dentro da array que está como string e converte para Inteiros e o retorna;

7. Os digitos da array são invertidos;

8. chama a função multiplyingAndAdding e passa o array como parâmetro;

9. O primeiro FOR passa por cada dígito da array que está na posição par e multiplica por 2 armazenando o resultado em uma variável;

10. Se o resultado for maior que 9 é subtraido 9 e armazenado o resultado na variável evenPosition, sempre somando com o valor que já tem lá armazenado;

11.Se não for maior que nove ele também armazena o resultado na variável evenPosition somando com o valor que já tem lá armazenado;

12. O segundo FOR passa por cada dígito da array que está na posição ímpar e armazena na variável oddPosition somando cada um;

13. Na sequencia retorna o resultado da soma da variável evenPosition com oddPosition;

14. Se o resultado for divisível por 10, informa que o cartão é válido;

15. Senão informa que o cartão é inválido;


![fluxograma](../fluxograma.jpeg)