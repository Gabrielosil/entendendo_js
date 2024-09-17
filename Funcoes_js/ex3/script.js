function lerLetras() {
    let letras = [];
    let msgConsoantes = "";
    let msgVogais = "";
    let contVogais = 0;
    const vogais = ["A", "E", "I", "O", "U"];
    
    for (let i = 0; i < 10; i++) {
        let val = prompt("Informe a letra").toUpperCase();
        letras.push(val);
    }
    
    for (let letra of letras) {
        if (vogais.includes(letra)) {
            contVogais++;
            msgVogais += letra + "\n";
        } else {
            msgConsoantes += letra + "\n";
        }
    }
    
    alert("Consoantes:\n" + msgConsoantes + "Total de Vogais: " + contVogais);
    
}

lerLetras();
