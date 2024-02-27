const form = document.getElementById('contact-form')
let formIsValid = false

function nameValid(name) {
    const nameArray = name.split(' ')
    return nameArray.lenght >= 2
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    submitForm()
})

function submitForm() {

    const nameForm = document.getElementById('name')
    const errorM = "Por favor preencha com nome e sobrenome!"

    formIsValid = nameValid(nameForm.value)

    if (formIsValid === false) {
        const errorMessage = document.querySelector('.error')
        errorMessage.innerHTML = errorM
        errorMessage.style.display = 'block'

        setTimeout(function() {
            errorMessage.style.display = 'none'
        }, 5000)
    } else {
        return submitForm()
    }
}

    