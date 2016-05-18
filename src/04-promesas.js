var promesa1 = new Promise((resolve, reject) => {
  setTimeout(() => { resolve('Primero'); }, 2000);
});

promesa1.then((result) => {
  console.log('La promesa 1 se resolvió ahora ');
}).catch((err) => {
  // rejection
});

/****/
var promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => { resolve('Segundo'); }, 1000);
});

/****/
Promise.race([promesa1, promesa2]).then((resolucion, res2) => {
  console.log('Ganó:', resolucion);
  console.log('Perdio:', res2);//res2 es undefined
});
/****/


/****/
Promise.all([promesa1, promesa2]).then(respuestas => {
    console.log('Se han resuelto todas las promesas ', respuestas);
});
/****/


/****/
var promesa3 = new Promise((resolve, reject) => {
  setTimeout(() => { reject('Tercero'); }, 1500);
});


promesa3.then(result=>console.log('Por aqui no pasa'));
promesa3.catch(err=>console.log(`Fallo la promesa ${err}`));
promesa3.catch(err=>console.log(`Fallo la promesa 3 ${err}`));
/****/


/****/
Promise.all([promesa1, promesa2, promesa3]).then(respuestas => {
    console.log('Se han resuelto todas las promesas ', respuestas);
}).catch((err)=>console.log('fallo una promesa', err));
/****/
/****/
Promise.race([promesa1, promesa2, promesa3]).then((resolucion, res2) => {
  console.log('Ganó o no:', resolucion);
}).catch(err=>console.log('la mas rapida a sido un error.... '));
/****/