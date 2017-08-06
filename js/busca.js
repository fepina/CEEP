console.log("busca");

/*/IIFE busca//*/ 

(function(){
    "use strict";
    /*///   Botao busca     
    
    $("#busca").on("input",function(){
        var busca=$(this).val().trim();
        
        
        if (busca.length){
            $(".cartao").hide().filter(function(){
                return $(this).find(".cartao-conteudo")
                .text()
                .match(new RegExp(busca,"i"));
                
            }).show();
        }else{
            $(".cartao").show();
        }
    });///*/
    
    /*///   Texto Com Highlight     ///*/
    $("#busca").on("input", function(){
        var busca = $(this).val().trim();
        
        if(busca.length >= 0){
            $(".cartao").hide().filter(function(){
                var cartaoConteudo = $(this).find(".cartao-conteudo");
                var regExp = new RegExp("(" +busca+ ")", "gi");                     
                var texto = cartaoConteudo.text();       
                if (cartaoConteudo.text().match(regExp)){                
                    var textoComHighlight = texto.replace(regExp,"<span class='marcado'>$1</span>")      /* Cria uma span para inserir a marcacao*/          
                    cartaoConteudo.html(textoComHighlight);
                    return true;                
                }else{
                    cartaoConteudo.html(texto);
                }                                                              
            }).show();
        }else{
            $(".cartao").show();
        }
    });
    
    
})();