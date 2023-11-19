let slides = Array.from(document.querySelectorAll('.carousel .slide'))
let currentSlide = 0

setInterval(() => {
    slides[currentSlide].classList.remove('active')
    currentSlide = (currentSlide+1) % slides.length
    slides[currentSlide].classList.add('active')
}, 8000)

const dataBox = document.querySelectorAll('.data-content')

window.addEventListener('scroll', checkBoxes);
checkBoxes()
function checkBoxes() {
    const triggerBotton = window.innerHeight = window.innerHeight;
    dataBox.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBotton) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}