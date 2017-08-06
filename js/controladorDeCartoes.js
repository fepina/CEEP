console.log("adicionaCartao")
/*/IIFE adicionaCartao//*/ 

var controladorDeCartoes= (function(){
    "use strict";
    
    /*///       Funcao adiciona cartao   ///*/
    var contador=0;
    function adicionaCartao(conteudo, cor){
        contador++
        
        var opcoes= criaOpcaoDoCartao(contador);
        
        var tipoCartao=decideTipoCartao(conteudo);
        
        
        var conteudoTag= $("<p>").addClass("cartao-conteudo")
        .append(conteudo)
        .attr("contenteditable",true)
        .on("input",editaCartaoHandler)    
        
        $("<div>").attr("id","cartao_"+contador)
        .attr("tabindex",0)
        .addClass("cartao")
        .addClass(tipoCartao)
        .append(opcoes)
        .append(conteudoTag)
        .css("background-color",cor)
        .prependTo(".mural")   
        
    }
    
    /*///    Botao remover   ///*/
    function removerCartao(){
        var cartao = document.querySelector("#cartao_" + this.dataset.id);
        cartao.classList.add("cartao--some");
        setTimeout(function() {
            cartao.remove();
            $(document).trigger("precisaSincronizar");
        }, 400);
    }
    var intervaloSyncEdicao;
    
    function editaCartaoHandler(event){
        clearTimeout(intervaloSyncEdicao);
        
        intervaloSyncEdicao= setTimeout(function(){
            $(document).trigger("precisaSincronizar");
        },1000);
    }
    
    
    var botoes=document.querySelectorAll(".opcoesDoCartao-remove");
    
    for (var i=0;i<botoes.length;i++){
        botoes[i].addEventListener("click",removerCartao);
    }
    
    /*///   Tamanho da caixa    ///*/
    
    function decideTipoCartao(conteudo){ 
        var quebras=conteudo.split("<br>").length ;/* split corta no caracter definido,br*/
        
        var totalDeLetras=conteudo.replace(/<br>/g," ").length ;/*expressao normativa pega todos os elementos */
        
        var ultimoMaior ="";
        conteudo.replace(/<br>/g," ")
        .split(" ")
        .forEach(function(palavra) {
            if(palavra.length>ultimoMaior.length){
                ultimoMaior=palavra;
            } 
        });
        
        var tamMaior= ultimoMaior.length;
        
        var tipoCartao= "cartao--textoPequeno";
        console.log(tamMaior,quebras, totalDeLetras)
        if(tamMaior<9 && quebras <5 && totalDeLetras<55){
            tipoCartao="cartao--textoGrande";
        }else if (tamMaior<12 && quebras < 6 && totalDeLetras<75){
            tipoCartao="cartao--textoMedio";
        }
        return tipoCartao;
    }
    
    return {
        adicionaCartao:adicionaCartao
        ,idUltimoCartao:function(){
            return contador;
            
        }
        
    }
})();