const botao = document.querySelector('.btn-plataforma')
const elementoPLataformas = document.querySelector('.btn-plataforma .plataformas')

botao.addEventListener('click', () => {
    const botaoEstaAberto = elementoPLataformas.classList.contains('ativo') //constains - pergunta se o elemento possui a classe 'ativo', se tiver, recebe true, se não, false.
    
    elementoPLataformas.classList.toggle('ativo')

    // if (botaoEstaAberto) {
    //     elementoPLataformas.classList.remove('ativo')
    // } else {
    //     elementoPLataformas.classList.add('ativo')
    // }
})