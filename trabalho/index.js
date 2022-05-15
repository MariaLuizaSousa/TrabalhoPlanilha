document.querySelector('#enviar').addEventListener("click", (event)=>{
    event.preventDefault();

    let v1 = document.querySelector("#valor_base").value;
    let v2 = document.querySelector("#valorTransporte").value;
    let v3 = document.querySelector("#valor_alimentos").value;
    let v4 = document.querySelector("#valor_receita").value;
    let v5 = document.querySelector("#valor_automovel").value;
    let v6 = document.querySelector("#valor_faltas").value;
    let v7 = document.querySelector("#desconto").value;
    let total = document.querySelector("#total").value;

    //somar
    let receitatotal = Number(v1)+Number(v2)+Number(v3);
    document.querySelector("#valor_receita").value = receitatotal;

    //somar2
    let descontototal = Number(v5)+Number(v6);
    document.querySelector("#desconto").value = descontototal;

    //desconto
    let resultadototal = Number(receitatotal)-Number(descontototal);
    document.querySelector("#total").value = resultadototal;
    });