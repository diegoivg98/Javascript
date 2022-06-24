const bin = document.querySelector("#num_bin");
const dec = document.querySelector("#num_dec");
const btn = document.querySelector("#btn");

function Bin2Dec() {
    const binArr = num_bin.value.split('').reverse();
    let decNo = 0;
    binArr.forEach((item, index) => item === '1' ? decNo += Math.pow(2, index) : void 0);
    num_dec.value = decNo.toString();
}

btn.addEventListener('click', () => {
    Bin2Dec();
});