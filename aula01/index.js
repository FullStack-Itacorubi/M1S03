// Funcao sem retorno
// function somarDoisNumeros(numero1, numero2) {
//     console.log(numero1 + numero2);
// }

// const resultado = somarDoisNumeros(1, 2);
// console.log(resultado);



// Funcao com retorno

// somarDoisNumeros
// somarDoisNumeros()
function somarDoisNumeros(numero1, numero2) {
    return numero1 + numero2;
}

const resultado = somarDoisNumeros(1, 2); // 3

console.log(resultado * 3);






const situacaoAluno1 = verificarAprovacao('Kelvis', 8);
const situacaoAluno2 = verificarAprovacao('Joaquim', 5);

console.log(situacaoAluno1, situacaoAluno2);

const verificarAprovacao = function(nome, nota) {
    if (nota >= 7) {
        return nome + ' foi aprovado';
    }

    return nome + ' foi reprovado'; // Kelvisfoi aprovado

    // asdsada
    // asdsadaasdsad
}

