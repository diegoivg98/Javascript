/* Obtener el numero menor de un array, pero no negativo */
const numeros = [1,-3,0];
let min = numeros[0]; 
for(let i = 0; i<numeros.length; i++) { 
  if (min > numeros[i] && numeros[i] >= 0) {
    min = numeros[i]; 
  }
}
console.log('El menor es',min)