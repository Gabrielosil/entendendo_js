let nome_do_usuario = (prompt("Digite o seu nome"));

let ganho_por_hora = parseFloat(prompt("Digite o Quanto você ganha por hora"));
let horas_trabalhadas = parseFloat(prompt("Digite suas horas trabalhadas"));
let renda_total = ganho_por_hora * horas_trabalhadas

let mensagem = nome_do_usuario + " Recebe " + renda_total + " de renda total por mês."

alert(mensagem)