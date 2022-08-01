//Getter -> obtener atributos/metodos privados/protegidos
//Setter -> cambiar el valor de alguno de los atributos privados o protegidos 

class Persona {
    //Private -> #
    //Private -> solo se puede acceder desde dentro de la clase
    #nombre
    #edad

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
    obtennombre(){ //Funcion Getter -> accede a atributo 
        return this.#nombre;
    }
    obtenedad(){
        return this.#edad;
    }
    getEdad(){
        return this.#edad;
    }
    setEdad(nuevaedad){
        this.#edad = nuevaedad;
    }
}

const persona = new Persona("Diego",23);
const edad = persona.getEdad();
console.log(edad);
persona.setEdad(34);
console.log(persona.getEdad());