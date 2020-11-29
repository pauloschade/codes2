document.addEventListener('DOMContentLoaded', function() {

    ing = document.querySelector('.ing')
    sub =  document.querySelector('.sub-lista')
    ing2 = document.querySelector('.ing2')
    sub2 =  document.querySelector('.sub-lista2')


    ing.addEventListener('click', function(event) {

        ing.style.backgroundColor = '#686564'
        ing.style.borderTop = '#686564'
        ing.style.borderBottom = '#686564'
        sub.style.display = "flex"
    })

    ing2.addEventListener('click', function(event) {
        ing2.style.backgroundColor = '#686564'
        ing2.style.borderTop = '#686564'
        ing2.style.borderBottom = '#686564'
        sub2.style.display = "flex"
    })
})