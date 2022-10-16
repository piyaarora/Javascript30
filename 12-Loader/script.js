const update = document.querySelector(".loadData");
update.addEventListener("click", () => {
    let width = 1;
    let num = 1;
    let processing = document.querySelector(".loading");
    let update = setInterval(() => {
        if (width >= 100) clearInterval(update);
        else {
            width++;
            num++;
            processing.style.width = width + "%";
            processing.innerHTML = num + "%";
            processing.style.textAlign = "right";
        }
    }, 20);
});
