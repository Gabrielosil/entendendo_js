/*(celsius *9/5) + 32
(fahrenheit -32) * 5/9*/


let textoMenu =  `Escolha qual conversor de temperatura:
                  1 - de Celsius para Fahrenheit
                  2 - de Fahrenheit para Celsius
`
let conversor_temperatura = prompt(textoMenu);
let temperatura;

switch (conversor_temperatura) {
    case "1":
        temperatura = "de Celsius para Fahrenheit."
                let celsius = parseFloat(prompt("Informe a temperatura:"))
                let resultado_celsius = (celsius * 9/5) + 32

        {
                mensagem = " A temperatura é: " + resultado_celsius;
        }
        
        break;
    

    case "2":
        temperatura = "de Fahrenheit para Celsius."
                let fahrenheit = parseFloat(prompt("Informe a temperatura:"))
                let resultado_fahrenheit = (fahrenheit -32) * 5/9

        {
                mensagem = " A temperatura é: " + resultado_fahrenheit.toFixed(2);
        }
        
        break;
}
    alert(mensagem)