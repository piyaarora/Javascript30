const msg = new SpeechSynthesisUtterance();
let voices = [];
const content = document.querySelector('[name="text"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const voicesDropdown = document.querySelector('[name="voice"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = content.value;

const loadVoices = (e) => {
    // console.log(e.currentTarget.getVoices());
    voices = e.currentTarget.getVoices();
    voicesDropdown.innerHTML = voices.map(voice => `<option value=${voice.name}>${voice.name} ${voice.lang}</option>`)
    // in browser console -> speechSynthesis.speak(msg)
}

const setVoices = (e) => {
    // const speechVoice = e.currentTarget.value
    // // console.log(speechVoice)
    // msg.voice = voices.find(voice => voice.name === speechVoice)
    // in browser console -> speechSynthesis.speak(msg)
    msg[e.currentTarget.name] = e.currentTarget.value
    toggleVoice(true)
}

const toggleVoice = (speakOver) => {
    speechSynthesis.cancel();
    if (speakOver == true)
        speechSynthesis.speak(msg)
}

const setOptions = (e) => {
    console.log(e.currentTarget.name, e.currentTarget.value)
    e.currentTarget.name === 'rate' ? msg.rate = e.currentTarget.value : msg.pitch = e.currentTarget.value
    msg[e.currentTarget.name] = e.currentTarget.value
    toggleVoice(true);
}



speechSynthesis.addEventListener('voiceschanged', loadVoices);
voicesDropdown.addEventListener('change', setVoices)
options.forEach(option => option.addEventListener('change', setOptions))
stopButton.addEventListener('click', () => toggleVoice(false))
speakButton.addEventListener('click', () => toggleVoice(true));

