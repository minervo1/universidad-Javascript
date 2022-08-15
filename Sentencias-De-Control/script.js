'use strict';

//si solo tenemos una linea de codigo para cada una de las condiciones podemos omitir el uso de las llaves, pero se recomenda siempre usarlas
let condicion = false;
if (condicion) console.log('condicion verdadera');
else console.log('condicion falsa');

//otro ejemplo

let numero = 4;
if (numero == 1) {
  console.log('numero 1');
} else if (numero == 2) {
  console.log('numero 2');
} else if (numero == 3) {
  console.log('numero 3');
} else {
  console.log('el numero no es ni 1 ,2 ,3');
}

//estaciones del año
let mes = 12;
let estacion;
if (mes === 1 || mes === 2 || mes === 3) {
  estacion = 'la estacion del año es verano';
} else if (mes === 4 || mes === 5 || mes === 6) {
  estacion = 'estas en primavera';
} else if (mes === 7 || mes === 8 || mes === 9) {
  estacion = 'estas en invierno';
} else if (mes === 10 || mes === 11 || mes === 12) {
  estacion = 'estas en otoño';
} else {
  estacion = 'numero indeterminado';
}
console.log(estacion);

//ejercicio hora  del dia

let hora = 17;

if (hora >= 6 && hora <= 11) {
  console.log('Buenos dias');
} else if (hora >= 12 && hora <= 18) {
  console.log('Buenas tardes');
} else if (hora >= 19 && hora <= 24) {
  console.log('Buenas noches');
} else if (hora >= 0 && hora < 6) {
  console.log('Durmiendo');
} else {
  console.log('hora indeterminada');
}

//sentencia switch, es similar a una estructura if, pero se suele utilizar cuando hay varias opciones que hay que comparar.
//! es inportante agregar el breack ya que el resultado que nos dara no sera el esperado, ademas hay que saber que esta estructura realiza una comparacion esticta
let numero1 = 2;

switch (numero1) {
  case 1:
    console.log('numero 1');
    break;
  case 2:
    console.log('numero 2');
    break;
  case 3:
    console.log('numero 3');
    break;
  case 4:
    console.log('numero 4');
    break;
  default:
    console.log('numero desconocido');
    break;
}

//ejemplo del mes del año con switch,
let mes1 = 1;

switch (mes1) {
  case 1:
  case 2:
  case 3:
    console.log('estas e verano');
    break;
  case 4:
  case 5:
  case 6:
    console.log('estas en otoño');
    break;
  case 7:
  case 8:
  case 9:
    console.log('estas en invierno');
    break;
  case 10:
  case 11:
  case 12:
    console.log('estan en primavera');
  default:
    console.log('estacion del año indeterminada');
}
