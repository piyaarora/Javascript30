let minuteHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');
let secondHand = document.querySelector('.second-hand');

function setDate() {
    const date = new Date;
    const min = date.getMinutes()
    const sec = date.getSeconds();
    const hour = date.getHours();

    const mindegrees = ((min / 60) * 360) + 90;
    const secdegrees = ((sec / 60) * 360) + 90;
    const hourdegrees = ((hour / 12) * 360) + 90
    console.log(secdegrees)

    secondHand.style.transform = `rotate(${secdegrees}deg)`;
    minuteHand.style.transform = `rotate(${mindegrees}deg)`;
    hourHand.style.transform = `rotate(${hourdegrees}deg)`;
}

setInterval(setDate, 1000)
