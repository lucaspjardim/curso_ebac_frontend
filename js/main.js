$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault()

    })

    $('#id-tel').mask('(00) 00000-0000')
    $('#id-cpf').mask('000.000.000-00')
    $('#id-cep').mask('00000-000')

})