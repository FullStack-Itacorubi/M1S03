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

// console.log(pessoa);

// console.log(pessoa);
// console.log(typeof pessoa);

// console.log(JSON.stringify(pessoa));
// console.log(typeof JSON.stringify(pessoa));


// var pessoaJSON = JSON.stringify(pessoa);
// console.log(JSON.parse(pessoaJSON));
// console.log(typeof JSON.parse(pessoaJSON));


const marcasJSON = '{"marcas":[{"nome":"Fiat"},{"nome":"Volkswagen"},{"nome":"mercedes benz"}]}';
var obj = JSON.parse(marcasJSON);
var marcas = obj.marcas;
console.log(marcas);


const modelosJSON = '[{"nome":"Uno"},{"nome":"Gol"}]';
const modelos = JSON.parse(modelosJSON);
console.log(modelos);
