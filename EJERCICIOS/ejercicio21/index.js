/* Obtener el numero menor de un array, pero no negativo */
const numbers = [1, -3, 0];
const isPositive = (number) => number > 0
const min = Math.min(...numbers.filter(isPositive))
console.log(min)
