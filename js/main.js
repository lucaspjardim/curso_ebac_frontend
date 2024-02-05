const form = document.getElementById('form-numbers');
let formisValid = false;

function validNumbers(numberA, numberB) {
    return numberB > numberA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let numberA = document.getElementById('number-A').value;
    let numberB = document.getElementById('number-B').value;
    const message = `Formulário válido B(${numberB}) é maior que A(${numberA})!`;
    const eMessage = `Formulário inválido A(${numberA}) é maior que B(${numberB})`
    const wMessage = `A${numberA} e B${numberB} são identicos, por favor preencha novamente!`

    formisValid = validNumbers(numberA, numberB)
    if(formisValid){
        const successMessage = document.querySelector('.success-msg');
        successMessage.innerHTML = message;
        successMessage.style.display = 'block';
    } else if (numberA === numberB) {
        const warningMessage = document.querySelector('.warning-msg');
        warningMessage.innerHTML = wMessage;
        warningMessage.style.display = 'block';
    } else {
        const errorMessage = document.querySelector('.error-msg');
        errorMessage.innerHTML = eMessage;
        errorMessage.style.display = 'block';
    }
    
})
