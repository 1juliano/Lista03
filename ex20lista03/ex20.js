
let preco = prompt("Digite o preço do produto:");


preco = Number(preco);


if (preco < 20) {
    alert("Produto barato ");
} else if (preco >= 20 && preco <= 100) {
    alert("Produto médio ");
} else {
    alert("Produto caro ");
}