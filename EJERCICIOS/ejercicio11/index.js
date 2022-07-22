function sinparametros() {
    return true;
}
console.log(sinparametros());

async function promesa(){
    return setTimeout(()=> console.log("Hola soy una promesa"),5000);
}
console.log(promesa());

function* generarpares() {
    let num = 0;
    while (true) {
        yield num+=2;
    }
}

const gen = generarpares();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());