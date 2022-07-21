const datos = {
    nombre: "Diego",
    apellido: "Vistoso",
    edad: 23,
    altura: 173,
    eresDesarrollador: true
}
console.log(datos);

const edad = datos.edad;
console.log(edad);

const datos2 = [{
    ...datos
},
{
    nombre: "Octavio",
    apellido: "Veloz",
    edad: 24,
    altura: 175,
    eresDesarrollador: false
},
{
    nombre: "Gabriel",
    apellido: "Palocz",
    edad: 31,
    altura: 183,
    eresDesarrollador: true
}
];
console.log(datos2);

const listaordenada = datos2.sort((a, b) => b.edad - a.edad)
console.log(listaordenada);