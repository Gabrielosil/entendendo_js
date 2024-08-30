let continuar = "S";
do {
    let num = parseInt(prompt("Informe sua tabuada!"));
    let stringTab = "";
    for (let i = 1; i <= 10; i++) {
        stringTab += `${num} X ${i} = ${num * i} \n`;
    }
    alert(stringTab);
    continuar = prompt("Você deseja gerar outra Tabuada? S=Sim e N=Não")

} while (continuar == "S");
