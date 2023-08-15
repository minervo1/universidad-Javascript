//tipos de datos
console.log('---TIPOS DE DATOS---');

//en javascript las variables son dinamicas, pueden cambiar automaticamente su valor al redefinirlas

let nombre = 'nelson';
console.log(nombre);
nombre = 2;
console.log(typeof nombre); //podemos observar que paso de un string a un numero

let numero = 1000;
console.log(numero);

//objeto
let objeto = {
  nombre: 'nelson',
  apellido: 'rodriguez',
  telefono: '31232222',
};
console.log(objeto);

//booleano
let bandera = true;
console.log(bandera);
console.log(typeof bandera);

//segun el instructor las funciones son un tipo de dato
//tipo de funcion: declarativa
function miFuncion() {}
console.log(miFuncion);

//symbol
let simbolo = Symbol('mi simbolo');
console.log(typeof simbolo);

//clases
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
console.log(Persona);
console.log(typeof Persona);

//indefinido
let x;
console.log(x);
console.log(typeof x);

//null
let y = null;
console.log(y);
console.log(typeof y);

//arrays
let autos = ['chevrolet', 'suzuki', 'volvo'];
console.log(autos);
console.log(typeof autos);

//concatenando
let nombre1 = 'juan';
let apellido1 = 'perez';

let nombreCompleto = nombre1 + ' ' + apellido1;
console.log(nombreCompleto);

let x1 = nombre1 + 2 + 2;
console.log(x1);

//si queremos que se sumen 2 o mas numeros, pero el tipo de dato final seguira siendo una cadena
let x2 = nombre1 + (2 + 2);
console.log(x2);
console.log(typeof x2);

//pero que pasa  si damos vuelta la operecion, podemos observar que no fue necesario introducir los parentesis este se debe a que en javascript esta expresion de lee de izquierda a derecha, por lo tanto lo primero que lee son 2 numeros y realiza la suma para luego concatenarla a la cadena
let x3 = 2 + 2 + nombre1;
console.log(x3);
console.log(typeof x3); //el tipo de dato sigue siendo cadena

//podemos definir variables de la siguiente manera
//- 2 o mas elementos dentro de la misma variable, y definirlas en la misma linea luego
let a, s;
(a = 10), (s = 20);
console.log(a + s);
