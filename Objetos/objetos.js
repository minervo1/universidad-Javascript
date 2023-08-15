'use strict';

//la diferncia entre primitivos y objetos es que los primeros no poseen ni propiedades ni metodos, en este caso nos marca indefinido porque el numero 8(primitivo) no posee la propiedad lenhth
const numero = 8;
console.log(numero.length);

//los objetos si poseen propiedades y metodos
const persona = {
  nombre: 'juan',
  apellido: 'diaz',
  email: 'diaz.al_@gmail.com',
  edad: 33,
  //creamos una funcion y la establecemos como una propiedad del objeto. ahora si queremos acceder a las propiedades del objeto estando dentro del objeto podemos usar la palabra clave 'THIS'
  nombreCompleto: function () {
    return this.nombre + ' ' + this.apellido;
  },
};
const nombre_completo = persona.nombreCompleto();
console.log(nombre_completo);

//accedemos a las propiedades del objeto
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona);

//creando objeto con la palabra reservada 'new', esta es la forma antigua de hacerlo
const persona2 = new Object();

// agregando atributos  a este nuevo objeto
persona2.nombre = 'nelson';
persona2.direccion = 'jose diagonal caro 2323';

console.log(persona2);
console.log(persona2.nombre);

// veamos otras formas de acceder a las propiedades de los objetos
console.log(persona['nombre']);

// recorriendo nuestro objeto con un for in
for (const propiedades in persona) {
  console.log(propiedades); //mostramos los nombres de las propiedades
  console.log(persona[propiedades]); //mostramos las propiedades en si
}

//agregando propiedades a nuestro objeto
persona.telefono = '342353423';
console.log(persona);

// eliminando propiedades de nuestro objeto
delete persona.apellido;
console.log(persona);

//1- formas de imprimir nuestro objeto, concatenando cada propiedad
console.log(persona.nombre + ' tiene ,' + persona.edad + 'años');
//2- atravez de nuestra plantilla literal
console.log(`${persona.nombre} tiene ${persona.edad} años`);

//3- utilizando un ciclo
for (const nombres in persona) {
  console.log(persona[nombres]);
}

//4-esta forma nos regresa nuestro objeto como un array
const valoresArray = Object.values(persona);
console.log(valoresArray);

//5- nos devuelve nuestro objeto como un objeto Json que es un tipo especial de objeto que almacena datos estructurados (muchos datos)
const personaStringJason = JSON.stringify(persona);
console.log(personaStringJason);

//*los metodos GET y SET cuando estamos trabajando con objetos nos sirven para obtener las propiedades (GET) u para modificarlas (SET)

//veamos una manera diferente de llamar a estos funciones aplicando los metodos GET Y SET
const persona3 = {
  nombre: 'juan',
  apellido: 'diaz',
  email: 'diaz.al_@gmail.com',
  edad: 33,
  idioma: 'es',
  //escribiendo directamente la palara get, ya no sera necesario poner los parentesis al momento de llamarla, quedara comno una propiedad mas
  get lang() {
    return this.idioma.toUpperCase();
  },
  set lang(lenguaje) {
    this.idioma = lenguaje.toUpperCase();
  },
  //creamos una funcion y la establecemos como una propiedad del objeto. ahora si queremos acceder a las propiedades del objeto estando dentro del objeto podemos usar la palabra clave 'THIS'
  nombreCompleto: function () {
    return this.nombre + ' ' + this.apellido;
  },
};
console.log(persona3.lang);
//lo mism pasa con el set ya no es necesari poner los parentesis, vemos que nos devuelbe el valor correcto
persona3.lang = 'en';
console.log(persona3.idioma);

//* si estamos trabajando con el paradigma de una programacion funcional estaremos acostunbrados a los objetos tal como lo hemos visto en este curso incluso en el curso de jonas, en este punto si quisieramos reutilizar el codigo de la persona no podriamos, tendriamos que escribir un nuevo objeto persona y volver a introducir las propiedades de este, pero hay una manera de poder reutilizar el codigo de persona y eso es con un CONSTRUCTOR
//cuando creamos un constructor que basicamente es un tipo especial de funcion lo hacemos escribiendo su primera letra en mayuscula, seguido de los parametros que resivira, ahora a los nombres de las propiedades de este objeto persona se le antepone la palabra THIS que indicara que estamas trabajando y queremos trabajar con estas propiedades y luego igualamos el nombre de la propiedad (puede ser cualquier nombre)al parametro que corresponda que suelen tener el mismo nombre pero para evitar confuciones es bueno hacerlo como se muestra en el ejemplo.
function Persona(
  nombre = 'victoria',
  apellido = 'carlos',
  email = 'cristian@getComputedStyle.cl'
) {
  this.nombre1 = nombre;
  this.apellido1 = apellido;
  this.email1 = email;
  //si queremos agregar una nueva propiedad que afecte a todos los objetos que hemos creado apartir del constructor se debe hacer directamente sobre este
  this.datos = function () {
    return `${this.nombre1} ${this.apellido1} tiene ${this.edad} años`;
  };
}

