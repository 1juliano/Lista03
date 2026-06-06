
let nota1 = prompt("Digite a primeira nota:");
let nota2 = prompt("Digite a segunda nota:");
let nota3 = prompt("Digite a terceira nota:");


nota1 = Number(nota1);
nota2 = Number(nota2);
nota3 = Number(nota3);


let media = (nota1 + nota2 + nota3) / 3;


if (media >= 6) {
    alert("Média: " + media.toFixed(2) + " - Aprovado ");
} else {
    alert("Média: " + media.toFixed(2) + " - Reprovado ");
}