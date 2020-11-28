document.addEventListener('DOMContentLoaded', function() {

    ing = document.querySelector('.ing')
    sub =  document.querySelector('.sub-lista')

    ing.addEventListener('click', function(event) {

        ing.style.backgroundColor = '#686564'
        ing.style.borderTop = '#686564'
        ing.style.borderBottom = '#686564'
        sub.style.display = "flex"

    })
})