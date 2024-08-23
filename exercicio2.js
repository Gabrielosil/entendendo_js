/* Solicite ao usuário um número de 1 a 7 e exiba em texto o dia da semana representado conforme abaixo.
1. Domingo
2. Segunda-Feira
3. Terça-Feira
4. Quarta-Feira
5. Quinta-Feira
6. Sexta-Feira
7. Sábado
*/

let numero = (1,2,3,4,5,6,7)

numero = (prompt("Informe o número do dia da Semana a exibir: "));
if (numero== 1) {alert(" Domingo")} 
else if (numero== 2) {alert(" Segunda-Feira")}
else if (numero== 3) {alert(" Terça-Feira")}
else if (numero== 4) {alert(" Quarta-Feira")}
else if (numero== 5) {alert(" Quinta-Feira")}
else if (numero== 6) {alert(" Sexta-Feira")}
else if (numero== 7) {alert(" Sábado")}
else {mensagem = "Não Reconhecido"};

alert(mensagem);