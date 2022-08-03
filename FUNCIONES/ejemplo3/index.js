const array = [1,2,5,6,7,8,9,10]
const array2 = array.map(function(v){
     return v * 2 
});
console.log(array2);

//Funcion tipo flecha
const array3 = [1,2,5,6,7,8,9,10]
const array4 = array.map((v) => v * 2 );
console.log(array4);