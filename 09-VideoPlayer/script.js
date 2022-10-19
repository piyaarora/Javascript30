// Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const durations = player.querySelector('.duration')

// durations.textContent = video.duration

//Build functions 
const togglePlay = (e) => {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

const updateIcon = (e) => {
    console.log(e);
    const icon = e.type === 'pause' ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

const updateSkipValues = (e) => {
    console.log(e)
    video.currentTime += parseFloat(e.target.dataset.skip);
}

const updateRange = (e) => {
    console.log(e)
    console.log(e.target.name);
    console.log(e.target.value);
    video[e.target.name] = e.target.value;
}

const updateProgress = () => {
    console.log(video.duration)

    const progressPercent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${progressPercent}%`;
}

const scrub = (e) => {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime
}

// Hook up the event listeners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateIcon);
video.addEventListener('pause', updateIcon);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(skipBtn => skipBtn.addEventListener('click', updateSkipValues));
ranges.forEach(range => range.addEventListener('click', updateRange));

let mouseDown = false;
video.addEventListener('timeupdate', updateProgress)
progress.addEventListener('click', scrub)
progress.addEventListener('mousedown', () => mouseDown = true)
progress.addEventListener('mouseup', () => mouseDown = false)
progress.addEventListener('mouseover', (e) => mouseDown && scrub(e))


