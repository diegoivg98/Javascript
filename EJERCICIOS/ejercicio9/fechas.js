const fechahoy = new Date();
const fechanacimiento = new Date(1998,7,27);
const comparacion = fechahoy > fechanacimiento;
const dianacimiento = fechanacimiento.getDate();
const mesnacimiento = fechanacimiento.getMonth()+1;
const añonacimiento = fechanacimiento.getFullYear();

console.log(fechahoy);
console.log(fechanacimiento);
console.log(comparacion);
console.log(dianacimiento);
console.log(mesnacimiento);
console.log(añonacimiento);