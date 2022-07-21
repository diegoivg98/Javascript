const bin = document.querySelector("#num_bin");
const dec = document.querySelector("#num_dec");
const btn = document.querySelector("#btn");

function Dec2Bin() {
    num = num_dec.value;
    const decToBi = (num) => (num === 0 ? 0 : (num % 2) + 10 * decToBi(~~(num / 2)));
    num_bin.value = decToBi(num).toString();
}

btn.addEventListener('click', () => {
    Dec2Bin();
});