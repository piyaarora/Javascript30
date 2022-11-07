const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeup = false;
let score = 0;

const randomTime = (min, max) => {
    return Math.round(Math.random() * max - min + min)
}

const randomHole = (holes) => {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) return randomHole(holes)
    // console.log(hole);
    lastHole = hole
    return hole;
}

const popup = () => {
    time = randomTime(200, 1000)
    const hole = randomHole(holes);
    hole.classList.add('up');

    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeup) popup();
    }, time)
}

const startGame = () => {
    scoreBoard.textContent = 0;
    timeup = false;
    score = 0;
    popup();
    setTimeout(() => {
        timeup = true
    }, 10000)
}

const bonk = (e) => {
    if (!e.isTrusted) return;
    e.currentTarget.classList.remove('up');
    score++;
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener("click", bonk))
