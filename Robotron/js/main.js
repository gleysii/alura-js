const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');
const braco = document.querySelector('#braco');

//a função addEventListener espera sempre duas coisas, o click e o que será feito 
somar.addEventListener("click", (evento) => {
   braco.value = parseInt(braco.value) + 1;//tratamento de dado
});

subtrair.addEventListener("click", (evento) => {
    if(braco.value > 0){
        braco.value = braco.value - 1;
    }else{
    }
});

/*as funções servem para armazenarmos trechos de códigos que são repetidos e só serão executados quando chamados*/

//existem as funções declaradas (com nome) e as funções anonimas (sem nome), a função anonima deve ser