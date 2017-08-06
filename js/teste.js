var timer;
$("input").on("input",function(){
    clearTimeout(timer);
    timer =setTimeout(function() {
       console.log("envia para o servidor"); 
    }, 2000);
}) 


// $("li").on("click",function(){
//     console.log(this);
//     var cor= $(this).attr("data-cor");
//     console.log(cor);
//     $(this).css("color",cor);
// })


$(".compra").click(function(event){
    console.log(this)
   var li =event.target;
   var cor=$(li).attr("data-cor");
   $(li).css("color",cor);
})






// $("button").on("click", function(){
//     var div = $(this).parent();

//     var para = div.find("p");
//     var editar =(para.attr("contenteditable")=="true");
//     console.log(editar)
//     if (editar == false){
//         $(this).text("salvar");
//         para.attr("contenteditable", true);
//     }else{
//         $(this).text("editar");
//     para.attr("contenteditable", false);
//     }
// });



/*$("input[type=text]").on("input",function(){
    var buscar =$(this).val()

    if(buscar.length>0){
        $(".cartao").hide().filter(function() {
            return $(this).text().match(new RegExp(buscar,"i"))
        }).show();
        
    }else {
        $(".cartao").show();
    }

        
    
})*/






























/*ar botoes=document.querySelectorAll(".botao");
botoes.forEach(function(botao){
    botao.addEventListener("click",function(){
        
        console.log(this.dataset.id)
        document.querySelector("#cartao_"+this.dataset.id).remove();
        
    })
})

/*

$("input[type=submit").click(function(event){
    console.log("fui clicado");
    event.preventDefault();
})

var para=$("<p>")




 console.log(this);
this.parentNode.remove();*/


/*var para= $("<p>").text("sou master em jquery");
.addClass("cartao")
.attr("id","ola mundo")


/*var $("#para");
console.log(para.text())
para.on(click,)
para.click
para.toggle()*/