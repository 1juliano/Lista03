
let nota = prompt("Digite a nota (0 a 10):");


nota = Number(nota);


if (nota >= 9) {
    alert("Excelente ");
} else if (nota >= 7 && nota <= 8) {
    alert("Boa ");
} else if (nota >= 5 && nota <= 6) {
    alert("Regular ");
} else {
    alert("Insuficiente ");
}