const ctrls = document.getElementById('controlpanel');

function handledisplay() {
    console.log(ctrls.classList)

    ctrls.classList.toggle('show');


}
const handleChange = (e) => {
    const suffix = e.currentTarget.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${e.currentTarget.name}`, e.currentTarget.value + suffix)
}

//handle contrast
const contrastInput = document.getElementById('contrast');
contrastInput.addEventListener('change', handleChange)

//handle blur
const blurInput = document.getElementById('blur');
blurInput.addEventListener('change', handleChange)

//handle spacing
const spacingInput = document.getElementById('spacing');
spacingInput.addEventListener('change', handleChange);

//handle color
const spacingColor = document.getElementById('base');
spacingColor.addEventListener('change', handleChange);

// Handle theme
document.getElementById('slider').checked = true;

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;


    } else {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
    }
})()
