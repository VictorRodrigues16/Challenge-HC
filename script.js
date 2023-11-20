const urlICR = "https://icr.usp.br/"
const urlFmusp = "https://www.fm.usp.br/fmusp/portal/"
const icr = document.querySelector('#icr')
const fmusp = document.querySelector('#fmusp')
const submitButton = document.querySelector("form button.form-button")
const emailInput = document.querySelector("input#email")

submitButton.addEventListener("click", submitForm)

const submit = []

function submitForm(event) {
    event.preventDefault()

    const name = document.querySelector("input#name").value
    const email = emailInput.value
    const message = document.querySelector("textarea#message").value

    if (validateEmail(email)) {
        const formData = {
            name,
            email,
            message,
        }

        submit.push(formData)

        displaySubmit()
        resetarForm()
    } else {
        showError("Por favor, insira um endereço de e-mail válido. Ele deve conter @ e um '.'")
    }
}

function validateEmail(email) {
    const teste = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return teste.test(email)
}

function displaySubmit() {
    console.log(submit)
}

function resetarForm() {
    document.querySelector("input#name").value = ""
    emailInput.value = ""
    document.querySelector("textarea#message").value = ""
}

function showError(message) {
    const errorElement = document.createElement("p")
    errorElement.className = "error-message"
    errorElement.textContent = message

    emailInput.parentNode.insertBefore(errorElement, emailInput)

    setTimeout(() => {
        errorElement.remove()
    }, 3000)
}




function toggleContent(section) {
    const atendimento = document.getElementById(section)
    const initialContent = atendimento.nextElementSibling
    const moreContent = initialContent.nextElementSibling
    const verMaisBtn = atendimento.querySelector('button:first-of-type')
    const voltarBtn = atendimento.querySelector('button:last-of-type')

    initialContent.style.display = 'none'
    moreContent.style.display = 'block'
    verMaisBtn.style.display = 'none'
    voltarBtn.style.display = 'inline-block'
}

function voltar(section) {
    const atendimento = document.getElementById(section)
    const initialContent = atendimento.nextElementSibling
    const moreContent = initialContent.nextElementSibling
    const verMaisBtn = atendimento.querySelector('button:first-of-type')
    const voltarBtn = atendimento.querySelector('button:last-of-type')

    initialContent.style.display = 'block'
    moreContent.style.display = 'none'
    verMaisBtn.style.display = 'inline-block'
    voltarBtn.style.display = 'none'
}

function openNewTab(urlICR){
    const siteIcr = window.open(urlICR, '_blank')
    siteIcr.focus()
}

icr.addEventListener('click', () => {
    openNewTab(urlICR)
})

fmusp.addEventListener('click', () => {
    openNewTab(urlFmusp)
})

let slides = Array.from(document.querySelectorAll('.carousel .slide'))
let currentSlide = 0

setInterval(() => {
    slides[currentSlide].classList.remove('active')
    currentSlide = (currentSlide+1) % slides.length
    slides[currentSlide].classList.add('active')
}, 8000)

const dataBox = document.querySelectorAll('.data-content')

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
    const triggerBotton = window.innerHeight / 1.5;
    dataBox.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBotton) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}