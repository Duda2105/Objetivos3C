const botoes= document.querySelectorAll(".botao")

 for(let i=0;1 <botoes.length;i++){
    botoes[i].onclick= function(){
         
        for(let j=0;j <botoes.length;j++){
            botoes[j].classList.remove("ativo");
        }
        botoes[1].classList.add("ativo");
   }
}
