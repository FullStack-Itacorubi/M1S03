
var veiculos = localStorage.getItem()


var modelos = [
    {
        nome: 'Uno',
        marca: {
            nome: 'Fiat'
        }
    }
];

var veiculo = [
    {
        modelo: 'Uno',
        marca: 'Fiat'
    }
];

function listaVeiculos() {
    var objetos = [];
    for (const veiculo of veiculos) {
      var obj = {
        marca: veiculo.marca,
        modelo: veiculo.modelo,
        foiVendido: veiculo.foiVendido ? true : false
      }

      objetos.push(obj);
    }

    return objetos;
}

console.log(listaVeiculos());