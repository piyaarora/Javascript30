function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const slidingImages = document.querySelectorAll('.slide-in');


const checkscroll = (e) => {
    slidingImages.forEach(slideImg => {
        const slideInAt = (window.scrollY + window.innerWidth) - slideImg.height / 2 //halfway through the img
        const imageBottom = slideImg.offsetTop + slideImg.height //bottom of the image
        const isHalfShown = slideInAt > slideImg.offsetTop
        const isNotScrolledPast = window.scrollY < imageBottom

        if (isHalfShown && isNotScrolledPast) {
            slideImg.classList.add('active')

        } else {
            slideImg.classList.remove('active')
        }
        console.log(slideInAt);
    })
    console.log(e)
}
window.addEventListener('scroll', debounce(checkscroll))
