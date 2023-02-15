// Ex 2 Crie uma função nomeada que recebe um array de elementos, imprima cada um dos elementos e em seguida retorne a quantidade de elementos no array (seu tamanho).

function verificarQuantidadeDeElementos(elementos) {
    // let tamanho = 0;
    // for (const elemento of elementos) {
    //     tamanho++;
    // }

    // return tamanho;
    return elementos.length;
}

console.log(verificarQuantidadeDeElementos([10, 2, 3, 2]));