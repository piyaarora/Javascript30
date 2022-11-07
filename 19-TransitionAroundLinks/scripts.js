console.log("heyyyyy")

const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span")
highlight.classList.add("highlight")
document.body.append(highlight)

const addHighlight = (e) => {
    const list = e.currentTarget.getBoundingClientRect();
    console.log(e.currentTarget.getBoundingClientRect())
    const coords = {
        height: list.height,
        width: list.width,
        top: list.top + window.scrollY,
        left: list.left + window.scrollX
    }
    highlight.style.height = `${coords.height}px`;
    highlight.style.width = `${coords.width}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
}

triggers.forEach(a => a.addEventListener("mouseenter", addHighlight))
