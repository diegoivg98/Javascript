/*Considera una lista/array de ovejas. 
Cada oveja tiene un nombre y un color. 
Haz una función que devuelva una lista 
con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a,
sin importar el orden, las mayúsculas o espacios.*/
const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]
  export default function contarOvejas(ovejas){
     return ovejas.filter(ov => ov.color === 'rojo').
     filter(ov => ov.name.includes('N')||ov.name.includes('n') || ov.name.includes('A') || ov.name.includes('a'));
  }
  
    const ovejasFiltradas = contarOvejas(ovejas)
    
    console.log(ovejasFiltradas)