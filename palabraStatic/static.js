'use strict';
//* continuamos con el codigo de la seccion anterior para ver el uso de la palabra reservada STATIC
class Persona {
  //recordar que la palabra this hace referencia al objeto en ese momento es por eso que no podremos acceder a esta propiedad con esta palabra para esodeveremos usar directamente el nombre de la clase.
  static contadorPersona = 2;
  static contador = 0;
  //tambien podemos tener propiedades definidas, estas deben estar fuera del constructor
  email = 'valorPorDefecto@.cl';
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    this.idPersona = Persona.contador++;
    Persona.contadorPersona++;
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
  set apellido(apellido) {
    this._apellido = apellido;
  }
  nombreCompleto() {
    return ` ID: ${this.idPersona}, nombre: ${this._nombre}, apellido: ${this._apellido}`;
  }
  //* sobreescribiendo el metodo de la clase padre (object)
  toString() {
    //este metodo se le conoce como polimorfico, porque el resultado que de sera dependiendo de quien lo llame
    return this.nombreCompleto();
  }
  static saludar() {
    return 'saludos desde metodo static';
  }
  static saludar2(persona) {
    return persona.nombre;
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido); //debemos llamar al constructor de la clase padre
    this._departamento = departamento;
  }
  //sobreescritura del metodo 'nombreCompleto'
  nombreCompleto() {
    return `${super.nombreCompleto()}, departamento: ${this._departamento} `;
  }
}

let persona1 = new Persona('nelson', 'rodriguez');
console.log(persona1);

let empleado1 = new Empleado('maria', 'cacerez', 'informatica');
console.log(empleado1);
console.log(empleado1.nombreCompleto());
//polimorfismo hace referencia al comportamiento del metodo segun quien lo este llamando
console.log(empleado1.toString());
console.log(persona1.toString());

//imtentamos llamar al metodo saludar desde el objeto persona1 y desde el hijo empleado1, o en otras palabras desde sus instancias, pero vemos que no es posible, esto se debe a que los metodos esdtaticos pertenen a la clase y no al objeto
//console.log(persona1.saludar());
//console.log(empleado1.saludar());

//pero si lo llamamos de la clase si funciona
console.log(Persona.saludar());
console.log(Empleado.saludar());

//pero si podemos pasarle parametros en este caso le pasamos un objeto con el cual podremos acceder a las propiedades que indiquemos del objeto
console.log(Persona.saludar2(persona1));
console.log(Persona.saludar2(empleado1)); //FUNCIONA TAMBIEN CON EL HIJO AHORA

//* propiedades estaticas
//estas funcionan igual que los metodos, por lo que no podemos acceder si no es de la misma clase
console.log(persona1.contadorPersona);
//desde la clase si podemos acceder
console.log(Persona.contadorPersona);

//accediendo desde la clase hija
console.log(Empleado.contadorPersona);
//NOTA cada vez que se manda a llamar al constructor de persona (padre e hijo) se incrementara en 1 este contador como tenemos 2 instancias 'persona1' y 'empleado1' se incrementara 2 veces

//accediendo al atributo definido fuera del constructor
console.log(persona1.email);
console.log(empleado1.email);

//pero si lo intentamos acceder desde la propia clase como si fuese un atributo statico no podremos hacerlo necesitamos una instancia de la clase
console.log(Persona.email);

//cada instancia que se cree tendra un ID diferente, esto esta en el constructor de la clase padre
console.log(empleado1.toString());
console.log(persona1.toString());

let persona2 = new Persona('ilia', 'ponce');
console.log(persona2.toString());
let empleado2 = new Empleado('jessica', 'rodriguez', 'educasion');
console.log(empleado2.toString());
