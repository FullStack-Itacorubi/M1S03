// Crie uma função que recebe um array de números e retorna a quantidade de números pares e a quantidade de números ímpares. Em seguida imprima na tela uma string informando a quantidade de valores informados, a quantidade de ímpares e de pares.
// (ex: A quantidade informada foi _____, a de valores pares foi ___ e a de valores ímpares foi __)


function verificarNumerosParesImpares(...numeros) {
    let qtdPares = 0;
    let qtdImpares = 0;
    
    for (let numero of numeros) {
        if (numero % 2 == 0) 
            qtdPares++;
         else 
            qtdImpares++;
    }

    return `A quantidade informada foi ${numeros.length} numeros, a de valores pares foi ${qtdPares} e a de valores ímpares foi ${qtdImpares}`;
}

console.log(verificarNumerosParesImpares(1, 10, 5, 2, 3));