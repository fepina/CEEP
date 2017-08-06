console.log("sincronizacao");
/*/IIFE sincronizacao//*/ 

(function(controladorDeCartoes){
    "use strict";
    var usuario= "fernanda.pina@gmail.com";
    ///Botao sync///
    $(document).on("precisaSincronizar",function(){
        $("#sync").removeClass("botaoSync--sincronizado");
        $("#sync").addClass("botaoSync--esperando");
        
    })
    
    
    $(document).on("precisaSincronizar",function(){
        
        var cartoes=[];
        
        $(".cartao").each(function(){
            var cartao={};
            cartao.conteudo= $(this).find(".cartao-conteudo").html();//considera o html//
            cartao.cor=$(this).css("background-color");
            cartoes.push(cartao);
        });
        
        var mural={
            usuario: usuario
            , cartoes:cartoes
        }


        $.ajax({
            url:"https://ceep.herokuapp.com/cartoes/salvar"// destino servidor//
            ,method:"POST"
            ,data:mural//o que enviar//
            ,success:function(res){
                $("#sync").addClass("botaoSync--sincronizado")
                console.log(res.quantidade +" cartoes salvos em "+ res.usuario);
                
                var quantidadedeRemovidos=controladorDeCartoes.idUltimoCartao()
                -res.quantidade;
                console.log(quantidadedeRemovidos+ " cartoes removidos");
            }
            ,error:function(){
                $("#sync").addClass("botaoSync--deuRuim ")
                console.log("Não foi possível salvar o mural");
            }
            ,complete:function(){
                $("#sync").removeClass("botaoSync--esperando");
            }
        })
    })
    /*//    Carregando o mural  //*/
    $.getJSON(
        "https://ceep.herokuapp.com/cartoes/carregar?callback=?",
        {usuario:usuario},
        function(res){
            var cartoes= res.cartoes;
            console.log(cartoes.length + " carregados em " + res.usuario);
            cartoes.forEach(function(cartao){
                controladorDeCartoes.adicionaCartao(cartao.conteudo,cartao.cor);
            });
        });
        
        $("#sync").click(function () {
            $(document).trigger("precisaSincronizar")
            
        })
        

    })(controladorDeCartoes);
    