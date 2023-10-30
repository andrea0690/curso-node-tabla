console.clear();


// let producto = 0;

// for (let i = 1; i <= 10; i++) {
//     producto = i * 5
//     console.log('5' + 'x' + i + '=' + producto)

// }

// const fs = require('fs');
// const base = 3;
const { crearArchivo } = require('./helpers/multiplicar');

const argv = require('./helpers/config/yargs');


console.log(argv);


// const [, , arg3 = 'base=5'] = process.argv
// const [, base = 5] = arg3.split('=')
// console.log(base);


crearArchivo(argv)
    .then((nombreArchivo) => console.log(nombreArchivo, 'creado'))
    .catch((err) => {
        console.log('ERROR RECIBIDO: ', err)
    })


