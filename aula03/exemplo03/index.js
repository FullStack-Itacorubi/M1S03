var listaDePessoas = [];

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
    }
};

var pessoa2 = {
    nome: 'Joaquim',
    idade: 60,
    pets: {
        cachorro: {
            nome: 'Mamuti'
        }
    }
}

listaDePessoas.push(pessoa)
listaDePessoas.push(pessoa2)

localStorage.setItem('PESSOA', JSON.stringify(pessoa))
localStorage.setItem('LISTA_PESSOAS', JSON.stringify(listaDePessoas))

// getItem

// console.log(localStorage.getItem('LISTA_PESSOAS'));
// console.log(typeof localStorage.getItem('LISTA_PESSOAS'));

var pessoasBuscadas = localStorage.getItem('LISTA_PESSOAS');

var pessoasObj = JSON.parse(pessoasBuscadas);

// for (const pessoa of pessoasObj) {
//     console.log('Pessoa com nome: ', pessoa.nome);
// }


// recuperar elementos

var removeUmaPessoa = document.querySelector('#btn-remove-pessoa');
var removePessoas = document.querySelector('#btn-remove-pessoas');
var removeTudo = document.querySelector('#btn-remove-tudo');

removeUmaPessoa.addEventListener('click', removerUmaPessoa)
removePessoas.addEventListener('click', removerPessoas)
removeTudo.addEventListener('click', removerTudo)


function removerUmaPessoa() {
    localStorage.removeItem('PESSOA');
}

function removerPessoas() {
    localStorage.removeItem('LISTA_PESSOAS');
}

function removerTudo() {
    localStorage.clear();
}



// console.log(localStorage.getItem('teste'));
// console.log(typeof localStorage.getItem('teste'));

// console.log(localStorage.getItem('teste2'));
// console.log(typeof localStorage.getItem('teste2'));

// console.log(localStorage.getItem('PESSOA'));
// console.log(typeof localStorage.getItem('PESSOA'));

// var pessoaObjeto = JSON.parse(localStorage.getItem('PESSOA'));
// console.log(pessoaObjeto);

// var testeObjeto = JSON.parse(localStorage.getItem('teste'));
// console.log(testeObjeto);

// var teste2Objeto = JSON.parse();
// console.log(teste2Objeto);