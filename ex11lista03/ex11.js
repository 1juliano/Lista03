
let valor = prompt("Digite o valor total da compra:");


let codigo = prompt("Digite o código de desconto:");


valor = Number(valor);


if (codigo === "desc10") {
    let desconto = valor * 0.10;
    let valorFinal = valor - desconto;
    alert("Desconto aplicado! Valor final: R$ " + valorFinal.toFixed(2) + " ");
} else {
    alert("Código inválido. Valor original: R$ " + valor.toFixed(2));
}