'use strict';
//*vimos anteriormente que podemos crear un objeto persona asi como otros persona1, persona2 todos por separado lo que hacia que tener muchos objetos se volviera algo confuso al tener mucho codigo repetido. luego  vimos que creando una funcion podemos crear objetos a partir de esa funcion (referencia) y que podiamos usar la propiedad 'prototype' para crear objetos que fuesen comunes y asi ahorrar espacio de memoria, pero escribir o crear objetos con prototype no es la mejor manera ya que se vuelve algo confuso, es aqui donde entrar las clases podriamos decir que es una especie de funcion , pero no es una funcion porque nunca usamos su palabra reservada function, pero hace exactamente lo mismo que una , pero es mas facil de escribir y de entender su sintaxis y sintactica. UNA CLASE ES UN CONCEPTO ASTRACTO DE UN OBJETO Y EL OBJETO EN SI ES EL ELEMENTO FINAL
//NOTA si no creamos un constructor, javascript creara uno vacio
//el hecho de que resiba desde afuara 2 parametros no significa que no pueda definir otros paametros que por su naturaleza debe estar vacion
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.casado = '';
  }
}

//vemos que se ha creado nuestra objeto persona1 pasandole los parametros que pide nuestro constructor, N
const persona1 = new Persona('ilia', 'ponce');
console.log(persona1);

//* metdos get y set
//estos metodos get y set nos permitiran acceder u obtener (get), crear o modificar (set) las propiedades de nuestra clase de manera indirecta y mas segura, para esto es necesario que el valor de nuestra variable al usar this sea diferente a la propedad en si, es por eso que existe un standar en que se utiliza un (_)
class Auto {
  constructor(marca, modelo) {
    this._marca = marca;
    this._modelo = modelo;
  }
  //de esta manera cada vez que queramos acceder a esta prpiedad lo haremos atravez de este get
  get marca() {
    return this._marca;
  }
  set marca(marca) {
    this._marca = marca;
  }
}
//creamos un objeto auto
const auto1 = new Auto('mercedez', 'js');
//modificamos la propiedad marca (set)
auto1.marca = 'suzuki';
//obtenemos esa propiedad (get)
console.log(auto1.marca);

//* herencia de clases
//la herencia nos ayudara a ahorrar bastantes lines e codigo ya que podremos heredar metodos y propedades de estas a algun objeto que las necesite, tal como se ve en este ejemplo

class Persona2 {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(ape) {
    this._apellido = ape;
  }
  nombre_completo() {
    return `Nombre : ${this._nombre} ${this._apellido}`;
  }
  //sobreescribiendo el metodo toString para que nos devuelba algo mas legible, NOTA ESTE METODO DEBE REGRESAR UNA CADENA
  toString() {
    return this.nombre_completo();
  }
}

//clase hija u instancia de persona2, devemos tener en cuenta que como estamos heredando de la clase persona2, al momento de creaar la clase hija deveremos llamar primero al constructor de la clase padre(super) y pasarle los parametros que estamos heredando y luego crear nuestro propio constructor
class Empleado extends Persona2 {
  constructor(nom, ape, departamento) {
    super(nom, ape);
    this._departamento = departamento;
  }
  get departamento() {
    return this._departamento;
  }
  set departamento(depa) {
    this._departamento = depa;
  }
  //sobreescritura del metodo nombre completo INPORTANTE NO funciona la palabra !super¡ si escribimos la palabra function, asi que las funciones deben ir sin esta palabra que en ralidad es como la nueva actualizacion lo recomienda.
  nombre_completo() {
    return `${super.nombre_completo()}, Departamento: ${this._departamento}`;
  }
}
//creamos sin problemas al objeto persona2
let persona = new Persona2('nelson', 'rodriguez');
console.log(persona);

//para que este objeto se cree de manera correcta deberemos llamar a el constructor de la clase padre pasandole sus argumentos y luego pasarle nuestros propios argumentos
let empleado = new Empleado('marcelo', 'ferreira', 'finanzas');
console.log(empleado);

//imprimimos las propiedades de forma individual, esto gatillara el uso de las get, es importante darse cuenta que en nuestro objeto 'Empleado' no tenemos definido estos parametros de nombre, esto demuestra que efectivamente estamos heredando estos de su padre
console.log(empleado.nombre);

//lo mismo cuando modificamos alguna propiedad en este ejemplo solo se modificara para la clase hija
empleado.nombre = 'ana';
//vemos que el objeto Empleado ya posee este cambio
console.log(empleado);
//pero los nombres siguen siendo los mismos para la clase padre
console.log(persona);

//* HERENCIA DE METODOS
//podemos observar que podemo acceder al metodo de la clase padre en nuestro empleado
console.log(empleado.nombre_completo());

//ahora como la clase padre en su metodo 'nombre_completo' solo conoce nombre y apellido, por lo que departamento no. entonces para poder utilizar este metodo con el atributo de la clase hija deveremos sobreescribir este metodo en la clase hija.
console.log(empleado.nombre_completo());

//* por ultimo veamos el metodo toString
//vemos que este metodo nos devolvera objet, pero lo sobreescribiremos para que nos devuelba otra cosa
console.log(empleado.toString());

//podemos observar que segun quien llame a este metodo sera el resultado que muestre, si lo llama empleado imprimira todos los datos de el metodo 'nombre_completo', pero si lo llama persona (clase padre) solo imprimira nombre y apellido porque son esos parametros los que posee el metodo en esa clase. a este comportamiento se le conoce como 'POLIMORFISMO' (EL COMPORTAMIENTO CAMBIARA SEGUN QUIEN LLAME A LA CLASE)
console.log(empleado.toString());
console.log(persona.toString());
