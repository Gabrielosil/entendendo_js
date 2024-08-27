let altura = 0 ;
let idade = 0 ;
idade = parseInt(prompt("Informe sua Idade: "));
altura = parseFloat(prompt("Informe sua altura: "));

if (altura >= 1.70) {
    mensagem = "Você pode andar na Montanha Russa"; 
}

else if (altura >= 1.60 && idade >= 18) {
    mensagem = "Você pode andar na Montanha Russa"; 
}
else {
    mensagem = "Você Não pode andar na Montanha Russa";
}

alert(mensagem)

