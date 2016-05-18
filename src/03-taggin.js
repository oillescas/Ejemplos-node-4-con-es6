"use strict";

const dictionary = {
  es: {
    'days ago': 'hace %{count} días'
  },
  en: {
    'days ago': '%{count} days ago'
  }
};

dictionary.de ={};
const i18n = function(strings, args) {
  const key = strings.join('').trim();
  return dictionary[culture][key].replace('%{count}', args);
};

let culture = 'es';
console.log(i18n`${8} days ago`);

culture = 'en';
console.log(i18n`${8} days ago`);

/*********/
console.log(`línea 1 de cadena de texto \n línea 2 de cadena de texto`);

console.log(String.raw`línea 1 de cadena de texto \n línea 2 de cadena de texto`);

/*********/