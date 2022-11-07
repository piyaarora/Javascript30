console.log("%chey!!!! welcome to console", 'font-size: 20px; color: pink;')

const nodes = Array.from(document.querySelectorAll("[data-time]"));
console.log(nodes);

const seconds = nodes.map(node => node.dataset.time)
    .map(time => {
        const [mins, secs] = time.split(":").map(parseFloat)
        console.log(mins, secs)
        return (mins * 60) + secs
    })
    .reduce((total, vdoSecs) => total + vdoSecs)
let secondsLeft = seconds
const hours = Math.floor(secondsLeft / 3600)
secondsLeft = secondsLeft % 3600

const mins = Math.floor(secondsLeft / 60)
secondsLeft = secondsLeft % 60

const totaltime = hours + ':' + mins + ':' + secondsLeft;

console.log(totaltime)
