//selecionando e adicionando nas variáveis
const listaDeTeclas = document.querySelectorAll('input[type=button]');//valores
const inputTel = document.querySelector('input[type=tel]');//campo de digitação

for (i = 0; i < listaDeTeclas.length; i++){

  const tecla = listaDeTeclas[i];//node list de todos os botões/valores
  
  tecla.onclick = function(){//quando a função for disparada
    inputTel.value = inputTel.value + tecla.value;//o campo recebe o que já está nele mais o valor clicado 
  }
  
}
