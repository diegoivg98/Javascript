const nom = "Diego"
saludar(nom);
function saludar(nombre) {
    //console.log(nom);
    console.log(`Hola ${nombre}`);
}

let nom2 = "Juan";
console.log(nom2);

despedir(nom2);
console.log(nom2);

function despedir(nombre) {
    //console.log(nom);
    console.log(`Adios ${nombre}`);
}

let persona = {nombre:"Juan",apellido:"Gonzalez"};

saludarPersona(persona); 
console.log(persona);
function saludarPersona(objeto) {
    objeto.apellido = "Villar";
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}

function imprimenumero(numero=7) {//Parametros por defecto
    console.log(numero);
}
imprimenumero();

function imprimir(...parametros) {
    console.log(...parametros);
}

imprimir(1,2,3,4,"hola",{id:9})
