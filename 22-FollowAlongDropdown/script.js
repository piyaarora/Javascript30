const triggers = document.querySelectorAll(".cool > li");
const nav = document.querySelector(".top");
const bg = document.querySelector(".dropdownBackground")


const handleEnter = (e) => {
    console.log("ENterrrrr!!!!")
    console.log(this);
    e.currentTarget.classList.add("trigger-enter");
    setTimeout(() => e.target.classList.contains("trigger-enter") && e.target.classList.add("trigger-enter-active"), 150)
    bg.classList.add("open")

    const dropdown = e.currentTarget.querySelector(".dropdown");
    console.log(dropdown)
    const dCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    console.log(dCoords)
    const coords = {
        height: dCoords.height,
        width: dCoords.width,
        top: dCoords.top - navCoords.top,
        left: dCoords.left - navCoords.left
    }

    bg.style.setProperty("width", `${coords.width}px`)
    bg.style.setProperty("height", `${coords.height}px`)
    bg.style.setProperty("transform", `translate(${coords.left}px, ${coords.top}px)`)

}

const handleLeave = (e) => {
    e.currentTarget.classList.remove("trigger-enter-active");
    e.currentTarget.classList.remove("trigger-enter");
    bg.classList.remove("open")
    console.log("Leaveeee!!!");
}
console.log(triggers)

triggers.forEach(trigger => trigger.addEventListener("mouseenter", handleEnter));
triggers.forEach(trigger => trigger.addEventListener("mouseleave", handleLeave));
