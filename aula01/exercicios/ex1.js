

// Ex 1 - Crie uma função não nomeada que recebe um número e devolva uma string dizendo se é par ou ímpar.

const verificarParImpar = function(numero) {
    // processamento - calculo
    let resultado = '';

    if (numero % 2 == 0) {
        resultado = 'É par';
    } else {
        resultado = 'É ímpar';    
    }

    return resultado;
}

console.log(verificarParImpar(5));
console.log(verificarParImpar(7));
console.log(verificarParImpar(10));
