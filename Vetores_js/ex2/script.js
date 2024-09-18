let nomes = [];
let matriculas = [];
let materias = [];
let medias = [];
let notas = [];
let continuar = true;

function obterNome() {
    let nome = prompt("Informe o nome completo:");
    while (!nome || nome.split(' ').length < 2) {
        nome = prompt("Nome inválido. Informe o nome completo (nome e sobrenome):");
    }
    return nome;
}

function obterMatricula() {
    let matricula = prompt("Informe a matrícula (8 números):");
    while (!matricula || matricula.length !== 8 || isNaN(matricula)) {
        matricula = prompt("Matrícula inválida. Informe uma matrícula válida (8 números):");
    }
    return matricula;
}

function obterMateria() {
    let materia = prompt("Informe a matéria:");
    while (!materia) {
        materia = prompt("Matéria inválida. Informe uma matéria:");
    }
    return materia;
}

function obterNotas() {
    let notasAluno = [];
    for (let i = 1; i <= 3; i++) {
        let nota = parseFloat(prompt(`Informe a nota ${i}:`));
        while (isNaN(nota) || nota < 0 || nota > 10) {
            nota = parseFloat(prompt(`Nota inválida. Informe uma nota válida (entre 0 e 10) para a nota ${i}:`));
        }
        notasAluno.push(nota);
    }
    return notasAluno;
}

function entrar() {
    if (nomes.length < 100) {
        let nome = obterNome();
        let matricula = obterMatricula();
        let materia = obterMateria();
        let notasAluno = obterNotas();

        let media = (notasAluno[0] + notasAluno[1] + notasAluno[2]) / 3;

        nomes.push(nome);
        matriculas.push(matricula);
        materias.push(materia);
        medias.push(media.toFixed(2));
        notas.push(notasAluno);
    } else {
        alert("Limite de 100 alunos atingido.");
    }
}

function exibirCadastrados() {
    document.write("Lista de Alunos Cadastrados <br/><br/>");
    for (let i = 0; i < nomes.length; i++) {
        document.write(`Nome: ${nomes[i]}, <br/> Matrícula: ${matriculas[i]} , <br/> Matéria: ${materias[i]}, <br/> ` +
                       `Nota 1: ${notas[i][0].toFixed(2)} / Nota 2: ${notas[i][1].toFixed(2)} / Nota 3: ${notas[i][2].toFixed(2)} / ` +
                       `<br/> Média: ${medias[i]}<br/><br/>`);
    }
}

// Função para iniciar o cadastro
while (continuar) {
    entrar();
    let opcao = prompt("Deseja continuar cadastrando? (1 - Sim, 2 - Exibir)");
    if (opcao === "2") {
        if (nomes.length >= 5) {
            exibirCadastrados();
            continuar = false;
        } else {
            alert("Você deve cadastrar no mínimo 5 alunos.");
        }
    } else if (opcao !== "1") {
        alert("Opção Inválida");
    }
}
