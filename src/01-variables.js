"use strict";


const API_NEWS = 'http://www.rtve.es/api/noticias.json'


console.log(API_NEWS);


//Esta linea lanza una excepción.  
//API_NEWS = 'http://www.rtve.es/api/noticias.json?size=60'


/******/
// Simple & Clean
for (let i = 0; i < 6; i += 1) {
    setTimeout(function() {
        console.log(1,"he esperado " + i + " segundos!");
    }, 1000 * i);
}
/****/
/****/

try {
    console.log(i); // Reference error
} catch (err) {
    console.log(`You got a ${err};`);
}

/******/
/** Totally dysfunctional */
for (var j = 0; j < 6; j += 1) {
        setTimeout(function() {
        console.log(2,"He esperado " + j + " segundos!");
    }, 1000 * j);
}

try {
    console.log(j); // Reference error
} catch (err) {
    console.log(`You got a ${err};`);
}
/****/



