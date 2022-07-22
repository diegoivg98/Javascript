const btn = document.getElementById("btnrandom");
const min = document.getElementById("minInput");
const max = document.getElementById("maxInput");
const randomnum = document.getElementById("randomnumber");
let numrandom = 0;

btn.addEventListener("click", () => {
    numrandom = Math.floor(Math.random() *(max.value-min.value) + min.value);   
    console.log(numrandom);
    randomnum.innerHTML = numrandom;
});