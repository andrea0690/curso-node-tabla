let argv = require('yargs')

argv = argv
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
    }).option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        demandOption: true,
    })
    .option('p', {
        alias: 'limite',
        type: 'number',
        demandOption: true,
        default: 10
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'la base tiene que ser un numero'
        }
        return true;
    }).argv;

module.exports = argv;
