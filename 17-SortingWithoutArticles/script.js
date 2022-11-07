const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const strip = (item) => {
    return item.replace(/^(a |an |the )/i, '').trim()
}

const sortBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

const list = document.querySelector("#bands")
list.innerHTML = sortBands.map(band => `<li>${band}</li>`).join("")
