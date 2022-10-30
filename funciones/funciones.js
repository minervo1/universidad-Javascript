'use strict';

//*funciones

//funcion declarativa imprimiendo el valor inmediatamente
function miFuncion(a, b) {
  console.log('Suma: ' + (a + b));
}
miFuncion(3, 5);

//funcion devolviendo el valor
function miFuncion2(a, b) {
  return a + b;
}
const resultado = miFuncion2(2, 7);
console.log(resultado);

//funciones expresivas
const x = function (c, d) {
  return c + d;
};

console.log(x(3, 2));

//tambien existen las funciones que se mandan a llamar a ellas mismas, es como una funcion expresion, pero sin asignarla ninguna variable. Importante: esta funcion solo se puede utilizar una sola vez, ya que no esta asignada a ninguna variable
(function (h, n) {
  console.log('funcion llamandose a si misma ' + (h + n));
})(3, 4);

//tenemos una propiedad que nos permite saber cuantas parametros tiene nuestra funcion, esto es posible ya que las funciones son objetos por lo tanto poseen propiedades y metodos asociados, en este caso esta propiedad 'arguments' solo podemos utilizarla dentro del bloque de la funcion
function miFuncion3(a, b) {
  console.log(arguments.length); //vemos que nos manda el numero de parametros que posee nuestra funcion
  console.log('Suma: ' + (a + b));
}
miFuncion3(1, 2);

// un punto inportante con respecto a la propiedad 'ARGUMENTS' es que esta es en si un array, por lo que podemos acceder
let suma2 = function (a, b) {
  console.log(arguments[0]);
  return a + b;
};
const sumaRespuesta = suma2(4, 6);

//vamos como podemos utilizar esta propiedad de argumentos, vemos que le hemos pasado 4 argumnetos a nuestra funcion, pero no hemos definido ningun parametro. esto no significa un error ya que atravez de la propiedad 'argument' tenemos acceso a estos
function sumarTodo() {
  let suma = 0;
  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i];
  }
  return suma;
}
const respuesta2 = sumarTodo(3, 5, 6, 1);
console.log(respuesta2);

//metodos en las funciones, Recordar: que los metodos son funciones que estan adjuntas a un objeto y podemos acceder a ellas a travez de el objeto seguido de un punto y el metodo
console.log(miFuncion3.toString()); //toString convierte a string lo que se le pase en este caso le pasamos una funcion, esto es solo para demostrar como funcionan los metodos. vemos que el resultao de la funcion ahora esta como texto

//FUNCIONES FLECHAS

const flecha = (a, b) => a + b;
console.log(flecha(4, 4));

//PASO POR VALOR Y REFERENCIA, al trabajar con valores primitivos (string, numeros, booleanos) estos ucupan un espacio de memoria que es unico osea que son independientes.

//en este ejemplo podemos observar este comportamiento al reescribir el valor de c NO afecta a la variable v a pesar de que hemos establecido (v = c) el valor de v se mantiene igual solo cambio el valor de c.
let v = 10;
let c = v;
console.log(c);

c = 11;

console.log(v);
console.log(c);

//este comportamiento cambia cuando se trata de objetos ya que sus valores se pasan por referencia, osea existe una referencia al objeto u valor original, por lo que si cambia en la referencia tambien cambiara en el original
let animal = {
  name: 'cholo',
  color: 'rojo',
};

//podemos observar que el valor de la propiedad name cambio en ambas objetos, LO MISMO PASARA CON LOS ARRAY, FUNCIONES U CUALQUIER OBJETO
let perro = animal;
perro.name = 'vestia';
console.log(animal);
console.log(perro);

//VEAMOS OTROS EJEMPLOS con funciones
let z = 10;

//aca tenemos otro jemplo que ejemplifica el paso por valor, solo se genera una copia por ese motivo el valor original de z no fue modificado.
function cambiaValor(a) {
  console.log((a = 20));
}
cambiaValor(z);
//la razon por la cual al tratar de imprimir a o de llamar a la funcion el resultado es indefinido es porque el parametro que resive es una copia de z, por lo que despues de que se ejecuta la funcion esta varible ya no esta definida. no se puede utilizar fuera de la funcion, solo es valida dentro de esta en el momento que se ejecuta
//console.log(cambiaValor(z));
//console.log(a);
console.log(z);

//paso por referencia
const persona = {
  nombre: 'nelson',
  apellido: 'rodriguez',
};

//al igual que en el ejemplo anterior este parametro 'p1' solo existe dentro de la funcion una vez que la funcion se haya ejecutado este parametro desaparece de memoria.
function cambiaValorObjeto(p1) {
  p1.nombre = 'juan';
  p1.apellido = 'riquelme';
}
//podemos observar que el valor cambio en ambos casos ya que lo que sucede es que se pasa una referencia , en otras palabras TNTO P1 COMO EL OBJETO EN SI APUNTAN A UN MISMO ESPACIO DE MEMORIA
cambiaValorObjeto(persona);
console.log(persona);
