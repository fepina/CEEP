console.log("ajuda");
/*/IIFE ajuda//*/ 

(function(controladorDeCartoes){
    "use strict";
    /*///   Botao ajuda    ///*/    
    $("#ajuda").click(function(){
        $.getJSON("https://ceep.herokuapp.com/cartoes/instrucoes",function(res){
            console.log(res);
            
            res.instrucoes.forEach(function(instrucao){
               controladorDeCartoes.adicionaCartao(instrucao.conteudo, instrucao.cor);
            });
        });
    });
    
})(controladorDeCartoes);