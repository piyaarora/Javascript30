let redColor = document.querySelector("#red");
let blueColor = document.querySelector("#blue");
let greenColor = document.querySelector("#green");
let box = document.querySelector(".color-container");

let r = 0,
    g = 0,
    b = 0;

redColor.addEventListener("keyup", (event) => {
    r = redColor.value;
    if (!r) r = 0;
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

greenColor.addEventListener("keyup", (event) => {
    g = greenColor.value;
    if (!g) g = 0;
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

blueColor.addEventListener("keyup", (event) => {
    b = blueColor.value;
    if (!b) b = 0;
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
