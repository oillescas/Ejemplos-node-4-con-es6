"use strict";

var languages = ['España', 'Francia', 'Alemania'];

// Pollutes global namespace. Ew!
for (var i = 0; i < languages.length; i += 1) {
    console.log(1, `${languages[i]} es un pais de la union europea.`);
}

console.log(i); // 3


const lorem = `Lorem ipsum dolor sit amet,
consectetur adipisicing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.
Ut enim ad minim veniam,
quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in
voluptate velit esse cillum dolore eu fugiat
nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum. `;

console.log(lorem);
