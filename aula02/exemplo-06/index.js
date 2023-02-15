var pessoas =  ['João', 'Joaquim', 'Maria', 'Fernanda'];
window[pessoas] = pessoas;

// criar a div
var divContainer = document.createElement('div');
divContainer.classList = 'container';

// criar a ul
var ulPessoas = document.createElement('ul');
ulPessoas.classList = 'pessoas';

// Criar a estrutura de filho (nós filhos)
divContainer.appendChild(ulPessoas);

for (const nomePessoa of pessoas) {
  // criar a li * nPessoas
  adicionarPessoaNoDOM(nomePessoa);
}

console.log(divContainer);
var body = document.getElementsByTagName('body')[0];
body.appendChild(divContainer);

function adicionarPessoa() {
  const inputNome = document.getElementsByName('nome')[0];
  console.log(inputNome.value);

  if (inputNome.value == '') {
    alert('Campo não pode ser vazio!')
  } else {
    adicionarPessoaNoDOM(inputNome.value);
  }

  pessoas.push(inputNome.value);
  console.log(pessoas);
  inputNome.value = '';  
}

function adicionarPessoaNoDOM(nome) {
  var liPessoa = document.createElement('li');
  liPessoa.classList = 'pessoa';
  liPessoa.innerText = nome;
  ulPessoas.appendChild(liPessoa);
}