var botao = document.getElementById('botao-principal');
botao.addEventListener('click', mostrarAlerta);
botao.addEventListener('mouseover', alterarNome);
botao.addEventListener('mouseout', resetarNome);

function mostrarAlerta() {
    alert('Botão clicado')
}

function alterarNome() {
    var botao = document.getElementsByTagName('button')[0];
    botao.innerText = 'alterar nome do botao';
}

function resetarNome() {
    var botao = document.getElementsByTagName('button')[0];
    botao.innerText = 'Clicar aqui';
}