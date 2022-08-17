function integertoroman(n) {
    const val = [100,90,50,40,10,9,5,4,1]
    const roman = ['C','XC','L','XL','X','IX','V','IV','I']
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
