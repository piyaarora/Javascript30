const panels = document.querySelectorAll('.panel');

const addOpen = (e) => {
    e.currentTarget.classList.toggle('open');
}
const addOpenActive = (e) => {
    if (e.propertyName.includes('flex'))
        e.currentTarget.classList.toggle('open-active');
}
panels.forEach(panel => panel.addEventListener('click', addOpen));
panels.forEach(panel => panel.addEventListener('transitionend', addOpenActive));
