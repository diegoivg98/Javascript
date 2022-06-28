const start = 10;
let time = start * 60;
const countdown = document.getElementById('countdown');

setInterval(updateCount,1000);

function updateCount() { 
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    countdown.innerHTML = `${minutes}:${seconds}`;
    time--;     
}