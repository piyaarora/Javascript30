window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let p = document.createElement('p')
const words = document.querySelector('.words')
words.appendChild(p)

const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener('result', e => {
    const arr = Array.from(e.results)
    const arrOfItems = arr.map(word => word[0])
    const transcript = arrOfItems.map(result => result.transcript).join('');
    console.log('arr', arr);
    console.log('arrOfItems', arrOfItems);
    console.log('transcript', transcript);

    p.textContent = transcript
})

recognition.addEventListener('end', () => {
    recognition.start();
    p = document.createElement('p')
    words.appendChild(p);

})

recognition.start();

const download = (name, type) => {
    console.log('download')
    let link = document.createElement('a');
    let file = new Blob([words.innerText], { type: type });
    link.href = URL.createObjectURL(file);
    link.download = name;
    link.click();

}

