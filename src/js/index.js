/* 
    OBJETIVO - ao clicar na aba temos que mostrar o conteúdo da aba 
    clicada pelo usuário e esconder o conteúdo da aba anterior.

    - Passo 1 - dar um jeito de pegar os elementos que representam 
    as abas no HTML.

    - Passo2 - dar um jeito de indentificar o clique no elemento
    da aba

    - Passo 3 - quando o usuário clicar, desmarcar a aba selecionada

    - Passa 4 - marcar a aba clicada como selecionado

    - Passo 5 - esconder o conteúdo anterior

    - Passo 6 - mostrar o conteúdo da aba selecionada
*/
const abas = document.querySelectorAll('.aba')


abas.forEach(aba => {
    aba.addEventListener('click', function () {

        if (aba.classList.contains('selecionado')) {
            return;
        }

        
       selecionarAba(aba)
       mostrarInformacoesDaAba(aba) 

        
    });
});

function selecionarAba(aba){
    const abaSelecionada = document.querySelector('.aba.selecionado');
    abaSelecionada.classList.remove('selecionado');

    
    aba.classList.add('selecionado');
}

function mostrarInformacoesDaAba(aba){
    const informacaoSelecionada = document.querySelector('.informacao.selecionado');
        informacaoSelecionada.classList.remove('selecionado');

    
        const idDoElementoDeInformacoesDaAba = 
        `informacao-${aba.id}`

        const informacaoASerMostrada = document
        .getElementById(idDoElementoDeInformacoesDaAba)
        informacaoASerMostrada.classList.add('selecionado')
}