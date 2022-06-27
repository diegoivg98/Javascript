const cells = document.querySelectorAll('.cell');
const playertxt = document.querySelector('#playertxt');
const resetbtn = document.querySelector('#resetbtn');

const wincells = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let optioncell = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let game = false;

initgame();

function initgame() {
    cells.forEach(cell => cell.addEventListener('click', cellclick));
    resetbtn.addEventListener("click", resetgame);
    playertxt.textContent = `${player} turn`;
    game = true;
}

function cellclick() {
    const cellindex = this.getAttribute('cellindex');
    if (optioncell[cellindex] != "" || !game) {
        return;
    }
    updatecell(this, cellindex);
    checkwin();
}

function updatecell(cell, index) {
    optioncell[index] = player;
    cell.textContent = player;
}

function changeplayer() {
    player = (player == "X") ? "O" : "X";
    playertxt.textContent = `${player} turn`;
}

function checkwin() {
    let win = false;

    for (let i = 0; i < wincells.length; i++) {
        const condition = wincells[i];
        const cell1 = optioncell[condition[0]];
        const cell2 = optioncell[condition[1]];
        const cell3 = optioncell[condition[2]];

        if (cell1 == "" || cell2 == "" || cell3 == "") {
            continue;
        }
        if (cell1 == cell2 && cell2 == cell3) {
            win = true;
            break;
        }
    }

    if (win) {
        playertxt.textContent = `${player} Wins!`;
        game = false;
    }
    else if (!optioncell.includes("")) {
        playertxt.textContent = `DRAW!`;
        game = false;
    }
    else {
        changeplayer();
    }
}

function resetgame() {
    player = "X";
    optioncell = ["", "", "", "", "", "", "", "", ""];
    playertxt.textContent = `${player} turn`;
    cells.forEach(cell => cell.textContent = "");
    game = true;
}    