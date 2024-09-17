/*Ex5: Crie um algoritmo usando funções que leia até 50 números inteiros e 
armazene-os numa lista de números, considere as premissas abaixo:
• Não pode informar letras, palavras ou vazio. Alerte-o do erro e repita a leitura.
• Não pode informar números negativos. Alerte-o do erro e repita a leitura.
• Crie um menu que o usuário escolha cadastrar 5, 15, 25 ou 50.
• Ao final do cadastro ele tem um outro menu pra escolher exibir:  1 - A lista cadastrada, 2- somente os pares, 3- somente os impares.*/

let numeros = [];

function menuCadastro() {
    let quantidade;
    while (true) {
        let opcao = prompt(`Quantos números você deseja cadastrar?
        1 - 5
        2 - 15
        3 - 25
        4 - 50`);
        if (opcao === "1") {
            quantidade = 5;
            break;
        } else if (opcao === "2") {
            quantidade = 15;
            break;
        } else if (opcao === "3") {
            quantidade = 25;
            break;
        } else if (opcao === "4") {
            quantidade = 50;
            break;
        } else {
            alert("Opção Inválida. Por favor, escolha novamente.");
        }
    }
    return quantidade;
}

function lerNumero() {
    while (true) {
        let numero = prompt("Informe um número inteiro:");
        if (numero !== null && numero.trim() !== "" && !isNaN(numero) && parseInt(numero) >= 0) {
            return parseInt(numero);
        } else {
            alert("Entrada inválida. Por favor, informe um número inteiro positivo.");
        }
    }
}

function cadastrarNumeros(quantidade) {
    for (let i = 0; i < quantidade; i++) {
        let numero = lerNumero();
        numeros.push(numero);
    }
}

function menuExibir() {
    while (true) {
        let opcao = prompt(`Como você deseja exibir os números cadastrados?
        1 - A lista cadastrada
        2 - Somente os pares
        3 - Somente os ímpares`);
        if (opcao === "1") {
            exibirLista(numeros);
            break;
        } else if (opcao === "2") {
            exibirLista(numeros.filter(num => num % 2 === 0));
            break;
        } else if (opcao === "3") {
            exibirLista(numeros.filter(num => num % 2 !== 0));
            break;
        } else {
            alert("Opção Inválida. Por favor, escolha novamente.");
        }
    }
}

function exibirLista(lista) {
    let resultado = "<h2>Lista de Números:</h2><ul>";
    for (let num of lista) {
        resultado += `<li>${num}</li>`;
    }
    resultado += "</ul>";
    document.write(resultado);
}

let quantidade = menuCadastro();
cadastrarNumeros(quantidade);
menuExibir();
