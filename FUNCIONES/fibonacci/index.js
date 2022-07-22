function fibonacci(num) {
    if (num === 1) return [1]
    if (num === 2) return [1,1];
    let lista = [1,1];
    for (let i = 2; i < num; i++) {
        lista.push(lista[i-1]+lista[i-2]);
    }
    return lista;
}
console.log(fibonacci(6));