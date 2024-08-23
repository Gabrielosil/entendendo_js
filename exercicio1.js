/*
Informe se um aluno está aprovado,
de recuperação ou reprovado
seguindo os seguintes critérios:
informar 3 notas
media > 6: aprovado.
Media < 4: reprovado.

obs use o prompt e exiba os resultado em alert.

*/

let nome1 = "";
let nota1, nota2, nota3 = 0;
const quantidadeProvas = 3;

nome1 = prompt("Digite o Nome do Aluno");
nota1 = parseFloat(prompt("Digite a Nota 1 do Aluno"));
nota2 = parseFloat(prompt("Digite a Nota 2 do Aluno"));
nota3 = parseFloat(prompt("DIgite a Nota 3 do Aluno"));

let media1 = 0;
media1 = (nota1 + nota2 + nota3) / quantidadeProvas

if (media1>6) { mensagem = nome1 + ", Está Aprovado"} 
else if (media1<4) { mensagem = nome1 + ", Reprovado"}
else if (media1=6,5,4) { mensagem = nome1 + ", Está em Recuperação"};

alert(mensagem);