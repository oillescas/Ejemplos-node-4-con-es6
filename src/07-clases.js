"use strict";
class Punto {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `(${this.x}, ${this.y})`;
  }
}

var p = new Punto(25, 8);
console.log(p.toString()); //(25, 8)


//consultamos su tipo
console.log(typeof Punto);


//Punto();


/******/
class PuntoColor extends Punto {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return `Punto dibujado en coordenadas ${super.toString()} de color ${this.color}`;
    }
}

var cp = new PuntoColor(25, 8, 'verde');
console.log(cp.toString()); // (25, 8) de color verde
console.log(cp instanceof PuntoColor) // true
console.log(cp instanceof Punto) // true


/******/