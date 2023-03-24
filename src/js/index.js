const paineis = document.querySelectorAll('.imagem-fundo')
const selecionado = document.querySelector('.mostrar')
const btnVoltar = document.querySelector('.voltar')
const btnAvancar = document.querySelector('.avancar')
const botoes = document.querySelectorAll('.btn')

let painelAtual = 0

function esconderBtns() {
    if(painelAtual === 0){
        btnVoltar.classList.add('desativado')
    }else if(painelAtual !== 0 && painelAtual === paineis.length -1){
        btnAvancar.classList.add('desativado')
    }else{
        btnVoltar.classList.remove('desativado')
        btnAvancar.classList.remove('desativado')  
    }
}

function mostrarPainel(i) {
    paineis[i].classList.add('mostrar')
}

function esconderPainel(i) {
    paineis[i].classList.remove('mostrar')
}

botoes.forEach(botao => {
    botao.addEventListener('click', ()=> {
        if(botao.classList.contains('voltar') && painelAtual === 0){
            return
        }else if(botao.classList.contains('avancar') && painelAtual === paineis.length -1){
            return
        }

        esconderPainel(painelAtual)

        if(botao.classList.contains('avancar')) {
            painelAtual++
        }else{
            painelAtual--
        }

        mostrarPainel(painelAtual)
    
        esconderBtns()
    })
});