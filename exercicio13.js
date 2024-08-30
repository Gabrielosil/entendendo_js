/*Faça um algoritmo que leia um nome de usuário e sua senha.
A senha não pode ser igual ao nome do usuário,
uma mensagem de erro e entregando a pedir as informações. */
let usuario, senha = "";
do {
    usuario = prompt("Informe o nome do usuário:");
    senha = prompt("Informe a sua senha:");

    if (usuario == senha)
        alert("O usuário não pode ser igual a senha!!");

} while (usuario == senha);

alert("Cadastrado com sucesso!")

