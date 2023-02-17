// Objeto 
// Conjunto de propriedades

// nome, sobrenome, idade -> propriedades/atributos 
// andar, chorar, falar, comer -> comportamentos/acões

var pessoas = [];

var pessoa = {
    nome: 'Kelvis',
    idade: 50,
    pets: {
        cachorro: {
            nome: 'Panqueca'
        },
        gato: {
            nome: 'Sushi'
        }
    },
    falar: function (frase) {
        console.log('Estou falando ' + frase);
    }
}

console.log(pessoa.falar('algumas coisas'));
