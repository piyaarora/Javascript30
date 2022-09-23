let secondHand = document.querySelector('.second-hand');
let minuteHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');

function setDate() {
    const date = new Date;
    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hour = date.getHours();

    const secdegrees = ((sec / 60) * 360) + 90;
    const mindegrees = ((min / 60) * 360) + 90;
    const hourdegrees = ((hour / 12) * 360) + 90;
    console.log(secdegrees);

    secondHand.style.transform = `rotate(${secdegrees}deg)`;
    minuteHand.style.transform = `rotate(${mindegrees}deg)`;
    hourHand.style.transform = `rotate(${hourdegrees}deg)`;
}

setInterval(setDate, 1000);
