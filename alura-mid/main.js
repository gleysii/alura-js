/*selecionar -> criar função que é executada somente quando chamada* -> indica elemento que vai chamar a função*/
function tocaSom (idElementoAudio){//utilizamos parâmetros para informar qual o audio que vai tocar 
    document.querySelector(idElementoAudio).play();
}

/*colocamos numa constante para ficaar mais legível e fácil de trabalhar*/
const listaDeTeclas = document.querySelectorAll('.tecla'); //criamos uma nodelist que fica armazenado nesta const obs: usar sempre const, a menos que o valor possa mudar
 
/*o ponto (.) em JS acessa os as funcionalidades de um elemento, a partir de o momento que o colocamos após um seletor, estamos acessando as funcionalidades daquele elemento, no caso, de audio*/

//se for um escopo muito grande o ideal é não ficar repetindo o código, mas sim, criar uma estrutura de repetição 

let contador = 0;

while(contador < listaDeTeclas.length){//compara e espera receber uma condição verdadeira ou falsa até o tamanho da lista
    //armazena-se trechos de código dentro de constantes para um código mais limpo 
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`//para textos dinâmicos usamos template strings com $ com a parte do texto que vai ser dinâmico entre chaves

    //console.log(instrumento);
    /*acessamos o elemento dentro da node list pelo índice*/
    tecla.onclick = function () {//para a função não ser invocada imediatamente, criamos essa function
        tocaSom(idAudio);
    } 
    contador++; //incrementa mais 1 
    //console.log(contador); - serve para acompanhar, dentro do console, como o looping está funcionando 
}


//Anotações de trechos de códigos apagados
//document.querySelector('.tecla_pom').onclick = tocaSomPom; /* (seletor individual) | quando a funcionalidade for chamada, vai disparar a função, mas se colocarmos ela com (), o navegador vai interpretar que é para executar imediatamente e vai bloquear porque precisa ter a interação do usuário primeiramente, como queremos apenas que a função onclick guarde "tocaSomPom" e execute a função quando clicarmos, retiramos os parêntesis.
