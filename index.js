
const fs = require('fs');

fs.writeFile('./texto.txt', 'línea uno', function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Archivo creado');
    }
});
/*
const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log(os.freemem());
*/


/*
console.log(math);
const math = require('./math.js');

console.log(math.add(2,4));
console.log(math.substract(2,4));
console.log(math.multiply(2,4));
console.log(math.divide(2,4));
*/