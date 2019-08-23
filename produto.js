window.onload = function() {
    console.warn("OLAAAA MUNDO")

let meuform = $("#formProduto")

console.log(meuform)

meuform.on("submit",  function(event){
event.preventDefault()
console.log("clicou")
prepararBotao()
})

    function prepararBotao(){



        let botao =$("button#btnSalvar")
        let ladda = Ladda.create(botao[0]);
        ladda.start()



    }
function clicou(){
    prepararBotao()
}



}