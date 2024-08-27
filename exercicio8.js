let nome_do_produto = prompt("Informe o nome do produto: ");
let preço_do_produto = parseFloat(prompt("Informe o Preço do Produto: "));

let nome_do_produto2 = prompt("Informe o nome do produto: ");
let preço_do_produto2 = parseFloat(prompt("Informe o Preço do Produto: "));

let nome_do_produto3 = prompt("Informe o nome do produto: ");
let preço_do_produto3 = parseFloat(prompt("Informe o Preço do Produto: "));

if (preço_do_produto <= preço_do_produto2 && preço_do_produto <= preço_do_produto3) {
    mensagem = "O produto mais barato é (a/o) " + nome_do_produto + " , Custando " + preço_do_produto
}

else if (preço_do_produto2 <= preço_do_produto && preço_do_produto2 <= preço_do_produto3) {
    mensagem = "O produto mais barato é (a/o) " + nome_do_produto2 + " , Custando " + preço_do_produto2
}

else {
    mensagem = "O produto mais barato é (a/o) " + nome_do_produto3 + " , Custando " + preço_do_produto3
}

alert(mensagem)