

const playBeat = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

const playBeatOnClick = (e) => {
    var element = document.documentElement
    console.log(element)
    const audio = document.querySelector(`audio`);
    console.log(audio)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}


const removeTransition = (e) => {
    if (e.propertyName !== 'transform') return;
    // this is replaced with e.currentTarget for es6 syntax
    e.currentTarget.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
keys.forEach(key => key.addEventListener('click', playBeatOnClick))

window.addEventListener('keydown', playBeat);



