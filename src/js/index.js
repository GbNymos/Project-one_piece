
/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista temos que 
marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover 
a seleção dele 

    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover 
a seleção dele 
*/


//OBJETIVO: 1 e 2 - passo: 1 e 2.
const botoes= document.querySelectorAll(".botao");

const personagens=document.querySelectorAll(".personagem");


//Passa por cada um dos botoes e das personagens e aplicar as acoes que instrui.
botoes.forEach((botao,indice) => {
  botao.addEventListener("click",() => {

//passo 3 - do obejetivo 1 e 2 .
    desselecionarBotao();
    desselecionarPersonagem();
  
//passo 2 - do obejetivo 1 e 2 .
    botao.classList.add("selecionada");
    personagens[indice].classList.add("selecionado");
    
    
  });

});


function desselecionarPersonagem() {
  const personagemselecionada = document.querySelector(".personagem.selecionado");
  personagemselecionada.classList.remove("selecionado");
}

 
function desselecionarBotao() {
  const botaoselecionada = document.querySelector(".botao.selecionada");
  botaoselecionada.classList.remove("selecionada");
}

