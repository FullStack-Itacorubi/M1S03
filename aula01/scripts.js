// function mostrarAlunos(professor1, professor2, ...args) {
//     console.log(`Docente ${professor1}`);
//     console.log(`Docente ${professor2}`);
//     console.log('Alunos são: ', args);

//     for (const aluno of args) {
//         console.log(aluno);  
//     }
// }

// mostrarAlunos('Kelvis', 'Dani', 'aluno1', 'aluno2', 'aluno3');


// const alunos = function() {
//     console.log(arguments);
//     for (const aluno of arguments) {
//         console.log(aluno);  
//     }
// }

// alunos('Kelvis', 'Dani');


// Arrow Function
const alunosAF = (professor1, ...alunos) => {
    console.log(aluno);  

    for (let index = 0; index < alunos.length; index++) {
        console.log(aluno[i]);  
    }


    for (let aluno of alunos) {
        console.log(aluno);  
    }


}

alunosAF('Kelvis', 'aluno1', 'aluno2');

const alunos = ['Kelvis', 'aluno1', 'aluno2'];
alunos.forEach((aluno) => console.log(aluno))


// function somaDoisValores(numero1 = 0, numero2 = 0) {
//     const resultadoDaSoma = numero1 + numero2; // 1 + 3 = 4
//     return resultadoDaSoma; 
// }

// console.log(somaDoisValores());
// console.log(somaDoisValores(1));
// console.log(somaDoisValores(1, 4));

const nome = 'Kelvis'

const pessoa = {
    nome: 'Kelvis',
    idade: 30
}

for (const key in nome) {
    console.log(key);
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
    // }
}