const handleFixedNav = () => {
    console.log('hey you called me!!!');
    const navbar = document.querySelector("#main");

    console.log(navbar.offsetHeight)
    console.log(navbar.offsetTop)
    console.log(window.scrollY)
    if (window.scrollY > navbar.offsetTop) {
        document.body.style.paddingTop = navbar.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');

    }
}


window.addEventListener("scroll", handleFixedNav)