//la ventaja es que ahora podemos crear varios objetos de tipo persona (que para efectos practicos ahora son metodos)reutilizando esta funcion constructora. NOTA si no le pasamos valres a esta funcion tomara los valores predefinidos
const padre = new Persona('juan', 'peres', 'juan@gmail.com');
const hijo = new Persona('nelson', 'peres', 'nelson@gmail.com');
const madre = new Persona('rosa', 'dalia', 'rosa@gmail.com');

//estos objetos son independientes cualquier cambio no afectara al otro ya que se almacenas en diferentes lugares de memoria para eso es la palabra reservada new le asigna a ese objeto un nuevo espacio en memoria
console.log(padre);
console.log(hijo);
console.log(madre);

//si queremos agregar una nueva propiedad a un objeto deveremos realizarlo de la siguiente manera
padre.edad = 23;
madre.edad = 33;

//ahora si queremos agregar una nueva propiedad al constructor para que toodos los objetos puedan tenerla simplemente la agregamos directamente en el constructor en este caso agregamos como propiedad el metodo datos tal como se muesra arriba. y para llamarlo lo hacemos en cualquier objeto que la necesite
console.log(padre.datos());
console.log(madre.datos());

//*aclarando algunas cosas al crear objetos en javascript, sabemos que para crear un objeto lo hacemos de la siguiente manera
const miObjeto = {};

//ahora cada vez que creamos un nuevo objeto de esta manera estamos invocando a el oonstructor.
const miObjeto2 = new Object();

//lo mismo sucede cuando creamos un string, INPORTANTE en otras palabras no es necesario crear un objeto utilizando la palara reservada new, lo mismo pasa para crear array u numeros etc no se utiliza la parabra reservada a menos que realmente sea necesario.
const stringNombre = new String('nelson rodriguez');
console.log(stringNombre);
const nombre = 'nelson ponce';
console.log(nombre);

//sabemos que para crear una nueva propiedad en la que todos los objetos que creemos puedan acceder a ella debemos crearla en el constructor, sin enbargo hay otra forma de hacerlo sin tener que intervenir directamente el constructor, y para eso usamos la propiedad PROTOTYPE
Persona.prototype.telefono = '23423423';

//podemos observar que todos los objetos tienen acceso a esta nueva propiedad
console.log(padre.telefono);
console.log(madre.telefono);
console.log(hijo.telefono);

//ahora si queremos cambiar este valor para alguien en especifico lo podemos hacer despues
console.log((padre.telefono = '55888992'));

//* USO Y UTILIDAD DEL METODO CALL

//tenemos 2 objetos distintos con algunas propiedades en comun y otras no, el metodo call nos permitira utilizar el metodo nombreCompleto de persona4 llamandolo desde persona5
const persona4 = {
  nombre: 'nelson',
  apellido: 'rodriguez',
  nombreCompleto: function () {
    return this.nombre + ' ' + this.apellido;
  },
};

const persona5 = {
  nombre: 'ilia',
  apellido: 'ponce',
};

//primero llamamos a la propiedad que queremos usar en este caso es una funcion(metodo) y sobre esta llamamos al metodo call al cual debemos pasarle el objeto al cual debe hacer referencia, en otras palabras el metodo que usara esta propiedad
console.log(persona4.nombreCompleto.call(persona5));

//ahora tambien podemos pasarle argumentos al metodo call, el mismo ejemplo ahora nuestra funcion (nombreCompleto) tiene parametros
const persona6 = {
  nombre: 'nelson',
  apellido: 'rodriguez',
  nombreCompleto: function (titulo, tel) {
    return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
  },
};
//ahora estos parametros en nuestro metodo call van despues de del metodo pasado
console.log(persona6.nombreCompleto.call(persona5, 'Ingeniero', 5552312));

//* uso y metodo del metodo APPLY
//usaremos los mismos objetos, el mismo ejemplo anterior con persona4 y persona 5, para ver la diferencia
console.log(persona4.nombreCompleto());
//podemos ver que obtenemos el mismo resultado que con CALL, nos podemos dar cuenta que al trabajar sin paremetros la diferencia es ninguna.
console.log(persona4.nombreCompleto.apply(persona5));

//esto cambia cuando trabajamos con parametros ya que debemos pasarle un arreglo
console.log(persona6.nombreCompleto.apply(persona5, ['señor', 32413423]));
