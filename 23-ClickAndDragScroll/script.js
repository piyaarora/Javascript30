const slider = document.querySelector(".items")
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    console.log(e.pageX, slider.scrollLeft)
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft
})
slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active")
})
slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active")
})
slider.addEventListener("mousemove", (e) => {
    if (!isDown) return
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3
    console.log({ startX, x, walk })
    slider.scrollLeft = scrollLeft - walk
})
