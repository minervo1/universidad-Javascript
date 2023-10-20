'use strict';

//tenemos la forma antigua que ya no se recomienda que es usando 'VAR' y la que actualmete se usa en javascript moderno 'LET' , estas variables a diferencia de otros lenguajes es considerado como 'NO fuertemente tipado' ya que no es necesario definir que tipo de dato albergara la variable.
//tambien debemos saber que estas variables se almacenan en un sector de la memoria ram llamado 'FRAMES GLOBAL', porque son variables globales
var miNumero = 12;
//por convencion se usa la primera letra en minuscula y la primero letra de la segunda palabra en mayuscula (camelcase)
let miNumero2 = 12;

//javascript si es sensible a mayusculas y minusculas por lo que deveremos tener cuidado con esto
//no solamente se pueden usar letras en las variables tambien podemos usar numeros y algunos caracteres
let $miNumero = 2; //variable completamente valida

let _miNumero2 = 3; //al igual que esta

console.log('tipos de datos (primitivos)');

Number; //ya sean enteros o de punto flotante (10, -10, 3.9,)
String; // permite almacenar cadenas de caracteres
Boolean; //almacena un valor logico (si o no) true, false
null; // ausencia de referencia a un objeto
undefined; // ausencia de valor

//* ejemplos
let miEntero = 10;
console.log(miEntero);

miEntero = 'hola';
//podemos observar que devido a la natulaza de js podemos cambiar el valor de la variable sin problemas (lo que no se puede hacer en otros lenguajes fuertemente tipado)
console.log(miEntero);

let miFlotante = 7.9;
console.log(miFlotante); //podemos observar que esta variable sigue siendo un tipo numero (esto es interesante ya que en la mayoria de lenguajes un numero flotante es fiferente a un numero entero)

let miCadena = 'hola';
console.log(miCadena);

let miBoolean = true;
console.log(miBoolean);

//RECORDAR que a pesar de estar asciado a errores 'NULL' es un tipo de dato, al igual que 'UNDEFINED'
let miNull = null;
console.log(miNull);

//es importante saber el tipo de dato para esto tenemos la palabra reservada 'typeof'
let miUndefined = undefined;
console.log(typeof miUndefined);

let numero = 10;
console.log(typeof numero);

console.log('Hoisting');

// este concepto hace referencia a que una variable puede ser declarada en cualquier parte del codigo no nesesariamente al comienzo. normalmente escribiriamos este codigo se la siguiente manera
var x;
x = 10;
console.log(x);

//*pero este concepto nos indica que podemos hacer esto, NOTA pero esto no es una buena practica ademas esto solo funciona con esta variable definida con VAR QUE SABEMOS QUE YA NO SE DEVERIA USAR Y ES POR COSAS COMO ESTA.
y = 20;
console.log(y);
var y;

// una constante es una variable que una vez definida como tal ya no se puede volver a modificar y una buena practica al momento de definirla es usar mayusculas y si tiene mas palabras separarlas por guien bajo.

const MI_constante = 10;

//VEMOS QUE NO PODEMOS MOFIFICAR ESTA VARIBLE PORQUE FUE DEFINIDA COMO CONSTANYTE
//MI_constante = 20;

//TAMBIEN TENEMOS CONSTANTES PREDIFINIDAS EN JAVASCRIPT como PI
console.log(Math.PI);
