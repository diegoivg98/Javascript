function suma(...nums) {
    return nums.reduce((a,b) => a + b);
 }
 
 const s = suma(1,2,3,4,9);
 console.log(s);