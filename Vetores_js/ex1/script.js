/*Ex1: Crie um sistema de cadastro de funcionários usando funções onde devem ser lidos os nomes, idades e salários de até 
100 pessoas considerando os seguintes critérios:

• Considere que o usuário não pode informar conteúdo vazio.
• Nomes completos válidos (nome e sobrenome). 
• Idades válidas e maiores de 14 anos e menores de 120 anos.
• Os salários informados devem ser válidos e não podem ser inferiores a R$ 2000,00 e acima de 20000,00.
• Deve-se cadastrar no mínimo 5 pessoas.
Exiba todos os cadastrados na página HTML.
*/

let nomes = [];
let idades = [];
let salarios = [];
let continuar = true;

function entrar() {
    if (nomes.length < 100) {
        let nome = prompt("Informe o nome completo:");
        while (!nome || nome.split(' ').length < 2) {
            nome = prompt("Nome inválido. Informe o nome completo (nome e sobrenome):");
        }

        let idade = parseInt(prompt("Informe a idade:"));
        while (isNaN(idade) || idade < 14 || idade > 120) {
            idade = parseInt(prompt("Idade inválida. Informe uma idade válida (entre 14 e 120 anos):"));
        }

        let salario = parseFloat(prompt("Informe o salário:"));
        while (isNaN(salario) || salario < 2000 || salario > 20000) {
            salario = parseFloat(prompt("Salário inválido. Informe um salário válido (entre R$ 2000,00 e R$ 20000,00):"));
        }

        nomes.push(nome);
        idades.push(idade);
        salarios.push(salario);
    } else {
        alert("Limite de 100 pessoas atingido.");
    }
}

function exibirCadastrados() {
    document.write("Lista de Funcionários Cadastrados <br/><br/>");
    for (let i = 0; i < nomes.length; i++) {
        document.write(`Nome: ${nomes[i]}, Idade: ${idades[i]}, Salário: R$ ${salarios[i].toFixed(2)}<br/>`);
    }
}

while (continuar) {
    entrar();
    let opcao = prompt("Deseja continuar cadastrando? (1 - Sim, 2 - Exibir)");
    if (opcao === "2") {
        if (nomes.length >= 5) {
            exibirCadastrados();
            continuar = false;
        } else {
            alert("Você deve cadastrar no mínimo 5 pessoas.");
        }
    } else if (opcao !== "1") {
        alert("Opção Inválida");
    }
}

