let numero1 = parseFloat(prompt("Digite o Primeiro Número"));
let numero2 = parseFloat(prompt("Digite o Segundo Número"));
let numero3 = parseFloat(prompt("Digite o Terceiro Número"));

if (numero1 >= numero2 && numero1 >= numero3) {
    mensagem = "O Maior número é o " + numero1 + "."; 
}

else if (numero2 >= numero1 && numero2 >= numero3) {
    mensagem = "O Maior número é o " + numero2 + "."
}

else {
    mensagem = "O Maior número é o " + numero3 + "."
}

alert(mensagem)