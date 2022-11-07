const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            console.log(localMediaStream)
            video.srcObject = localMediaStream;
            video.play();
        })
        .catch(err => {
            console.err(`Oh no!!!`, err)
        })
}

const paintToCanvas = () => {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        // take the pixels out
        let pixels = ctx.getImageData(0, 0, width, height);
        // mess with them
        pixels = redEffect(pixels);
        // pixels = splitColors(pixels);

        //ghosting effect
        // ctx.globalAlpha = 0.1
        // put them back
        ctx.putImageData(pixels, 0, 0);
        // console.log(pixels);
        // debugger;
    }, 15)

}

const redEffect = (pixels) => {
    for (i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 100; // RED
        pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
    }
    return pixels
}

const splitColors = (pixels) => {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0]; // RED
        pixels.data[i + 100] = pixels.data[i + 1]; // GREEN
        pixels.data[i - 150] = pixels.data[i + 2]; // Blue
    }
    return pixels;
}


const takePhoto = () => {
    snap.currentTime = 0;
    snap.play();


    // take the data out of the canvas
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'pretty');
    // link.textContent = "download image";
    link.innerHTML = `<img src=${data} alt="girl"/>`
    strip.insertBefore(link, strip.firstChild)
}
getVideo();


video.addEventListener('canplay', paintToCanvas);
