'use strict';

//*ciclo while
//recordar que para el ciclo WHILE necesitaremos de un contador pero este  diferencia del contador del FOR va afuera Y deveremos incrementarlo o disminuirlo manualmente. este ciclo se seguira ejecutando hasta que la condicion sea falsa
let contador = 0;

while (contador < 3) {
  console.log(contador);
  contador++;
}
console.log('-------------------');
//*ciclo do-while
//en este ciclo cualquier cosa que tengamos se ejecurata por lo menos 1 vez, ya que primero se ejecuta el codigo y luego se pregunta por la condicion

let contador1 = 0;
do {
  console.log(contador1); //se ejecutara por lo menos una vez aunque la condicion sea false
  contador1++;
} while (contador1 < 3);

console.log('---------------');
//* ciclo for
// en este ciclo a diferencia del while o do-while, no es necesario manipular manualmente las variables a evaluar (como el contdor) ademas nosotros definimos las veces que se repetira el ciclo
for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log('-------------');
//* palabra BREACK
// esta palabra ya la vimos anteriormente con la sentencia swich, pero ahora la veremos dentro de un ciclo que en realidad realiza lo mismo 'sirve para romper el ciclo'
//EJEMPLO: imprimiremos solo el primer numero par

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
    break;
  }
}
console.log('----------');
//* palabra CONTINUE
// esta palabra tambien la vimos y su funcionamiento no cambia en nada (se salta un ciclo y pasa al siguiente)
//EJEMPLO: en este ejemplo tambien imprimiremos todos los numeros pares
for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

//ejercicio para implementar los ciclos, IMPRIMIR LOS PRIMEROS 10 NUMEROS DE 3 EN 3
for (let i = 1; i <= 10; i += 3) {
  console.log(i);
}

//imprimir los primeros 10 numeros de 3 en 3
for (let i = 1; i >= -10; i -= 3) {
  console.log(i);
}

//realizar la suma de los primeros 5 numeros utilizando un ciclo for
let acumulador = 0;
for (let i = 1; i <= 5; i++) {
  //primero imprimimos lo que vamos a sumar para que se entienda mejor
  console.log(`${acumulador} + ${i}`);

  acumulador += i;
  console.log(acumulador);
}

//el mismo ejercicio de la suma lo haremos ahora con el ciclo while y do while
let numero = 1,
  maximo = 5,
  acumulador1 = 0;
while (numero <= maximo) {
  //imprimimos lo que vamos a sumar
  console.log(`${acumulador1} + ${numero}`);
  //realizamos la suma
  acumulador1 += numero;
  console.log(acumulador1);
  numero++;
}

let number = 1,
  max = 5,
  acumu = 0;
do {
  //imprimimos lo que vamos a sumar
  console.log(`${acumu} + ${number}`);
  //realizamos la suma
  acumu += number;
  console.log(acumu);
  number++;
} while (number <= max);
