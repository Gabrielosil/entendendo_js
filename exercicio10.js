let textoMenu =  `Qual operação você deseja fazer :
                  1 - Soma
                  2 - Subtração
                  3 - Multiplicação
                  4 - Divisão
                  5 - Potenciação
                  6 - Radiciação`

//Converte a string do campo digitando no prompt para numero inteiro
let operação_selecionada = prompt(textoMenu);
let operaçãonome;

switch (operação_selecionada) {
    case "1":
        operaçãonome = "Soma"
                let soma1 = parseFloat(prompt("Informe o Primeiro Numero:"))
                let soma2 = parseFloat(prompt("Informe o Segundo Numero:"))
        
                let resultado_soma = soma1 + soma2
        {
                mensagem = " O resultado da soma é: " + resultado_soma
        }
        
        break;
        
    case "2":
        operaçãonome = "Subtração"
                let Subtração1 = parseFloat(prompt("Informe o Primeiro Numero:"))
                let Subtração2 = parseFloat(prompt("Informe o Segundo Numero:"))
                
                let resultado_subtração = Subtração1 - Subtração2
        {
                mensagem = " O resultado da subtração é: " + resultado_subtração
        }
                
                break;
                
    case "3":
        operaçãonome = "Multiplicação"
                let Multiplicação1 = parseFloat(prompt("Informe o Primeiro Numero:"))
                let Multiplicação2 = parseFloat(prompt("Informe o Segundo Numero:"))

                let resultado_multiplicação = Multiplicação1 * Multiplicação2
        {
                mensagem = " O resultado da multiplicação é: " + resultado_multiplicação
        }
            break;
    case "4":
            operaçãonome = "Divisão"
            let Divisão1 = parseFloat(prompt("Informe o Primeiro Numero:"))
            let Divisão2 = parseFloat(prompt("Informe o Segundo Numero:"))
              if ( Divisão2 <=0 ) {
                mensagem = "Resultado idefinido "
              }

              let resultado_divisão = Divisão1 / Divisão2
        {
                mensagem = " O resultado da divisão é: " + resultado_divisão
        }
              break;
                
    case "5":
            operaçãonome = "Potenciação"
            let Potenciação1 = parseFloat(prompt("Informe o Primeiro Numero:"))
            let Potenciação2 = parseFloat(prompt("Informe o Segundo Numero:"))

            let resultado_potencioação = Potenciação1 ** Potenciação2
        {
                mensagem = " O resultado da potencição é: " + resultado_potencioação
        }
            break;
    case "6":
            operaçãonome = "Radiciação"
            let Radiciação1 = parseFloat(prompt("Informe o Primeiro Numero:"))
            let Radiciação2 = parseFloat(prompt("Informe o Segundo Numero:"))

            let resultado_Radiciação = Radiciação1 ** (1/Radiciação2)
        {
                mensagem = " O resultado da radiociação é: " + resultado_Radiciação
        }
            break;

    default:
            operaçãonome = "Operação Inexistente"
            break;
}

alert(mensagem)