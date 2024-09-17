/* Ex1: Crie uma função que lê um vetor de 5 números inteiros e mostre-os, considere 
que o usuário não pode informar letras, palavras ou vazio. Alerte-o do erro e repita a leitura caso ocorra.*/

function lerVetor() {
    let vetor = [];
    for (let i = 0; i < 5; i++) {
        let numero;
        do {
            numero = prompt(`Informe o ${i + 1}º número:`);
            if (numero === null || numero.trim() === "" || isNaN(numero)) {
                alert("Por favor, informe um número inteiro válido.");
            } else {
                vetor[i] = parseInt(numero, 10);
            }
        } while (numero === null || numero.trim() === "" || isNaN(numero));
    }
    return vetor;
}

function mostrarVetor(vetor) {
    alert(`Os números informados são: ${vetor.join(", ")}.`);
}

let NBA = lerVetor();
mostrarVetor(NBA);
