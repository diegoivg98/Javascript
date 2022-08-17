function integertoroman(n) {
    const val = [10,9,5,4,1]
    const roman = ['X','IX','V','IV','I']
    let res = '';

    val.forEach((val, i) => {
        while(n >= val){
            res = res + roman[i];
            n = n-val;
        }
    });
    return res;
}
console.log(integertoroman(23));