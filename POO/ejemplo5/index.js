//Inheritance -> Herencia
class Persona{
    _nombre
    _edad
    constructor(nom, edad) {
        this._nombre = nom;
        this._edad = edad;
        }
    saludo(){
        console.log(`hola mi nombre es ${this._nombre}, tengo ${this._edad} años`);
    }
    saludoDesarrollador(){ 

    }
}
class Desarrollador extends Persona{
    constructor(nom, edad,lenguaje) {
        super(nom,edad);
        this.lenguaje = lenguaje;
    }
    saludo(){//Override
        super.saludo()
        console.log(`y soy desarrollador de ${this.lenguaje}`);
    }
}
const nuevodev  =new Desarrollador("Diego",23,"Javascript");
console.log(nuevodev);

//Polimorfismo => varias formas
nuevodev.saludo();
