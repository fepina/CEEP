console.log("CriaOpcoesDoCartao");
var criaOpcaoDoCartao= (function(){
    "use strict"
    function removerCartao(){
        var cartao = document.querySelector("#cartao_" + this.dataset.id);
        cartao.classList.add("cartao--some");
        setTimeout(function() {
            cartao.remove();
            $(document).trigger("precisaSincronizar");
        }, 400);
    }
    var ehpraeditar=false;
    
    function toggleEdicao(){
        var cartao=$("#cartao_" + this.dataset.id);
        var conteudo= cartao.find(".cartao-conteudo");
        
        if(ehpraeditar){
            ehpraeditar=false;
            conteudo.attr("contenteditable",false);
            conteudo.blur();    
        }else {
            ehpraeditar=true
            conteudo.attr("contenteditable",true);
            conteudo.focus(); 
        }
    }
    function opcoesDeCoresDoCartao(idDoCartao){
        var cores=[
            {nome: "Padrão",codigo: "#EBEF40"}
            ,{nome: "Importante",codigo: "#F05450"}
            ,{nome: "Tarefa",codigo: "#92C4EC"}
            ,{nome: "inspiracão",codigo: "#76EF40"}
        ];
        var opcaoDeCor=$("<div>").addClass("opcoesDoCartao-cores")
        .attr("data-ref",idDoCartao);

        cores.forEach(function(cor){
            var idInputCor="cor" +cor.nome+"-cartao"+idDoCartao;
            
            var inputCor=$("<input>").attr("type","radio")
            .attr("name","corDoCartao" +idDoCartao)
            .val (cor.codigo)
            .attr("id",idInputCor)
            .addClass("opcoesDoCartao-radioCor")
            
            var labelCor= $("<label>").css("color", cor.codigo)
            .attr("for",idInputCor)
            .attr("tabindex",0)
            .addClass("opcoesDoCartao-cor")
            .addClass("opcoesDoCartao-opcao")
            .text(cor.nome);
            
            opcaoDeCor.data("ref",idDoCartao).append(inputCor).append(labelCor);
        })

        opcaoDeCor.on("change",function(event){
            if(event.target.classList.contains("opcoesDoCartao-radioCor")){
                var cor= $(event.target);
                var cartao =$("#cartao_"+$(this).data("ref"));
                cartao.css("background-color",cor.val());
                $(document).trigger("precisaSincronizar")
            }
        })
        
        return opcaoDeCor
    }
    
    return function(idNovoCartao){
        
        var botaoRemove=$("<button>").addClass("opcoesDoCartao-remove")
        .addClass("opcoesDoCartao-opcao")
        .text("Remover")
        .click(removerCartao)
        .attr("data-id",idNovoCartao);
        
        var botaoEdita=$("<button>").addClass("opcoesDoCartao-edita")
        .addClass("opcoesDoCartao-opcao")
        .text("Editar")
        .click(toggleEdicao)
        .attr("data-id",idNovoCartao);
        
        var opcaoDeCor=opcoesDeCoresDoCartao(idNovoCartao);
        
        var opcoes=$("<div>").addClass("opcoesDoCartao")
        .append(botaoRemove)
        .append(botaoEdita)
        .append(opcaoDeCor)
        
        return opcoes;
    }        
})();