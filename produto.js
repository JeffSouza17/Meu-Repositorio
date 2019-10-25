window.onload = function () {
    console.warn("OLAAAA MUNDO")

    let meuform = $("#formProduto")

    console.log(meuform)

    meuform.on("submit", function (event) {
        event.preventDefault()
        console.log("clicou")
        prepararBotao()
        fetch("http://localhost:8080/storm-api/src/inserirproduto.php", {
            method: "POST",
            headers: {
                "Content-Type": "x-www-form-urlencoded;charset=UTF-8"
            }
        }).then(function (resposta) {
            alert(resposta)
        })
    })

    function prepararBotao() {
        let botao = $("button#btnSalvar")
        let ladda = Ladda.create(botao[0]);
        ladda.start()
    }
    function clicou() {
        prepararBotao()
    }
}
