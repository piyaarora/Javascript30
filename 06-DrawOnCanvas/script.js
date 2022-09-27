const canvas = document.getElementById('draw');
const colorPallete = document.getElementById("color-picker")

// default draw
const draw = (e) => {
    if (!isdrawing) return; //stop the function from running when it is not used
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY]
    console.log(e)
}


// save
const onSave = () => {
    const link = document.createElement('a');
    link.download = 'sketch.png';
    link.href = canvas.toDataURL();
    link.click();
}

// color picker
const colorPick = () => {
    color = colorPallete.value;
    ctx.strokeStyle = color;
}

// save format for javascript file
{/* <button onclick="download('file text', 'myfilename.txt', 'text/plain')">Create file</button> */ }
// function download(text, name, type) {
//     var a = document.getElementById("a");
//     var file = new Blob([text], { type: type });
//     a.href = URL.createObjectURL(file);
//     a.download = name;
// }


// display size dropdown
const sizing = () => {
    document.querySelector(".size-list").classList.toggle("show-list");
    setBrushSize();
}

// set brush size
const setBrushSize = () => {
    const brushes = document.querySelectorAll('.size');
    brushes.forEach(brush => brush.addEventListener('click', () => {
        ctx.lineWidth = brush.getAttribute("style").substr(11, 2);
        ctx.globalCompositeOperation = "source-over";
    }));
}

const magicPen = () => {

}

// erase
const erase = () => {
    ctx.lineWidth = 10;
    ctx.globalCompositeOperation = "destination-out";
    ctx.arc(e.offsetX, e.offsetY, 10, 0, 2 * Math.PI);
    ctx.fill();
};

const ctx = canvas.getContext('2d');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
console.log(ctx);
ctx.strokeStyle = '#000';
ctx.lineJoin = 'round';

let isdrawing = false;
let lastX = 0;
let lastY = 0;


// event listeners
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isdrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]
});
canvas.addEventListener('mouseup', () => isdrawing = false);
canvas.addEventListener('mouseout', () => isdrawing = false);
colorPallete.addEventListener('change', colorPick)




