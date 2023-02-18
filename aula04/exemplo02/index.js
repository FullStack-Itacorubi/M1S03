





var nome = 'Kelvis';
var nota = 8;
console.log('Ola Kelvis, sua nota foi 8');


console.log('Ola ' + nome + ', sua nota foi ' + nota); // 'Ola Kelvis'
console.log(`Ola ${nome}, sua nota foi ${nota}`); // 'Ola Kelvis'








                                // Execução externa
                                var tmtJoao = setTimeout(function() {
                                    console.log('João');
                                }, 5000);

// Execução normal principal
console.log('Fernando');

                                setTimeout(function() {
                                    console.log('José');
                                }, 3000);

console.log('Abreu');

                                 // <----------- Execução externa   
                           
                                setTimeout(function() {
                                    clearTimeout(tmtJoao);
                                }, 4000)

// console.log('José');
// console.log('João');