const cont = document.getElementById("num");
const sumar = document.getElementById("inc");
const reset = document.getElementById("reset");
const restar = document.getElementById("dec");

let num = 0;

sumar.addEventListener("click",() =>{
    num++;
    cont.innerHTML = num;
})
restar.addEventListener("click",() =>{
    num--;
    cont.innerHTML = num;
})
reset.addEventListener("click",() =>{
    num=0;
    cont.innerHTML = num;
})