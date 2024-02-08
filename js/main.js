$(document).ready(function() {
    
    $('form').on('submit', function(e) {
        e.preventDefault()

        const inputText = $('#text-input').val()
        const newList = $(`<li></li>`)

        newList.click(function() {
            $(this).toggleClass('checked')
        })
        
        $(`${inputText}`).appendTo(newList)
        $(`<li>${inputText}</li>`).appendTo(newList)
        $(newList).appendTo('ul')
    })
    
})