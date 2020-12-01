document.addEventListener('DOMContentLoaded', function() {

    body = document.querySelector("body")
    header = document.querySelector("header")
    bottom = document.querySelector(".bottom-menu")
    abrir = document.querySelector(".pop_up")
    tela = document.querySelector('.tela_video')
    fechar = document.querySelector(".fechar")
    opcoes = document.querySelector(".opcoes")

    abrir.addEventListener('click', function(event) {

        tela.style.display = "block"
        header.style.display = "none"
        bottom.style.display = "none"
        opcoes.style.display = "none"
        body.style.backgroundColor = '#686564'

    })

    fechar.addEventListener('click', function(event) {
        tela.style.display = "none"
        header.style.display = "flex"
        bottom.style.display = "flex"
        opcoes.style.display = "flex"
        body.style.backgroundColor = 'white'

    })



})