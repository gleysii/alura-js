const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');
const estatisticas = document.querySelectorAll("[data-estatistica]");
const controle = document.querySelectorAll("[data-controle]")//nodelist
//usar dataset é melhor porque não ficamos dependentes de classes ou conteúdos que podem ser alterados e podem vir a prejudicar o nosso código

const pecas = {//um objeto com 5 itens com seus valores 
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

//No lugar de fazer for ou while, para array podemos usar um forEach
controle.forEach( (elemento) => {//percorre o array
    elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);//chamando a function com os parâmetros quando clicado
    atualizaEstatisticas(evento.target.dataset.peca);
    })
    //os eventos têm uma série de parâmetros, target é uma delas e no caso traz o valor de onde aquele clique aconteceu, parentNode informa o pai do elemento
})

//a função addEventListener espera sempre duas coisas, o click e o que será feito após ele
function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]");
    if(operacao === "-"){
        if(peca.value > 0){//validação
            peca.value = peca.value - 1;
        }else{
        }
    } else{
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca){
    console.log(peca[peca]);
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })
}

/*as funções servem para armazenarmos trechos de códigos que são repetidos e só serão executados quando chamados*/

//existem as funções declaradas (com nome) e as funções anonimas (sem nome), a função anonima deve ser