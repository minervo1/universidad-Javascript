'use strict';
//*recordemos que un arreglo es como una variable , solo que esta puede almacenar un numero mayor de elementos, y estos pueden ser cualquier tipo de elementos incluso otros array u objetos , recordemos que una funcion es considerado un valor por lo tanto tambien podriamos meter una funcion.

//forma antigua de declarar un arreglo
let autos = new Array('bmw', 'volvo', 'zusuki');

//forma actual o recomendada
const autos1 = ['bmw', 'volvo', 'zusuki'];

//accediendo a los elementos
console.log(autos[0]); //se imprimira el elementos en la posicion cero en este caso es 'bmw'
console.log(autos[2]);

console.log('-----------');

//recorriendo el array completo de una vez, inportante darse cuenta de la propiedad 'length' esta nos devuelbe la cantidad de elementos del array en este cfaso tenemos 3 elementos, pero tenemos 4 espacios acupados ([0,1,2,3]), pero como mtenemos '<' esto significa que no incluye el ultimo elemento es por eso que nos arroja la cantidad correcta. si tuviera '<=' nos incluiria el ultimo elemento y este ultimo seria 'undefined' porque no esta definido
for (let i = 0; i < autos.length; i++) {
  console.log(autos1[i]); //imprimimos el array en su posicion i, como i va aumentando me mostrara todos los elementos
}

console.log('----------------');
//modifiquemos los elementos de un arreglo

autos1[1] = 'nissan';
console.log(autos1[1]); //se ha modificado el valor del elemento

//agregando elementos a un array, existen varias formas de hacerlo, pero solo veremos 2 PUSH, UNSHIFF

//!agrega al final del array
autos1.push('toyota');

//!agrega al comienzo del array
autos1.unshift('chery');

console.log('----------------');

//revisamos nuestro nuevo array
console.log(autos1);

//veamos como agregar un elemento utilizando la propiedad length, recordemos que esta nos devolvera el numero de elementos del arreglo en este punto nuestro arreglo tiene 5 elementos, peo recordemos que se comienza a contar desde el cero por lo tanto tenemos 5 elementos en las posiciones (0 ,1,2,3,4)
console.log(autos1.length);

//por lo que podemos usar esta propiedad para agregar un elementos mas en la posicion 5 que es basicamente lo que obtendremos. es lo mismo que escribir directamente un 5
autos1[autos1.length] = 'ddd';
console.log(autos1);

//otra forma de agregar es saltandonos numeros osea dejando huecos en el array. Importante: esto  no esta recomendado
autos1[7] = 'audi';
console.log(autos1);

//en ocasiones sera necesario saber si estamos trabajando con arreglos o no, esto lo podemos saber utilizando la clase ARRAY Y SU METODO 'IsArray'
console.log(Array.isArray(autos1));

//otra forma de hacerlo es. basicamente estamos preguntando si autos1 es una instancia de tipo array
console.log(autos1 instanceof Array);

//RECORDAR que las casillas u indices que no sean definidos osea que no tengan un valor pasaran ser 'undefined' en memoria que es de hecho un tipo de dato
let array = [];
array[0] = 'hola';
array[2] = 23;

console.log(array);
console.log(`${array[1]}`);
