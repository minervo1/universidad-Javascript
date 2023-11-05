console.log('---Operadores---');
/*
//suma
let a = 2,
  b = 3;
let z = a + b;
console.log(z);

//resta
let c = a - b;
console.log(c);

//multiplicasion
let d = a * b;
console.log(d);

//division
let f = a / b;
console.log(f);

//modulo: es el residuo de la operacion de division
let h = a % b;
console.log(h);

//exponente(potencia) : (2 * 2 * 2 ) este operador esta desde la versio ES6 antes de esto se usaba el metodo Math.pow()
let s = a ** b;
console.log(s);

//*incremento

//!Pre-Incremente : el operador ++ va antes de la variable que se quiere aumentar (en 1) y es esta la que aumenta primero para  luego asignar dicha variable a la variable que la contiene.
let v = ++a;
console.log(a); //primero aumenta en 1 la variable a
console.log(v); //y luego se le asigna a su variable contenedora

//!Post-Incremento : el operador ++ va despues de la variable a la que se le quiere aumentar
let q = b++;
console.log(b); //primero se le asigna la variable a su variable contenedora y luego se incrementa, osea la segunda vez que se utiliza es cuando incrementa
console.log(q); //esto quiere decir que la proxima vez que se utilize la vaiable b se incrementara ya que siempre estara pendiente de incrementarse

//*Decremento
//!Pre-decremento : funciona de la misma manera solo que ahora el valor disminulle en 1
let m = --a; //recordemos que en este punto a = 3
console.log(a);
console.log(m);

//!Post -Decremento: igual que el anterior
let l = b--; //en este punto b vale 4
console.log(b);
console.log(l);
*/
/*
//*precedencia de operadores

//las operaciones en javascript se realizan de izquierda a deecha de forma predeterminada

let a1 = 3,
  b1 = 2,
  c1 = 1,
  d1 = 4;
let z1 = a1 * b1 + c1;
console.log(z1); //el resultado es el esperado

//pero dependiendo del operador que se utilize esta regla puede cambiar
let z2 = c1 + a1 * b1;
console.log(z2); // el resultado de izquierda a derecha no corresponde, esto se debe a que el operador de (*) tiene mayor procedencia que el operador de (+) es por eso que se realiza primero.

let z3 = a1 * b1 + c1 / d1;
console.log(z3);

//en este caso si quisieramos que se realizzara primero la suma podemos poner (c1 + a1) ya que los parentesis tienen mayor precedencia que los demas operadores
let z4 = c1 + (a1 * b1) / d1;
console.log(z4);
*/
/*
//*operadores de asignacion

let a = 1;

a += 3; //a = a + 3;
console.log(a);

a -= 2; // a = a - 2;
console.log(a);

//!se aplica lo mismo para los demas operadores (*=, /=, %=, **=)
*/
/*
//*operadores de comparacion nos arrojaran un valor booleano

let a = '3',
  b = 3,
  C = '3';

//!el operador de comparacion (==) realiza coersion, esto significa que convertira inplicitamente (detras de escena) un valor para que coincida con el otro
let z = a == b; //pregunto si a es iguala b
console.log(z); //el resultado es true ya que transformo un valor para que concidiera con el otro

//!pero el operador ternario es estricto esto quiere decir que no realizara coersion, en otras palabras este operador si toma en cuenta el tipo de dato(string, numero)
let z1 = a === b;
console.log(z1); //claramente 3 string no es igual a 3 numero

//asi como comparamos que 2 o mas variables sean iguales tambien podemos preguntar si 2 o mas variables son distintas
//operador normal que realiza coersion
let s = a != b;
console.log(s);

//con el operador estricto, que no realiza coersdion
let s1 = a !== b;
console.log(s1);

//*operadores relacionales, tambien nos devolvera  un valor booleano
console.log('<, >, <=, >=');

//ejercicios
let numero = 10;
if (numero % 2 == 0) {
  console.log('el numero es par');
} else {
  console.log('el numero es impar');
}

let edad = 18,
  adulto = 18;
if (edad >= adulto) {
  console.log('eres un adulto');
} else {
  console.log('eres menor de edad');
}
*/
//*operadores logicos
/*
let a = 15;
let valMin = 0,
  valMax = 10;

//con este operador (&& = AND) ambas expresiones deben ser verdaderoas para que el resultado sea verdadero
if (a >= valMin && a <= valMax) {
  console.log('el numero esta en el rango de 1 y 10');
} else {
  console.log('el numero es menor a 0 u mayor a 10');
}

//con este operador (|| = or) basta con que 1 expresion sea verdadera para que toda la expresion completa sea verdadera.
let vacasiones = true;
let diaDescanso = false;

if (vacasiones || diaDescanso) {
  console.log('el padre si puede ir a ver a su hijo');
} else {
  console.log('el padre no tiene tiempo para vera su hijo');
}

//con este operador (ternario) es paresido a realizar un bloque if. INPORTANTE: recordemos que un operador es en efecto una expresion por lo tanto este operador ternario es una expresion, lo que significa que podemos asigar este 'valor' a una variable.
//si quisieramos hacer lo mismo con un bloque if la variable debe estar fuera del bloque
//INPORTANTE: de hecho podemos usar este operador para introducirlo en una plantilla literal que recordemos acepta cualquier tipo de expresion.
let expresion = 3 > 2;
let resultado = expresion ? 'si es mayor' : 'no es mayor';
console.log(resultado);

let numero1 = 5;
let resultado2 = numero1 % 2 == 0 ? 'el nmero es par' : 'el numero es impar';
console.log(resultado2);
*/
//* is NaN
/*
//como se observa el resultado en la consola es NaN que significa no es un numero u que es un numero invalido esto se debe a que el (18) posee una letra por lo que al momento de convertir ese sring a numero nos arroja este valor porque javascript no tiene forma de poder convertir esa x a numero.
let numero2 = '18x';
let edad = Number(numero2);
console.log(edad);

//en la vida real muchos de los datos los recibiremos desde afuera por lo que es una posibilidad de que estos no sean los esperados, por lo que podemos usar este metodo(isNaN) para comprobar si el valor que resivimos es o no un numero. basicamente este pregunta si el numero a validar es isNaN osea es invalido.
if (isNaN(edad)) {
  console.log('el numero ingresado no es valido');
} else {
  if (numero2 >= 18) {
    console.log('felicidades eres mayor de edad');
  } else {
    console.log('debes tener pasiencia por ahora no puedes conducir');
  }
}

//INPORTANTE : NO ES UNA BUENA PRACTICA UTILIZAR isNaN para determinar si un numero es realmente un numero valido o no, par esto lo mejor es utilizar el metodo isFinite():
*/
//* Ejemplo de Precedencia de Operadores

/*
let x = 5;
let y = 10;
//a pesar de que el post-(y--) tiene mayor precedencia que el pre-(++x) de manera predeterminada javascript lee de izquierda a derecha es por eso que primero se realiza el pre-incremento (se realiza primero la suma antes de asignarle a la variable) para luego seguir y disminuir en 1, pero este decremento se realiza despues. es por eso que para la variable Z y sigue siendo 10
let z = ++x + y--;
console.log(z);
console.log(y);
console.log(x);

//! otro ejemplo:
//segun la procedencia, tiene prioridad la multiplicasion, luego la division y por ultimo la suma, si seguimos el orden el resultado es correcto

let resultado3 = 4 + (5 * 6) / 3;
console.log(resultado3); //14

//tambien sabemos que la procedencia maxima la tienen los parentesis por lo que en este caso
resultado3 = ((4 + 5) * 6) / 3;
const hola = 'hola';
const cal = año => 2012 - año;
*/
