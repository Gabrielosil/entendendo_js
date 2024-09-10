/*Você foi contratado para desenvolver o programa 
que monta a tabela de preços de pães, de 1 até 50 pães, 
a partir do preço do pão informado pelo usuário,
conforme o exemplo abaixo:
Preço do pão: R$ 0,25 unid.
1 = R$ 0,25  
2 = R$ 0,50 
...
50 = R$ 12,50*/

preco = parseFloat(prompt("Informe o valor do pão:"));
let tabString = `Preço do pão: R$ ${(preco).toFixed(2)} unid. <br>`;
for (let i = 1; i <= 50; i++) {
    tabString += `${i} = R$ ${(preco * i).toFixed(2)} <br>`;
}
document.write(tabString);