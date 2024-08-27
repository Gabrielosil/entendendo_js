let textoMenu =  `Qual Turno você estuda:
                  M- Matutino
                  V- Vespertino
                  N- Noturno`

//Converte a string do campo digitando no prompt para numero inteiro
let turno_selecionado = prompt(textoMenu);
let turnonome;

switch (turno_selecionado) {
    case "M":
        turnonome = "Matutino"
        break;
    case "V":
        turnonome = "Vespertino"
        break;
    case "N":
        turnonome = "Noturno"
        break;
    default:
        turnonome = "Turno Inválido"
        break;
}
alert(`O dia escolhido foi: ${turnonome}`)
