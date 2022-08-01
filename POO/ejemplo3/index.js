class Persona {
    //Private -> #
    //Private -> solo se puede acceder desde dentro de la clase
    #nombre
    #edad
    #obtenedad

    //Protected -> _
    //Solo se puede acceder desde dentro de la clase y desde clases descendientes
    _isDeveloper = true
    constructor(nom, edad) {
        this.#nombre = nom;
        this.#edad = edad;
        }
    saludo(){
        console.log(`hola mi nombre es ${this.nombre}, tengo ${this.edad} años`);
    }
    obtennombre(){
        return this.#nombre;
    }
    obtenedad(){
        return this.#edad;

    }
}

const persona = new Persona("Diego",23);
//console.log(persona);
//console.log(persona.nombre);
persona.saludo();
console.log(persona.obtennombre());
//console.log(persona.#obtenedad());
console.log(persona._isDeveloper);