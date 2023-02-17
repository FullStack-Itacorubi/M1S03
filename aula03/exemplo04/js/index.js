var pessoasJSON = localStorage.getItem('FMT.PESSOAS')
var pessoas =  pessoasJSON ? JSON.parse(pessoasJSON) : [];

// if (pessoasJSON) {
//   pessoas = JSON.parse(pessoasJSON)
// } else {
//   pessoas = []
// }

// Cria estrutura para listagem
var divContainer = document.createElement('div');
var ulPessoas = document.createElement('ul');
divContainer.classList = 'container';
ulPessoas.classList = 'pessoas';

listarNaTela();


function listarNaTela() { 
  // Iterando e criando os elementos
  for (const nomePessoa of pessoas) {
    adicionarPessoaNoDOM(nomePessoa);
  }

  divContainer.appendChild(ulPessoas);

  // Listando no DOM
  var secaoListagem = document.getElementsByClassName('secao-listagem')[0];
  if (secaoListagem) {
    secaoListagem.appendChild(divContainer);  
  }
}

function adicionarPessoa() {
  const inputNome = document.getElementsByName('nome')[0];
  console.log(inputNome.value);

  if (inputNome.value == '') {
    alert('Campo não pode ser vazio!')
  } else {
    adicionarPessoaNoDOM(inputNome.value);
    pessoas.push(inputNome.value);
    localStorage.setItem('FMT.PESSOAS', JSON.stringify(pessoas));

    console.log(pessoas);
    alert('Pessoa cadastrada com sucesso!');
    inputNome.value = '';  
  }
}

function adicionarPessoaNoDOM(nome) {
  var liPessoa = document.createElement('li');
  liPessoa.classList = 'pessoa';
  liPessoa.innerText = nome;
  ulPessoas.appendChild(liPessoa);
}

function limparListagem() {
  localStorage.removeItem('FMT.PESSOAS');
  pessoas = [];
}