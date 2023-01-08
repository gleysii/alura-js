/*selecionar -> criar função que é executada somente quando chamada* -> indica elemento que vai chamar a função*/
function tocaSom (idElementoAudio){//utilizamos parâmetros para informar qual o audio que vai tocar 
    document.querySelector(idElementoAudio).play();
}

/*colocamos numa constante para ficaar mais legível e fácil de trabalhar*/
const listaDeTeclas = document.querySelectorAll('.tecla'); //criamos uma nodelist que fica armazenado nesta const obs: usar sempre const, a menos que o valor possa mudar
 
/*o ponto (.) em JS acessa os as funcionalidades de um elemento, a partir de o momento que o colocamos após um seletor, estamos acessando as funcionalidades daquele elemento, no caso, de audio*/

//se for um escopo muito grande o ideal é não ficar repetindo o código, mas sim, criar uma estrutura de repetição 

for(let contador = 0; contador < listaDeTeclas.length; contador++){//compara e espera receber uma condição verdadeira ou falsa até o tamanho da lista
    //armazena-se trechos de código dentro de constantes para um código mais limpo 
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`//para textos dinâmicos usamos template strings com $ com a parte do texto que vai ser dinâmico entre chaves

    //console.log(instrumento);
    /*acessamos o elemento dentro da node list pelo índice*/
    tecla.onclick = function () {//para a função não ser invocada imediatamente, criamos essa function
        tocaSom(idAudio);
    } 
    //console.log(contador); - serve para acompanhar, dentro do console, como o looping está funcionando 

    //ao pressionar em cima da tecla, ela ficará vermelha, para tal acessamos a lista de teclas e adicionamos a classe dentro dela por meio de um evento - inserção de classe


    tecla.onkeydown = function(evento){//o parâmetro event/e/evento fornece diversas propriedades e valores sobre o evento que acaba de ocorrer
        
        //essa propriedade code retorna como valor o nome da tecla pressionada
        if(evento.code === "Enter" || evento.code === "Space"){
          tecla.classList.add('ativa');
        }

        tecla.onkeyup = function(){
          tecla.classList.remove('ativa');
        }
    }
}
