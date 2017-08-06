console.log("novoCartao");
/*/IIFE novoCartao//*/ 

(function(controladorDeCartoes){
    "use strict";
    /*///   Novo cartao     ///*/
    var contador=$(".cartao").length;
    
    $(".novoCartao").submit(function(event){
        event.preventDefault();
        
        var campoConteudo=$(".novoCartao-conteudo");
        var conteudo =campoConteudo.val().trim()
        .replace(/\n/g,"<br>")
        .replace(/\*\*(.*)\*\*/g,"<b>$1</b>")
        .replace(/\*(.*)\*/g,"<em>$1</em>")
        
        if (conteudo){
            controladorDeCartoes.adicionaCartao(conteudo)
            $(document).trigger("precisaSincronizar");
        }
        campoConteudo.val("");
        
        
    })
    
})(controladorDeCartoes);